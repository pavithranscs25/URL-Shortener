const steps = [
  { title: 'Paste your link', text: 'Add any long URL into the box above.' },
  { title: 'Shorten it', text: 'We generate a short code for your link.' },
  { title: 'Copy and share', text: 'Copy the short URL and send it anywhere.' },
]

function HowItWorks() {
  return (
    <section className="how" id="how-it-works" aria-labelledby="how-title">
      <h2 id="how-title">How it works</h2>
      <ol className="steps">
        {steps.map((step) => (
          <li className="step" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowItWorks