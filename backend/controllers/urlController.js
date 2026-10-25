const crypto = require('crypto');
const pool = require('../config/db');

async function shortenUrl(req, res, next) {
  try {
    const { originalUrl } = req.body;

    // Validate URL presence
    if (!originalUrl) {
      return res.status(400).json({
        error: 'URL is required',
      });
    }

    // Validate URL format
    let parsedUrl;

    try {
      parsedUrl = new URL(originalUrl);
    } catch {
      return res.status(400).json({
        error: 'Invalid URL',
      });
    }

    // Allow only HTTP and HTTPS
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return res.status(400).json({
        error: 'Only HTTP and HTTPS URLs are allowed',
      });
    }

    // Generate a unique short code with retry logic
    let result;
    let attempts = 0;

    while (attempts < 5) {
      attempts++;

      const shortCode = crypto.randomBytes(4).toString('hex');

      try {
        result = await pool.query(
          `INSERT INTO short_urls (short_code, original_url)
           VALUES ($1, $2)
           RETURNING short_code, original_url`,
          [shortCode, parsedUrl.href]
        );

        // Insert successful
        break;
      } catch (error) {
        if (error.code === '23505') {
          // Duplicate code: generate another one
          continue;
        }

        // Pass other database errors to error handler
        throw error;
      }
    }

    // All five attempts failed
    if (!result) {
      return res.status(500).json({
        error: 'Unable to generate a unique short code. Please try again.',
      });
    }

    const savedUrl = result.rows[0];

    return res.status(201).json({
      originalUrl: savedUrl.original_url,
      shortCode: savedUrl.short_code,
      shortUrl: `${req.protocol}://${req.get('host')}/${savedUrl.short_code}`,
    });
  } catch (error) {
    next(error);
  }
}

async function redirectUrl(req, res, next) {
  try {
    const { code } = req.params;

    // Increment clicks and retrieve the original URL
    const result = await pool.query(
      `UPDATE short_urls
       SET clicks = clicks + 1
       WHERE short_code = $1
       RETURNING original_url`,
      [code]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Short URL not found');
    }

    return res.redirect(result.rows[0].original_url);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  shortenUrl,
  redirectUrl,
};