function ShortenForm({ value, onChange, onSubmit, loading, error }) {
  return (
    <form className="shorten-form" onSubmit={onSubmit} noValidate>
      <label className="sr-only" htmlFor="long-url">Long URL</label>
      <div className="form-row">
        <input
          id="long-url"
          className={`url-input ${error ? 'has-error' : ''}`}
          type="text"
          inputMode="url"
          autoComplete="off"
          placeholder="Paste your long URL here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'url-error' : undefined}
          disabled={loading}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Shortening...
            </>
          ) : (
            'Shorten URL'
          )}
        </button>
      </div>
      <p id="url-error" className="error-message" role="alert">
        {error}
      </p>
    </form>
  )
}

export default ShortenForm