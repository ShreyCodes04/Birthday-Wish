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

export function App() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || '/')

  useEffect(() => {
    const syncRoute = () => setRoute(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  if (route === '/no') {
    return <NoPage />
  }

  if (route === '/yes') {
    return <YesPage />
  }

  if (route === '/click') {
    return <ClickPage />
  }

  if (route === '/next') {
    return <NextPage />
  }

  if (route === '/letter') {
    return <LetterPage />
  }

  if (route === '/photobooth') {
    return <PhotoboothPage />
  }

  if (route === '/celebration') {
    return <CelebrationPage />
  }

  if (route === '/cake') {
    return <CakePage />
  }

  if (route === '/mixtape') {
    return <MixtapePage />
  }

  return <CoverPage />
}
