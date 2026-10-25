function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-logo" href="/">
          Snip<span>URL</span>
        </a>

        <p className="footer-description">
          Short links. Simple sharing.
        </p>

        <div className="footer-bottom">
          <p>
            &copy; {year} SnipURL. Built with React, Express & PostgreSQL.
          </p>

          <a
            href="https://github.com/pavithranscs25/URL-Shortener"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source on GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
