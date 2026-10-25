import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ShortenForm from './components/ShortenForm'
import ResultCard from './components/ResultCard'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import { shortenUrl } from './services/shortener'
import { validateUrl } from './services/validateUrl'

function App() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleInputChange = (value) => {
    setInput(value)
    if (error) setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault() // Enter key also triggers this
    if (loading) return // block repeated submissions

    const check = validateUrl(input)
    if (!check.valid) {
      setError(check.message)
      setResult(null)
      return
    }

    setError('')
    setCopied(false)
    setLoading(true)
    try {
      const data = await shortenUrl(check.url)
      setResult(data)
    } catch {
      setError('Something went wrong while shortening your link. Try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!result) return
    try {
      await navigator.clipboard.writeText(result.shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setError('Could not copy automatically. Select the link and copy it manually.')
    }
  }

  return (
    <div className="page">
      <Navbar />
      <main className="main">
        <section className="hero">
          <h1>Shorten links. Share smarter.</h1>
          <p className="subtitle">
            Turn long, messy URLs into clean short links that are easy to share
            in messages, posts, and documents.
          </p>
          <ShortenForm
            value={input}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
          {result && <ResultCard result={result} copied={copied} onCopy={handleCopy} />}
        </section>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App