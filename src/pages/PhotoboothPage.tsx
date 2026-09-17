import { useEffect, useState } from 'react'
import '../styles/photobooth-page.css'
import '../styles/photobooth-tweaks.css'
import '../styles/photobooth-celebration-link.css'
import '../styles/photobooth-cake-link.css'

const lines = ["Taara na disse, Ya chaann kho jaawe", "Tenu sang rakhna"]
lines.push("Kujj na howe, Ya sab ho jaawe")
lines.push("Tenu sang rakhna")
lines.push("Saah ruk jaawe, Ya jag mukk jaawe")
lines.push("Tenu sang rakhna.")
lines.push("Dariya de agge, Ambar jhuk jaawe")
lines.push("Tenu sang rakhna.")
lines.push("Taara na disse, Ya chaann kho jaawe,")
lines.push("Tenu sang rakhna.")
lines.push("Baddalaan pichhe Sooraj luk jaave")
lines.push("Tenu sang rakhna.")
lines.push("Vaddi ton vaddi, Koi vi foj aawe")
lines.push("Tenu sang rakhna")
export function PhotoboothPage() {
  const [text, setText] = useState('')

  useEffect(() => {
    let index = 0
    let lineIndex = 0
    let deleting = false
    let timeout: number
    const tick = () => {
      const message = lines[lineIndex]
      if (!deleting) {
        index += 1
        setText(message.slice(0, index))
        if (index === message.length) { deleting = true; timeout = window.setTimeout(tick, 1800); return }
        timeout = window.setTimeout(tick, 85)
      } else {
        index -= 1
        setText(message.slice(0, index))
        if (index === 0) { deleting = false; lineIndex = (lineIndex + 1) % lines.length; timeout = window.setTimeout(tick, 700); return }
        timeout = window.setTimeout(tick, 50)
      }
    }
    timeout = window.setTimeout(tick, 700)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <main className="photobooth-page">
      <div className="clothesline" aria-hidden="true" />
      <section className="polaroids" aria-label="Our favourite photos">
        <figure className="polaroid polaroid-one"><span className="clip" /><img src="/photobooth-1.jpeg" alt="A festive photograph together" /><figcaption>♥</figcaption></figure>
        <figure className="polaroid polaroid-two"><span className="clip" /><img src="/photobooth-2.jpeg" alt="A photograph with a dog" /><figcaption>♥</figcaption></figure>
        <figure className="polaroid polaroid-three"><span className="clip" /><img src="/photobooth-3.jpeg" alt="A cinema photograph together" /><figcaption>♥</figcaption></figure>
      </section>
      <section className="love-message" aria-label="A romantic message">
        <p className="tiny-heart heart-left" aria-hidden="true">♥</p><p className="tiny-heart heart-right" aria-hidden="true">♥</p>
        <h1>LOBH YOU LOADS</h1>
        <p className="type-line" aria-label="A looping lyric message">{text}<span className="cursor" aria-hidden="true">|</span></p>
      </section>
      <span className="cake" aria-hidden="true">🎂</span>
      <a className="celebrate-link" href="#/cake">Celebrate</a>
      <a className="gift gift-link" href="#/celebration" aria-label="Open the birthday celebration"><span aria-hidden="true">🎁</span><em>Open</em></a>
    </main>
  )
}
