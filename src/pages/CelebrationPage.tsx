import '../styles/celebration-page.css'
import '../styles/mixtape-link.css'

export function CelebrationPage() {
  return (
    <main className="celebration-page">
      <img className="celebration-flag flag-left" src="/celebration/1.png" alt="" aria-hidden="true" />
      <img className="celebration-flag flag-right" src="/celebration/1.png" alt="" aria-hidden="true" />
      <img className="celebration-balloon balloon-left" src="/celebration/balloon1.png" alt="" aria-hidden="true" />
      <img className="celebration-balloon balloon-right" src="/celebration/balloon2.png" alt="" aria-hidden="true" />
      <img className="celebration-decor decor-left" src="/celebration/decorate.png" alt="" aria-hidden="true" />
      <img className="celebration-decor decor-right" src="/celebration/smiley_icon.png" alt="" aria-hidden="true" />
      <section className="celebration-content" aria-labelledby="celebration-title">
        <div className="celebration-heading">
          <img src="/celebration/hat.png" alt="" aria-hidden="true" />
          <p>Happy</p><h1 id="celebration-title">Birthday!</h1>
          <p className="celebration-note">My Cutie Patotie Doctor Madam. Khush Raho Sada Satati Raho ♥</p>
        </div>
        <div className="celebration-portrait"><img src="/celebration/r5.jpg" alt="Birthday celebration portrait" /><span>♥</span></div>
        <img className="celebration-cat" src="/celebration/mewmew.gif" alt="A celebratory cat" />
      </section>
      <a className="mixtape-link" href="#/mixtape"><img src="/cassette.png" alt="Cassette tape" /><span>Play mix tape</span></a>
      <div className="floating-flowers" aria-hidden="true"><img src="/celebration/decorate_flower.png" alt="" /><img src="/celebration/decorate_flower.png" alt="" /><img src="/celebration/heart.png" alt="" /></div>
    </main>
  )
}
