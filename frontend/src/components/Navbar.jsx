function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="/" aria-label="SnipURL home">
          Snip<span>URL</span>
        </a>
        <nav aria-label="Main">
          <a className="nav-link" href="#how-it-works">How it works</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar