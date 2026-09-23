import { useEffect, useState } from 'react'
import { CoverPage } from './pages/CoverPage'
import { NoPage } from './pages/NoPage'
import { YesPage } from './pages/YesPage'
import { ClickPage } from './pages/ClickPage'
import { NextPage } from './pages/NextPage'
import { LetterPage } from './pages/LetterPage'
import { PhotoboothPage } from './pages/PhotoboothPage'
import { CelebrationPage } from './pages/CelebrationPage'
import { CakePage } from './pages/CakePage'
import { MixtapePage } from './pages/MixtapePage'
import './styles/mobile-fixes.css'

export function App() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || '/')
  const previousRoutes: Record<string, string> = { '/no': '/', '/yes': '/', '/click': '/yes', '/next': '/click', '/letter': '/next', '/photobooth': '/letter', '/cake': '/photobooth', '/celebration': '/photobooth', '/mixtape': '/celebration' }

  useEffect(() => {
    const syncRoute = () => setRoute(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  let page = <CoverPage />
  if (route === '/no') page = <NoPage />
  else if (route === '/yes') page = <YesPage />
  else if (route === '/click') page = <ClickPage />
  else if (route === '/next') page = <NextPage />
  else if (route === '/letter') page = <LetterPage />
  else if (route === '/photobooth') page = <PhotoboothPage />
  else if (route === '/celebration') page = <CelebrationPage />
  else if (route === '/cake') page = <CakePage />
  else if (route === '/mixtape') page = <MixtapePage />

  return <>{route !== '/' && <a className="global-back" href={`#${previousRoutes[route] ?? '/'}`} aria-label="Go back">←</a>}{page}</>
}
