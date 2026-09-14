import '../styles/next-page.css'

export function NextPage() {
  return (
    <main className="next-page">
      <section className="next-card" aria-labelledby="letter-prompt">
        <a className="letter-link" href="/letter" aria-label="Open your letter">
          <span className="envelope" aria-hidden="true">
            <span className="envelope-flap" />
            <span className="ribbon ribbon-horizontal" />
            <span className="ribbon ribbon-vertical" />
            <span className="bow bow-left" />
            <span className="bow bow-right" />
            <span className="bow-knot" />
            <span className="bow-tail bow-tail-left" />
            <span className="bow-tail bow-tail-right" />
          </span>
        </a>
        <p id="letter-prompt" className="letter-prompt">Tap here to open</p>
        <span className="corner-flowers" aria-hidden="true">❀ ❀</span>
      </section>
    </main>
  )
}
