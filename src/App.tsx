import { CoverPage } from './pages/CoverPage'

export function App() {
  if (window.location.pathname === '/yes' || window.location.pathname === '/no') {
    return <main className="blank-page" aria-label="A page waiting to be written" />
  }

  return <CoverPage />
}
