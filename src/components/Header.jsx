import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/menu', label: 'Menu' },
    { path: '/galleria', label: 'Galleria' },
    { path: '/contatti', label: 'Contatti' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-wood-dark/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Lantern Icon */}
            <div className="relative">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 100 100">
                <rect x="30" y="30" width="40" height="50" rx="5" fill="#D4AF37"/>
                <rect x="35" y="35" width="30" height="40" rx="3" fill="#FFD700" opacity="0.9"/>
                <ellipse cx="50" cy="55" rx="8" ry="12" fill="#FFF8DC" opacity="0.8" className="animate-glow"/>
                <rect x="35" y="22" width="30" height="10" rx="2" fill="#D4AF37"/>
                <rect x="45" y="15" width="10" height="10" rx="2" fill="#D4AF37"/>
                <path d="M 42 15 Q 50 5 58 15" stroke="#D4AF37" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <rect x="32" y="78" width="36" height="6" rx="2" fill="#D4AF37"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-cream font-heading text-lg md:text-xl font-bold leading-tight">
                La Vecchia Lanterna
              </h1>
              <p className="text-gold text-xs md:text-sm font-accent">di Temù</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-cream/90 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+393792102615"
              className="text-cream/80 hover:text-gold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">379 210 2615</span>
            </a>
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine hover:bg-wine-dark text-cream px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Prenota
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cream/20 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-gold'
                      : 'text-cream/90 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-cream/20">
                <a
                  href="tel:+393792102615"
                  className="text-cream flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>379 210 2615</span>
                </a>
                <a
                  href="https://www.bookta.it/pizzerialavecchialanternaditemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-wine hover:bg-wine-dark text-cream px-5 py-3 rounded-lg text-center font-semibold transition-all duration-300"
                >
                  Prenota un Tavolo
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
