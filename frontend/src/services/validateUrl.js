// Returns { valid: true, url } or { valid: false, message }.
export function validateUrl(input) {
  const value = input.trim()

  if (!value) {
    return { valid: false, message: 'Enter a URL to shorten.' }
  }

  // Be friendly: allow "example.com/page" by adding https://
  const withProtocol = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(value)
    ? value
    : `https://${value}`

  try {
    const parsed = new URL(withProtocol)
    const isHttp = parsed.protocol === 'http:' || parsed.protocol === 'https:'
    const hasDomain = parsed.hostname.includes('.') && !parsed.hostname.endsWith('.')

    if (!isHttp || !hasDomain) {
      return { valid: false, message: 'Enter a valid URL, like https://example.com/page.' }
    }
    return { valid: true, url: parsed.href }
  } catch {
    return { valid: false, message: 'Enter a valid URL, like https://example.com/page.' }
  }
}