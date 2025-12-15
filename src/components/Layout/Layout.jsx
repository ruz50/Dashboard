import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-body)]">
      <Header mode={mode} setMode={setMode} />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
