import '../styles/click-page.css'

export function ClickPage() {
  return (
    <main className="click-page">
      <section className="click-card" aria-labelledby="birthday-title">
        <img className="birthday-cat" src="/birthday-cat.jpeg" alt="A cat in a party hat with a birthday cake" />
        <div className="birthday-content">
          <h1 id="birthday-title">Happy Birthday Shreyan-She <span aria-hidden="true">♥</span></h1>
          <p>Let my temporal bone rest on your clavicle, and let your phalanges intertwine with mine.🫰</p>
          <p>Stay cute, stay happy, stay mine <span aria-hidden="true"> 🔪♥</span></p>
        </div>
        <a className="next-button" href="#/next">Next</a>
      </section>
    </main>
  )
}
