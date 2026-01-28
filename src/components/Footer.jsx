import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const elements = footer.querySelectorAll('.footer-reveal')

    elements.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 80%',
            once: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-[var(--color-wood-dark)] overflow-hidden">
      {/* Marquee */}
      <div className="py-8 border-b border-[var(--color-cream)]/5 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-block mx-8 text-[var(--color-cream)]/10 text-hero font-heading uppercase">
              Ristorante • Pizzeria • Bar •
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 py-16 md:py-24">
        {/* Top Section - Broken Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 text-center lg:text-left">
          {/* Logo & Tagline - Offset */}
          <div className="lg:col-span-5 footer-reveal">
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 mb-8">
              <svg viewBox="0 0 100 100" className="w-16 h-16 flex-shrink-0">
                <rect x="30" y="30" width="40" height="50" rx="5" fill="#D4AF37"/>
                <ellipse cx="50" cy="55" rx="8" ry="12" fill="#FFF8DC" opacity="0.7"/>
                <path d="M 42 15 Q 50 5 58 15" stroke="#D4AF37" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
              <div>
                <h3 className="text-[var(--color-cream)] font-heading text-2xl">La Vecchia Lanterna</h3>
                <p className="text-[var(--color-gold)] font-accent text-xl">di Temù</p>
              </div>
            </div>
            <p className="text-[var(--color-cream)] text-body-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Un'osteria tradizionale nel cuore delle Alpi, dove ogni piatto racconta
              la storia della nostra valle.
            </p>
          </div>

          {/* Empty Space for Asymmetry */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation - Staggered */}
          <div className="lg:col-span-2 footer-reveal">
            <h4 className="text-[var(--color-gold)] text-xs uppercase tracking-[0.2em] mb-6">
              Navigazione
            </h4>
            <nav className="flex flex-wrap justify-center gap-4 lg:block lg:space-y-3">
              {['Home', 'Chi Siamo', 'Menu', 'Galleria', 'Contatti'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact - Different alignment */}
          <div className="lg:col-span-3 lg:text-right footer-reveal">
            <h4 className="text-[var(--color-gold)] text-xs uppercase tracking-[0.2em] mb-6">
              Contatti
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[var(--color-cream)] text-xs mb-1">Indirizzo</p>
                <p className="text-[var(--color-cream)]">Via Roma, 55</p>
                <p className="text-[var(--color-cream)]">25050 Temù (BS)</p>
              </div>
              <div>
                <p className="text-[var(--color-cream)] text-xs mb-1">Telefono</p>
                <a href="tel:+393792102615" className="text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors">
                  +39 379 210 2615
                </a>
              </div>
              <div>
                <p className="text-[var(--color-cream)] text-xs mb-1">Orari</p>
                <p className="text-[var(--color-cream)] text-sm">10:30–15:00 / 18:00–23:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with offset */}
        <div className="my-12 md:my-16 mx-4 md:ml-[10%] md:mr-[20%] h-px bg-gradient-to-r from-[var(--color-gold)]/30 via-[var(--color-gold)]/10 to-transparent footer-reveal" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 footer-reveal text-center md:text-left">
          {/* Social */}
          <div>
            <div className="flex justify-center md:justify-start gap-6 mb-4">
              <a
                href="https://instagram.com/lavecchialanterna2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors text-sm uppercase tracking-widest"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors text-sm uppercase tracking-widest"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/393792102615"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors text-sm uppercase tracking-widest"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-[8vw] md:text-[5vw] font-heading text-[var(--color-cream)]/10 uppercase leading-none">
              TEMÙ
            </p>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-[var(--color-cream)] text-xs">
              © {currentYear} La Vecchia Lanterna di Temù
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-end">
              <Link to="/privacy-policy" className="text-[var(--color-cream)] hover:text-[var(--color-gold)] text-xs transition-colors">
                Privacy
              </Link>
              <Link to="/cookie-policy" className="text-[var(--color-cream)] hover:text-[var(--color-gold)] text-xs transition-colors">
                Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
