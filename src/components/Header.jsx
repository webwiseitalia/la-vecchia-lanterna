import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      )
    }
  }, [])

  const navItems = [
    { path: '/', label: 'Home', num: '01' },
    { path: '/chi-siamo', label: 'Chi Siamo', num: '02' },
    { path: '/menu', label: 'Menu', num: '03' },
    { path: '/galleria', label: 'Galleria', num: '04' },
    { path: '/contatti', label: 'Contatti', num: '05' },
  ]

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 2rem) 2rem)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
      },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 2rem) 2rem)',
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-header transition-all duration-700 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
        style={{
          background: isScrolled
            ? 'linear-gradient(to bottom, rgba(44, 24, 16, 0.95), rgba(44, 24, 16, 0.8))'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" ref={logoRef} className="relative group">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.rect
                    x="30" y="30" width="40" height="50" rx="5"
                    fill="#D4AF37"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.ellipse
                    cx="50" cy="55" rx="8" ry="12"
                    fill="#FFF8DC"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                  />
                  <motion.path
                    d="M 42 15 Q 50 5 58 15"
                    stroke="#D4AF37"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </svg>
              </div>
              <div className="hidden md:block">
                <span className="block text-[var(--color-cream)] font-heading text-lg tracking-tight">
                  La Vecchia
                </span>
                <span className="block text-[var(--color-gold)] font-accent text-xl -mt-1">
                  Lanterna
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative"
              >
                <span className="text-[var(--color-cream)] text-sm tracking-widest uppercase transition-colors group-hover:text-[var(--color-gold)]">
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-gold)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Menu Toggle */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-creative text-xs py-3 px-6"
            >
              Prenota
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="relative w-6 h-4">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-cream)]"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color-cream)] -translate-y-1/2"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-cream)]"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[99] bg-[var(--color-wood-dark)] flex flex-col justify-center px-8"
          >
            <nav className="space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to={item.path}
                    className="group flex items-baseline gap-4 py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[var(--color-gold)] text-xs font-mono">
                      {item.num}
                    </span>
                    <span className="text-[var(--color-cream)] text-4xl md:text-6xl font-heading transition-all group-hover:text-[var(--color-gold)] group-hover:translate-x-4">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-8 border-t border-[var(--color-cream)]/10"
            >
              <a
                href="tel:+393792102615"
                className="text-[var(--color-cream)]/60 hover:text-[var(--color-gold)] transition-colors"
              >
                +39 379 210 2615
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
