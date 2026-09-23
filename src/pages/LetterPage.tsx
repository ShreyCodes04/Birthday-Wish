import '../styles/letter-page.css'
import '../styles/letter-page-tweaks.css'

const letterWords = 'To my favourite doctor, A very heppy birthday! Thank you for staying, for understanding me. I am beyond grateful to hve you in my life. I hope this year brings you joy and happiness, and your every dreams come true. My favourite hello, my happiest place, my preetiest moon.'.split(' ')

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
            <p>{letterWords.map((word, index) => <span className="letter-word" style={{ animationDelay: `${1.7 + index * .09}s` }} key={`${word}-${index}`}>{word}&nbsp;</span>)}</p>
          </article>
          <img className="letter-cat" src="/cute-cat.png" alt="A cute cat holding a pencil" />
          <div className="heart-locket" aria-label="A heart pendant holding a baby photo">
            <img className="pendant-base" src="/heart-pendant.png" alt="" aria-hidden="true" />
            <img className="baby-in-heart" src="/baby.jpeg" alt="Baby photograph" />
          </div>
        </div>
        <a className="photobooth-link" href="#/photobooth"><span aria-hidden="true">📷</span><em>Click</em></a>
      </section>
    </main>
  )
}
