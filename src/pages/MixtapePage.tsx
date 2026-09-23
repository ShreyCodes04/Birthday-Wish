import { useEffect, useRef, useState } from 'react'
import '../styles/mixtape-page.css'
import '../styles/mixtape-tweaks.css'
import '../styles/playlist-scroll.css'

const songs = [
  { title: 'Until I Found You', file: '/videos/Until I Found You.mp4' },
  { title: 'Glue Song', file: '/videos/Glue Song.mp4' },
  { title: 'Mirrors', file: '/videos/Mirrors.mp4' },
  { title: 'Double Take', file: '/videos/Double Take.mp4' },
  { title: 'Be By Baby', file: '/videos/Be My Baby.mp4' },
  { title: 'Love Me Not', file: '/videos/Love Me Not.mp4' },
  { title: 'Tujhe Apna Bana Lu', file: '/videos/Tujhe Apna Bana Lu.mp4' },
  { title: 'Chaar Kadam', file: '/videos/Chaar Kadam.mp4' },
  { title: 'Tenu Takda Rava', file: '/videos/Tenu Takda Rava.mp4' },
  { title: 'Ik Kudi', file: '/videos/Ik Kudi.mp4' },
  { title: 'Agar Khuda Ho Meherbaa', file: '/videos/Agar Khuda Ho Meherbaa.mp4' },
  { title: 'Jaan Ho Meri', file: '/videos/Jaan Ho Meri.mp4' },
]

export function MixtapePage() {
  const [selectedSong, setSelectedSong] = useState<(typeof songs)[number] | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobileVideo, setIsMobileVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 650px)')
    const syncMobileVideo = () => setIsMobileVideo(mobileQuery.matches)

    syncMobileVideo()
    mobileQuery.addEventListener('change', syncMobileVideo)

    return () => mobileQuery.removeEventListener('change', syncMobileVideo)
  }, [])

  const close = () => { setSelectedSong(null); setVideoLoaded(false) }
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
        {/* <div className="tape-label">for you <span>♥</span></div> */}
        <img className="ribbon ribbon-one" src="/mixtape-ribbon.png" alt="" aria-hidden="true" /><img className="envelope-sticker" src="/mixtape-letter.png" alt="" aria-hidden="true" /><img className="ribbon ribbon-two" src="/mixtape-ribbon.png" alt="" aria-hidden="true" />
        <div className="song-list">
          {songs.map((song, index) => <button className="song-strip" style={{ animationDelay: `${index * 120}ms` }} key={song.title} onClick={() => { setVideoLoaded(false); setSelectedSong(song) }}><span>♫</span><strong>{song.title}</strong><b>▶</b></button>)}
        </div>
      </section>
      {selectedSong && <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${selectedSong.title} video`}>
        <div className="video-popup">{!videoLoaded && <img className="video-loading" src="/loading.svg" alt="Loading video" />}<video ref={videoRef} src={selectedSong.file} autoPlay controls={!isMobileVideo} playsInline onLoadStart={() => setVideoLoaded(false)} onCanPlay={() => setVideoLoaded(true)} onWaiting={() => setVideoLoaded(false)} onPlaying={() => setVideoLoaded(true)} /><div className="modal-actions"><button onClick={close}>← Back</button><button onClick={replay}>↻ Replay</button></div></div>
      </div>}
    </main>
  )
}
