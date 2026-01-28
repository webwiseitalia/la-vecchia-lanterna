import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wood-dark text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 100 100">
                <rect x="30" y="30" width="40" height="50" rx="5" fill="#D4AF37"/>
                <rect x="35" y="35" width="30" height="40" rx="3" fill="#FFD700" opacity="0.9"/>
                <ellipse cx="50" cy="55" rx="8" ry="12" fill="#FFF8DC" opacity="0.8"/>
                <rect x="35" y="22" width="30" height="10" rx="2" fill="#D4AF37"/>
                <rect x="45" y="15" width="10" height="10" rx="2" fill="#D4AF37"/>
                <path d="M 42 15 Q 50 5 58 15" stroke="#D4AF37" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <rect x="32" y="78" width="36" height="6" rx="2" fill="#D4AF37"/>
              </svg>
              <div>
                <h3 className="font-heading text-lg font-bold">La Vecchia Lanterna</h3>
                <p className="text-gold text-sm font-accent">di Temù</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm mb-4">
              Osteria • Pizzeria • Bar
            </p>
            <p className="text-cream/60 text-sm">
              Via Roma, 55<br />
              25050 Temù (BS)<br />
              Alta Valle Camonica
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Link Utili</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-cream/70 hover:text-gold transition-colors text-sm">
                Home
              </Link>
              <Link to="/chi-siamo" className="text-cream/70 hover:text-gold transition-colors text-sm">
                Chi Siamo
              </Link>
              <Link to="/menu" className="text-cream/70 hover:text-gold transition-colors text-sm">
                Menu
              </Link>
              <Link to="/galleria" className="text-cream/70 hover:text-gold transition-colors text-sm">
                Galleria
              </Link>
              <Link to="/contatti" className="text-cream/70 hover:text-gold transition-colors text-sm">
                Contatti
              </Link>
              <a
                href="https://www.bookta.it/pizzerialavecchialanternaditemu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine hover:text-gold transition-colors text-sm font-semibold"
              >
                Prenota un Tavolo
              </a>
            </nav>
          </div>

          {/* Column 3 - Hours */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Orari di Apertura</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-cream font-medium">Pranzo</p>
                <p className="text-cream/70">10:30 - 15:00</p>
              </div>
              <div>
                <p className="text-cream font-medium">Cena</p>
                <p className="text-cream/70">18:00 - 23:00</p>
              </div>
              <p className="text-cream/60 text-xs mt-4">
                Aperto tutti i giorni<br />
                Verificare chiusure stagionali sui social
              </p>
            </div>
          </div>

          {/* Column 4 - Contacts */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Contatti</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+393792102615"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +39 379 210 2615
              </a>
              <a
                href="tel:03641956169"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0364 195 6169
              </a>
              <a
                href="https://wa.me/393792102615"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:gerjanr90@gmail.com"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/lavecchialanterna2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.it/Restaurant_Review-g1813852-d26768460-Reviews-La_Vecchia_Lanterna-Temu_Province_of_Brescia_Lombardy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors"
                aria-label="TripAdvisor"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 004.072 1.598 6 6 0 004.04-10.43l1.966-2.135h-4.358c-2.31-1.57-4.98-2.353-7.636-2.353zM6.003 17.212a3.992 3.992 0 01-4-3.997 4 4 0 014-3.998 3.994 3.994 0 014 3.998 4 4 0 01-4 3.997zm11.997 0a3.994 3.994 0 01-4-3.997 4 4 0 014-3.998 3.992 3.992 0 014 3.998 4 4 0 01-4 3.997zM6.003 11.218a1.998 1.998 0 100 3.996 1.998 1.998 0 000-3.996zm11.997 0a2 2 0 10.002 3.998 2 2 0 00-.002-3.998z"/>
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Via+Roma+55+Temù"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors"
                aria-label="Google Maps"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © {currentYear} La Vecchia Lanterna di Temù - Tutti i diritti riservati
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-cream/50 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-cream/50 hover:text-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
