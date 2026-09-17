import { useRef, useState } from 'react'
import '../styles/mixtape-page.css'

const songs = [
  { title: 'Until I Found You', file: '/videos/Until I Found You.mp4' },
  { title: 'Glue Song', file: '/videos/Glue Song.mp4' },
  { title: 'Mirrors', file: '/videos/Mirrors.mp4' },
  { title: 'Double Take', file: '/videos/Double Take.mp4' },
]

export function MixtapePage() {
  const [selectedSong, setSelectedSong] = useState<(typeof songs)[number] | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const close = () => setSelectedSong(null)
  const replay = () => { if (videoRef.current) { videoRef.current.currentTime = 0; void videoRef.current.play() } }

  return (
    <main className="mixtape-page">
      <span className="mixtape-heart" aria-hidden="true">♥</span>
      <section className="mixtape-notebook" aria-label="A mixtape note">
        <p>🎧 Headphones pehen lijiye Madam Ji 😘</p>
        <span className="notebook-cassette" aria-hidden="true">📼</span>
      </section>
      <section className="mixtape-cassette" aria-label="Our mixtape">
        <div className="tape-window"><i /><i /></div>
        <div className="tape-label">for you <span>♥</span></div>
        <span className="ribbon ribbon-one" aria-hidden="true">🎀</span><span className="envelope-sticker" aria-hidden="true">💌</span><span className="ribbon ribbon-two" aria-hidden="true">🎀</span>
        <div className="song-list">
          {songs.map((song, index) => <button className="song-strip" style={{ animationDelay: `${index * 120}ms` }} key={song.title} onClick={() => setSelectedSong(song)}><span>♫</span><strong>{song.title}</strong><b>▶</b></button>)}
        </div>
      </section>
      {selectedSong && <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${selectedSong.title} video`}>
        <div className="video-popup"><video ref={videoRef} src={selectedSong.file} controls autoPlay playsInline /><div className="modal-actions"><button onClick={close}>← Back</button><button onClick={replay}>↻ Replay</button></div></div>
      </div>}
    </main>
  )
}
