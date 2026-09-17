import '../styles/no-page.css'

export function NoPage() {
  return (
    <main className="no-page">
      <section className="no-card" aria-labelledby="no-title">
        <img className="no-cat" src="/no-cat.jpeg" alt="An unimpressed cat with a flower" />
        <div className="no-content">
          <h1 id="no-title">How dare you!!!</h1>
          <a className="go-back-button" href="#/">Go back</a>
        </div>
      </section>
    </main>
  )
}
