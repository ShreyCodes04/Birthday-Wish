import '../styles/yes-page.css'

export function YesPage() {
  return (
    <main className="yes-page">
      <section className="yes-card" aria-labelledby="yes-title">
        <img className="yes-cat" src="/yes-cat.jpeg" alt="A happy cat with a pink flower" />
        <div className="yes-content">
          <h1 id="yes-title">That&apos;s a good Girl!! <span aria-hidden="true">💋</span></h1>
          <a className="click-button" href="#/click">Click</a>
        </div>
      </section>
    </main>
  )
}
