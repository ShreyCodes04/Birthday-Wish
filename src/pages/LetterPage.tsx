import '../styles/letter-page.css'

export function LetterPage() {
  return (
    <main className="letter-page">
      <section className="letter-card" aria-label="A loving birthday letter">
        <div className="letter-scene">
          <div className="open-envelope" aria-hidden="true">
            <div className="envelope-back" />
            <div className="envelope-flap-open" />
            <div className="envelope-front" />
          </div>
          <article className="love-letter">
            <img className="letter-bow" src="/red-bow.png" alt="" aria-hidden="true" />
            <p>To my favourite doctor,<br />A very happy birthday!<br />Tara na disse ya chann kho jave,<br />Tenu Sang Rakhna!<br />Saah ruk jaawe,<br />Ya jag mukk jaawe<br />Tenu sang rakhna.<br />Baddalaan pichhe Sooraj luk jaave <br />Tenu sang rakhna. <br />Dariya de agge, Ambar jhuk jaawe <br />Tenu sang rakhna. </p>
          </article>
          <img className="letter-cat" src="/cute-cat.png" alt="A cute cat holding a pencil" />
          <div className="heart-locket" aria-label="A heart pendant holding a baby photo">
            <img className="pendant-base" src="/heart-pendant.png" alt="" aria-hidden="true" />
            <img className="baby-in-heart" src="/baby.jpeg" alt="Baby photograph" />
          </div>
        </div>
        <a className="photobooth-link" href="/photobooth"><span aria-hidden="true">📷</span><em>Click</em></a>
      </section>
    </main>
  )
}
