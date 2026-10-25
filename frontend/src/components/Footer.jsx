const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {year} SnipURL. Frontend demo built with React + Vite.</p>
    </footer>
  )
}

export default Footer