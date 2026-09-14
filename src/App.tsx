import { CoverPage } from './pages/CoverPage'
import { NoPage } from './pages/NoPage'
import { YesPage } from './pages/YesPage'
import { ClickPage } from './pages/ClickPage'
import { NextPage } from './pages/NextPage'
import { LetterPage } from './pages/LetterPage'
import { PhotoboothPage } from './pages/PhotoboothPage'

export function App() {
  if (window.location.pathname === '/no') {
    return <NoPage />
  }

  if (window.location.pathname === '/yes') {
    return <YesPage />
  }

  if (window.location.pathname === '/click') {
    return <ClickPage />
  }

  if (window.location.pathname === '/next') {
    return <NextPage />
  }

  if (window.location.pathname === '/letter') {
    return <LetterPage />
  }

  if (window.location.pathname === '/photobooth') {
    return <PhotoboothPage />
  }

  return <CoverPage />
}
