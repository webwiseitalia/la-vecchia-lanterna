import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SplitType from 'split-type'

import esternoRistorante from '../assets/foto/esterno-ristorante-inverno.webp'
import salaEventi from '../assets/foto/sala-eventi-gruppi.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const heroTitleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (heroTitleRef.current) {
        const split = new SplitType(heroTitleRef.current, { types: 'chars,words' })
        gsap.fromTo(split.chars,
          { y: 80, opacity: 0, rotateY: 45 },
          { y: 0, opacity: 1, rotateY: 0, duration: 1, stagger: 0.02, ease: 'power4.out', delay: 0.3 }
        )
      }

      // Contact cards staggered reveal
      gsap.utils.toArray('.contact-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50, rotate: i % 2 === 0 ? -3 : 3 },
          {
            opacity: 1, x: 0, rotate: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true }
          }
        )
      })

      // Service badges
      gsap.utils.toArray('.service-badge').forEach((badge, i) => {
        gsap.fromTo(badge,
          { opacity: 0, scale: 0.5, y: 30 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: badge, start: 'top 90%', once: true }
          }
        )
      })

      // Reveal sections
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true }
          }
        )
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Indirizzo',
      content: ['Via Roma, 55', '25050 Temù (BS)', 'Alta Valle Camonica'],
      link: { href: 'https://maps.google.com/?q=Via+Roma+55+Temù', label: 'Apri in Maps →' }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telefono',
      content: ['+39 379 210 2615', '0364 195 6169'],
      link: { href: 'tel:+393792102615', label: 'Chiama ora →' }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Orari',
      content: ['Pranzo: 10:30 - 15:00', 'Cena: 18:00 - 23:00', 'Aperto tutti i giorni'],
      note: 'Verificare chiusure su Instagram'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: ['gerjanr90@gmail.com'],
      link: { href: 'mailto:gerjanr90@gmail.com', label: 'Scrivi email →' }
    },
  ]

  const services = [
    { label: 'Accessibile', icon: '♿' },
    { label: 'Pet Friendly', icon: '🐕' },
    { label: 'Seggiolini', icon: '👶' },
    { label: 'Asporto', icon: '📦' },
  ]

  return (
    <div ref={contentRef} className="grain">
      {/* HERO - Asymmetric with overlapping elements */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={esternoRistorante} alt="La Vecchia Lanterna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/70 to-transparent" />
        </div>


        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4"
          >
            — Contatti
          </motion.p>
          <h1 ref={heroTitleRef} className="text-hero text-[var(--color-cream)] max-w-3xl">
            Vieni a<br />
            <span className="ml-[8vw] inline-block text-[var(--color-gold)]">Trovarci</span>
          </h1>
        </div>

        {/* Floating accent */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute bottom-[5vh] right-[5vw] hidden md:block"
        >
          <div className="w-32 h-32 border-2 border-[var(--color-gold)] flex items-center justify-center" style={{ transform: 'rotate(12deg)' }}>
            <span className="text-[var(--color-gold)] font-accent text-xl" style={{ transform: 'rotate(-12deg)' }}>
              Dal 2023
            </span>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="section-spacing-sm px-6 md:px-12 border-b border-[var(--color-sand)]">
        <div className="max-w-2xl">
          <p className="text-body-lg text-[var(--color-coffee)]/70 leading-relaxed">
            Siamo nel cuore di Temù, sulla via principale. A pochi minuti da Ponte di Legno
            e dal Passo del Tonale, nel cuore del Parco dell'Adamello.
          </p>
        </div>
      </section>

      {/* CONTACT GRID - Broken asymmetric layout */}
      <section className="section-spacing px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact cards - left side */}
          <div className="lg:col-span-5 space-y-6">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="contact-card bg-[var(--color-cream)] p-6 md:p-8 border border-[var(--color-sand)] hover:border-[var(--color-gold)] transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-subtitle text-[var(--color-wood-dark)] mb-2">{item.title}</h3>
                    {item.content.map((line, j) => (
                      <p key={j} className="text-[var(--color-coffee)]/70 text-sm">{line}</p>
                    ))}
                    {item.note && (
                      <p className="text-[var(--color-gold)] text-xs mt-2">{item.note}</p>
                    )}
                    {item.link && (
                      <a
                        href={item.link.href}
                        target={item.link.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-block text-[var(--color-gold)] text-sm font-medium mt-3 hover:underline"
                      >
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp special card */}
            <div className="contact-card bg-[#25D366] p-6 md:p-8 text-white">
              <div className="flex items-center gap-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="flex-1">
                  <p className="font-medium text-lg">Scrivici su WhatsApp</p>
                  <p className="text-white/80 text-sm">Per info e prenotazioni veloci</p>
                </div>
                <a
                  href="https://wa.me/393792102615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#25D366] px-5 py-2 font-medium hover:bg-white/90 transition-colors"
                >
                  Chatta
                </a>
              </div>
            </div>
          </div>

          {/* Map - right side, offset */}
          <div className="lg:col-span-6 lg:col-start-7 lg:-mt-16 reveal-section">
            <div className="relative">
              <div className="overflow-hidden h-[400px] md:h-[600px]" style={{ transform: 'rotate(-1deg)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.8963071731706!2d10.469044!3d46.248731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783456789abcdef%3A0x1234567890abcdef!2sVia%20Roma%2C%2055%2C%2025050%20Tem%C3%B9%20BS!5e0!3m2!1sit!2sit!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, transform: 'rotate(1deg) scale(1.05)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa La Vecchia Lanterna di Temù"
                />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[var(--color-gold)]" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)]" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION CONTEXT */}
      <section className="py-16 md:py-24 bg-[var(--color-ivory)] overflow-hidden reveal-section">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" style={{ transform: 'rotate(2deg)' }}>
              <img src={salaEventi} alt="La nostra sala" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--color-gold)]" />
            </div>
            <div>
              <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">— Dove Siamo</p>
              <h2 className="text-title text-[var(--color-wood-dark)] mb-6">
                Nel cuore<br />
                <span className="ml-4 md:ml-8">delle Alpi</span>
              </h2>
              <p className="text-[var(--color-coffee)]/70 leading-relaxed mb-6">
                La Vecchia Lanterna si trova nel centro di Temù, sulla via principale (Via Roma).
                Siamo a pochi minuti da <strong>Ponte di Legno</strong> e a breve distanza dal
                <strong> Passo del Tonale</strong> e dal <strong>Parco dell'Adamello</strong>.
              </p>
              <p className="text-[var(--color-coffee)]/60 text-sm">
                Posizione ideale per sciatori in inverno ed escursionisti in estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BADGES */}
      <section className="py-12 px-6 md:px-12 border-y border-[var(--color-sand)]">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-badge flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-[var(--color-cream)] border border-[var(--color-sand)] flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <span className="text-[var(--color-coffee)]/70 text-xs uppercase tracking-wider">{service.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="section-spacing-sm px-6 md:px-12 bg-[var(--color-cream)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-2">— Seguici</p>
            <p className="text-[var(--color-coffee)]/60">Per novità, eventi e piatti del giorno</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/lavecchialanterna2023"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.tripadvisor.it/Restaurant_Review-g1813852-d26768460-Reviews-La_Vecchia_Lanterna-Temu_Province_of_Brescia_Lombardy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#00AF87] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 004.072 1.598 6 6 0 004.04-10.43l1.966-2.135h-4.358c-2.31-1.57-4.98-2.353-7.636-2.353zM6.003 17.212a3.992 3.992 0 01-4-3.997 4 4 0 014-3.998 3.994 3.994 0 014 3.998 4 4 0 01-4 3.997zm11.997 0a3.994 3.994 0 01-4-3.997 4 4 0 014-3.998 3.992 3.992 0 014 3.998 4 4 0 01-4 3.997zM6.003 11.218a1.998 1.998 0 100 3.996 1.998 1.998 0 000-3.996zm11.997 0a2 2 0 10.002 3.998 2 2 0 00-.002-3.998z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING CTA - Bold asymmetric */}
      <section className="py-20 md:py-32 bg-[var(--color-wood-dark)] overflow-hidden">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">— Prenotazioni</p>
              <h2 className="text-display text-[var(--color-cream)] mb-6">
                Prenota il tuo<br />
                <span className="ml-6 md:ml-12 text-[var(--color-gold)]">tavolo</span>
              </h2>
              <p className="text-[var(--color-cream)]/60 mb-10 max-w-md">
                Prenota online o chiamaci direttamente. Ti aspettiamo per farti vivere
                un'esperienza autentica nel cuore delle Alpi.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.bookta.it/pizzerialavecchialanternaditemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-creative"
                >
                  Prenota Online
                </a>
                <a
                  href="tel:+393792102615"
                  className="btn-outline border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wood-dark)]"
                >
                  379 210 2615
                </a>
              </div>
            </div>

            {/* Decorative element */}
            <div className="lg:col-span-5 lg:col-start-8 hidden lg:flex justify-end">
              <div className="relative">
                <div className="w-64 h-64 border-2 border-[var(--color-cream)]/20 flex items-center justify-center" style={{ transform: 'rotate(-6deg)' }}>
                  <div className="text-center" style={{ transform: 'rotate(6deg)' }}>
                    <p className="text-[var(--color-cream)]/40 text-sm uppercase tracking-widest mb-2">Aperto</p>
                    <p className="text-[var(--color-gold)] font-accent text-4xl">7/7</p>
                    <p className="text-[var(--color-cream)]/40 text-sm uppercase tracking-widest mt-2">giorni</p>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--color-gold)]" style={{ transform: 'rotate(12deg)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
