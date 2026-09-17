import '../styles/cake-page.css'

export function CakePage() {
  return (
    <main className="cake-page">
      <section className="cake-card" aria-label="Birthday celebration video">
        <div className="cake-video-frame"><video autoPlay loop controls playsInline><source src="/videos/FILE 2026-09-17 23:35:07.mp4" type="video/mp4" />Your browser does not support this birthday video.</video></div>
        <a className="cake-back-button" href="#/photobooth">Back</a>
      </section>
    </main>
  )
}
