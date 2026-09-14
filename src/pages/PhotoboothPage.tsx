import { useEffect, useState } from 'react'
import '../styles/photobooth-page.css'
import '../styles/photobooth-tweaks.css'

const message = "You don't know how much you mean to me"

export function PhotoboothPage() {
  const [text, setText] = useState('')

  useEffect(() => {
    let index = 0
    let deleting = false
    let timeout: number
    const tick = () => {
      if (!deleting) {
        index += 1
        setText(message.slice(0, index))
        if (index === message.length) { deleting = true; timeout = window.setTimeout(tick, 1800); return }
        timeout = window.setTimeout(tick, 85)
      } else {
        index -= 1
        setText(message.slice(0, index))
        if (index === 0) { deleting = false; timeout = window.setTimeout(tick, 700); return }
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
        <p className="type-line" aria-label={message}>{text}<span className="cursor" aria-hidden="true">|</span></p>
      </section>
      <span className="cake" aria-hidden="true">🎂</span><span className="gift" aria-hidden="true">🎁</span>
    </main>
  )
}
