function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="/" aria-label="SnipURL home">
          <span className="logo-icon">S</span>
          <span>Snip<span className="logo-highlight">URL</span></span>
        </a>

        <nav className="navbar-nav" aria-label="Main navigation">
          <a className="nav-link" href="#how-it-works">
            How it works
          </a>

          <a
            className="nav-link github-link"
            href="https://github.com/pavithranscs25/URL-Shortener"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a className="nav-cta" href="#shortener">
            Shorten URL
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
