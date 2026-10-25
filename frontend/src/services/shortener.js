const API_BASE_URL = 'https://snip-url-backend-zeta.vercel.app';

export async function shortenUrl(longUrl) {
  const response = await fetch(`${API_BASE_URL}/api/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      originalUrl: longUrl,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to shorten URL');
  }

  return {
    originalUrl: data.originalUrl,
    shortUrl: data.shortUrl,
  };
}
