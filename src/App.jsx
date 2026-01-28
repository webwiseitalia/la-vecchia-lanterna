import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLenis, scrollTo } from './hooks/useLenis'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Menu from './pages/Menu'
import Galleria from './pages/Galleria'
import Contatti from './pages/Contatti'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use Lenis scrollTo for smooth scroll, with instant option for page changes
    scrollTo(0, { immediate: true })
    // Fallback for when Lenis is not ready
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  useLenis()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
