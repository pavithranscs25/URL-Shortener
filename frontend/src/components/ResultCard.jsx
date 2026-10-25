function ResultCard({ result, copied, onCopy }) {
  return (
    <section className="result-card" aria-live="polite" aria-label="Your short URL">
      <p className="result-label">Your short URL</p>
      <div className="result-row">
        <a className="short-url" href={result.shortUrl} onClick={(e) => e.preventDefault()}>
          {result.shortUrl}
        </a>
        <button className="btn btn-secondary" type="button" onClick={onCopy}>
          {copied ? 'Copied' : 'Copy URL'}
        </button>
      </div>
      <p className="original-url" title={result.originalUrl}>
        Original: {result.originalUrl}
      </p>
      <p className={`copy-success ${copied ? 'visible' : ''}`} role="status">
        {copied ? 'Short URL copied to your clipboard.' : ''}
      </p>
    </section>
  )
}

export default ResultCard