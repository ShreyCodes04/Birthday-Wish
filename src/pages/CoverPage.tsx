import '../styles/cover-page.css'

export function CoverPage() {
  return (
    <main className="cover-page">
      <section className="cover-card" aria-labelledby="cover-title">
        <div className="cover-content">
          <h1 id="cover-title" className="cover-hey">Hey!!</h1>
          <p className="cover-message">I made something for you</p>
          <p className="cover-question">Do you want to see?</p>
          <nav className="cover-actions" aria-label="Choose an answer">
            <a className="choice-button" href="#/yes">Yes</a>
            <a className="choice-button" href="#/no">No</a>
          </nav>
        </div>
        <img className="cover-cat" src="/cat-reference.jpeg" alt="A sweet wide-eyed cat" />
      </section>
    </main>
  )
}
