import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SplitType from 'split-type'

import salaCamino from '../assets/foto/sala-camino-acceso.webp'
import esternoRistorante from '../assets/foto/esterno-ristorante-inverno.webp'
import salaPietra from '../assets/foto/sala-ristorante-pietra-legno.webp'
import pizzaDiavola from '../assets/foto/pizza-diavola-salame.webp'
import cervoPolenta from '../assets/foto/cervo-polenta-rosmarino.webp'
import dolciFattiCasa from '../assets/foto/dolci-fatti-casa.webp'
import pizzaMargherita from '../assets/foto/pizza-margherita-bufala.webp'
import gnocchiSpinaci from '../assets/foto/gnocchi-spinaci-speck.webp'
import barCalice from '../assets/foto/bar-calice-liquore.webp'
import salaEventi from '../assets/foto/sala-eventi-gruppi.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const heroTitleRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const specialtiesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (heroTitleRef.current) {
        const split = new SplitType(heroTitleRef.current, { types: 'chars' })
        gsap.fromTo(split.chars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: 'power4.out',
            delay: 0.5,
          }
        )
      }

      // Hero parallax
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Services section - staggered reveal
      const serviceItems = gsap.utils.toArray('.service-item')
      serviceItems.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 80, rotate: i % 2 === 0 ? -3 : 3 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      // About section - horizontal text reveal
      gsap.fromTo('.about-title',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )

      // Specialties - scale and rotate
      const specialtyItems = gsap.utils.toArray('.specialty-item')
      specialtyItems.forEach((item, i) => {
        gsap.fromTo(item,
          { scale: 0.8, opacity: 0, rotate: (i - 2) * 5 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              once: true,
            },
          }
        )
      })

      // Marquee speed on scroll
      gsap.to('.marquee-fast', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.marquee-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const reviews = [
    { text: "Pizza molto buona e leggera. Personale cortese.", author: "Marco R.", rating: 5 },
    { text: "Pizzoccheri ottimi, cervo con polenta tenero e saporito.", author: "Giuseppe M.", rating: 5 },
    { text: "Locale carino e tipico. La pizza è davvero buonissima.", author: "Francesca T.", rating: 5 },
  ]

  return (
    <div className="grain">
      {/* HERO - Full viewport, broken layout */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <img
            src={esternoRistorante}
            alt="La Vecchia Lanterna - Esterno"
            className="w-full h-[120%] object-cover img-vintage"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-wood-dark)]/40 via-transparent to-[var(--color-wood-dark)]" />
        </div>

        {/* Hero Content - Asymmetric positioning */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-[15vh] px-6 md:px-12">
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[20vh] right-[10vw] w-20 h-20 md:w-32 md:h-32"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full float-slow">
              <rect x="30" y="30" width="40" height="50" rx="5" fill="#D4AF37" opacity="0.8"/>
              <ellipse cx="50" cy="55" rx="8" ry="12" fill="#FFF8DC" opacity="0.6"/>
            </svg>
          </motion.div>

          {/* Subtitle - offset left */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[var(--color-gold)] font-accent text-2xl md:text-4xl mb-4 ml-[5vw]"
          >
            di Temù
          </motion.p>

          {/* Main title - massive, broken lines */}
          <h1
            ref={heroTitleRef}
            className="text-massive text-[var(--color-cream)] font-heading uppercase leading-[0.8]"
            style={{ marginLeft: '-0.05em' }}
          >
            La Vecchia<br />
            <span className="ml-[8vw] md:ml-[15vw] inline-block">Lanterna</span>
          </h1>

          {/* Tagline - offset right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-6 md:mt-8 text-right"
          >
            <p className="text-[var(--color-cream)] text-sm md:text-body-lg">
              Ristorante • Pizzeria • Bar
            </p>
            <p className="text-[var(--color-cream)] text-xs md:text-sm mt-1 md:mt-2">
              Alta Valle Camonica
            </p>
          </motion.div>

          {/* CTAs - broken alignment */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-creative justify-center"
            >
              Prenota Ora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link to="/menu" className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-[var(--color-cream)] text-[var(--color-cream)] font-semibold text-sm uppercase tracking-widest overflow-hidden transition-all duration-500 hover:border-[var(--color-gold)]">
              <span className="absolute inset-0 bg-[var(--color-gold)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-[var(--color-wood-dark)] transition-colors duration-500">Menu</span>
              <svg className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 group-hover:text-[var(--color-wood-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
        </motion.div>
      </section>

      {/* INTRO - Broken grid, overlapping elements */}
      <section className="relative section-spacing px-6 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Text block - offset */}
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-6">
              — Benvenuti
            </p>
            <h2 className="text-display text-[var(--color-wood-dark)] mb-6 md:mb-8">
              Un'osteria<br />
              <span className="ml-4 md:ml-12">nel cuore</span><br />
              delle montagne
            </h2>
            <p className="text-body-lg text-[var(--color-coffee)]/70 max-w-md leading-relaxed">
              Siamo un'accogliente osteria immersa nella bellezza dell'Alta Valle Camonica.
              La nostra passione per la gastronomia e l'ospitalità alimenta ogni piatto
              che prepariamo.
            </p>
            <Link
              to="/chi-siamo"
              className="inline-flex items-center gap-3 mt-8 text-[var(--color-wine)] font-medium hover:gap-5 transition-all"
            >
              Scopri la nostra storia
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image - overlapping, offset */}
          <div className="lg:col-span-6 lg:col-start-7 lg:-mt-32 relative">
            <div className="relative overflow-hidden" style={{ transform: 'rotate(2deg)' }}>
              <img
                src={salaPietra}
                alt="Interno del ristorante"
                className="w-full aspect-[4/5] object-cover img-contrast"
              />
            </div>
            {/* Floating accent */}
            <div
              className="absolute -bottom-4 left-4 md:-bottom-8 md:-left-8 bg-[var(--color-wood-dark)] text-[var(--color-cream)] p-4 md:p-8"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <p className="font-accent text-xl md:text-2xl text-[var(--color-gold)]">Dal cuore</p>
              <p className="text-xs md:text-sm mt-1">della Valle</p>
            </div>
          </div>
        </div>

        {/* Background decorative text */}
        <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 pointer-events-none">
          <p className="text-[15vw] font-heading text-[var(--color-sand)]/20 uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
            Tradizione
          </p>
        </div>
      </section>

      {/* SERVICES - Interactive showcase */}
      <section ref={servicesRef} className="relative bg-[var(--color-wood-dark)] overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Header - Full width dramatic */}
          <div className="px-6 md:px-12 pt-24 md:pt-32 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-6">
                  — Tre Anime, Una Passione
                </p>
                <h2 className="text-display md:text-massive text-[var(--color-cream)] leading-[0.9]">
                  Ristorante<br />
                  <span className="ml-[5vw] md:ml-[10vw] text-[var(--color-gold)]">Pizzeria</span><br />
                  <span className="ml-[2vw] md:ml-[5vw]">& Bar</span>
                </h2>
              </div>
              <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:items-end">
                <p className="text-[var(--color-cream)] text-sm leading-relaxed">
                  Ogni servizio racconta la nostra passione per l'ospitalità e la tradizione della Valle Camonica.
                </p>
              </div>
            </div>
          </div>

          {/* Services - Horizontal scroll on mobile, grid on desktop */}
          <div className="pb-24 md:pb-32">
            <div className="flex md:grid md:grid-cols-3 gap-0 overflow-x-auto md:overflow-visible scrollbar-hide">
              {/* Ristorante */}
              <div className="service-item group relative flex-shrink-0 w-[85vw] md:w-auto cursor-pointer">
                <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                  <img
                    src={cervoPolenta}
                    alt="Ristorante"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Number - large decorative */}
                  <div className="absolute top-8 left-8 text-[var(--color-cream)]/10 text-[15vw] md:text-[8vw] font-heading leading-none pointer-events-none group-hover:text-[var(--color-gold)]/20 transition-colors duration-500">
                    01
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                      <h3 className="text-display text-[var(--color-cream)] mb-4">Ristorante</h3>
                      <p className="text-[var(--color-cream)]/70 max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Cucina tipica di montagna con ingredienti freschi del territorio. Cervo, pizzoccheri, polenta e i sapori autentici della Valle Camonica.
                      </p>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-[var(--color-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>

                  {/* Hover icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 border border-[var(--color-cream)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                    <svg className="w-5 h-5 text-[var(--color-cream)] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pizzeria */}
              <div className="service-item group relative flex-shrink-0 w-[85vw] md:w-auto cursor-pointer md:-mt-16">
                <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                  <img
                    src={pizzaDiavola}
                    alt="Pizzeria"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute top-8 left-8 text-[var(--color-cream)]/10 text-[15vw] md:text-[8vw] font-heading leading-none pointer-events-none group-hover:text-[var(--color-gold)]/20 transition-colors duration-500">
                    02
                  </div>

                  {/* Badge 48h */}
                  <div className="absolute top-8 right-8 bg-[var(--color-gold)] px-4 py-2 transform -rotate-3">
                    <span className="text-[var(--color-wood-dark)] font-heading text-sm">48h lievitazione</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                      <h3 className="text-display text-[var(--color-cream)] mb-4">Pizzeria</h3>
                      <p className="text-[var(--color-cream)]/70 max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Impasto lievitato naturalmente per 48 ore, condimenti selezionati e cottura perfetta. La vera pizza artigianale.
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-[var(--color-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>

                  <div className="absolute top-24 md:top-8 right-8 md:right-auto md:left-1/2 md:-translate-x-1/2 w-12 h-12 border border-[var(--color-cream)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                    <svg className="w-5 h-5 text-[var(--color-cream)] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bar */}
              <div className="service-item group relative flex-shrink-0 w-[85vw] md:w-auto cursor-pointer md:mt-8">
                <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                  <img
                    src={barCalice}
                    alt="Bar"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute top-8 left-8 text-[var(--color-cream)]/10 text-[15vw] md:text-[8vw] font-heading leading-none pointer-events-none group-hover:text-[var(--color-gold)]/20 transition-colors duration-500">
                    03
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                      <h3 className="text-display text-[var(--color-cream)] mb-4">Bar</h3>
                      <p className="text-[var(--color-cream)]/70 max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Caffetteria, aperitivi e drink raffinati. Il posto perfetto per iniziare o concludere la serata.
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-[var(--color-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>

                  <div className="absolute top-8 right-8 w-12 h-12 border border-[var(--color-cream)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                    <svg className="w-5 h-5 text-[var(--color-cream)] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile scroll indicator */}
            <div className="md:hidden flex justify-center gap-2 mt-6 px-6">
              <div className="w-8 h-1 bg-[var(--color-gold)]" />
              <div className="w-8 h-1 bg-[var(--color-cream)]/20" />
              <div className="w-8 h-1 bg-[var(--color-cream)]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="marquee-section py-12 bg-[var(--color-wood-dark)] overflow-hidden">
        <div className="marquee-fast flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center mx-8 text-[var(--color-cream)] text-6xl md:text-8xl font-heading uppercase">
              Pizzoccheri
              <span className="inline-block w-3 h-3 rounded-full bg-[var(--color-gold)] mx-8" />
              Cervo
              <span className="inline-block w-3 h-3 rounded-full bg-[var(--color-wine)] mx-8" />
              Pizza
              <span className="inline-block w-3 h-3 rounded-full bg-[var(--color-gold)] mx-8" />
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW - Split layout */}
      <section ref={aboutRef} className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-[60vh] lg:h-auto">
            <img
              src={salaEventi}
              alt="La nostra storia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-wood-dark)]/30" />
          </div>

          {/* Content side */}
          <div className="bg-[var(--color-wood-dark)] px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center">
            <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-6">
              — La Nostra Storia
            </p>
            <h2 className="about-title text-display text-[var(--color-cream)] mb-8">
              Tradizione<br />
              <span className="text-[var(--color-gold)]">&</span> Passione
            </h2>
            <p className="text-[var(--color-cream)] text-body-lg leading-relaxed max-w-lg mb-10">
              Da generazioni, la nostra famiglia dedica impegno e passione per offrire
              piatti deliziosi in un'atmosfera accogliente. Ogni ricetta racconta
              la storia del nostro territorio.
            </p>
            <Link to="/chi-siamo" className="btn-outline border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wood-dark)] self-start">
              Scopri di più
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALTIES - Scattered layout */}
      <section ref={specialtiesRef} className="section-spacing px-6 md:px-12 overflow-hidden">
        <div className="text-center mb-16">
          <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">
            — Dal Menu
          </p>
          <h2 className="text-display text-[var(--color-wood-dark)]">
            Le Nostre Specialità
          </h2>
        </div>

        {/* Scattered grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: cervoPolenta, name: 'Cervo con Polenta', offset: 'md:mt-12' },
              { img: pizzaMargherita, name: 'Pizza Margherita', offset: 'md:-mt-8' },
              { img: gnocchiSpinaci, name: 'Gnocchi agli Spinaci', offset: 'md:mt-20' },
              { img: dolciFattiCasa, name: 'Dolci della Casa', offset: '' },
            ].map((item, i) => (
              <div key={i} className={`specialty-item ${item.offset}`}>
                <div className="relative overflow-hidden group">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[var(--color-cream)] font-heading text-lg">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/menu" className="btn-creative">
            Scopri il Menu Completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* REVIEWS - Creative testimonials section */}
      <section className="relative section-spacing bg-[var(--color-wood-dark)] overflow-hidden">
        {/* Large decorative quote */}
        <div className="absolute top-12 left-[5vw] text-[30vw] leading-none font-accent text-[var(--color-cream)]/[0.03] pointer-events-none select-none">
          "
        </div>

        <div className="relative z-10 px-6 md:px-12">
          {/* Header - asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
            <div className="lg:col-span-5">
              <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">
                — Le Voci dei Nostri Ospiti
              </p>
              <h2 className="text-display text-[var(--color-cream)]">
                Esperienze<br />
                <span className="ml-8 text-[var(--color-gold)]">Autentiche</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 lg:flex lg:items-end">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[var(--color-gold)] font-accent text-5xl">4.8</p>
                  <p className="text-[var(--color-cream)] text-xs uppercase tracking-wider">su TripAdvisor</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews grid - broken masonry style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Main featured review */}
            <div className="md:col-span-7 relative group">
              <div className="bg-[var(--color-cream)] p-8 md:p-12 relative overflow-hidden" style={{ transform: 'rotate(-1deg)' }}>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-gold)]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                <div className="relative">
                  <svg className="w-12 h-12 text-[var(--color-gold)]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>

                  <p className="text-[var(--color-coffee)] text-xl md:text-2xl leading-relaxed mb-8 font-light">
                    {reviews[0].text}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--color-wood-dark)] flex items-center justify-center text-[var(--color-cream)] font-heading text-lg">
                      {reviews[0].author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[var(--color-wood-dark)] font-medium">{reviews[0].author}</p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(reviews[0].rating)].map((_, j) => (
                          <svg key={j} className="w-3 h-3 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side reviews - stacked */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {reviews.slice(1).map((review, i) => (
                <div
                  key={i}
                  className="bg-[var(--color-ivory)] p-6 md:p-8 border-l-4 border-[var(--color-gold)] hover:bg-[var(--color-cream)] transition-colors duration-500"
                  style={{ transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)` }}
                >
                  <p className="text-[var(--color-coffee)]/80 italic mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-wood-dark)] font-medium text-sm">{review.author}</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <svg key={j} className="w-3 h-3 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* TripAdvisor CTA */}
              <a
                href="https://www.tripadvisor.it/Restaurant_Review-g1813852-d26768460-Reviews-La_Vecchia_Lanterna-Temu_Province_of_Brescia_Lombardy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border border-[var(--color-cream)]/20 hover:border-[var(--color-gold)] transition-colors duration-500"
              >
                <div className="w-12 h-12 bg-[#00AF87] flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 004.072 1.598 6 6 0 004.04-10.43l1.966-2.135h-4.358c-2.31-1.57-4.98-2.353-7.636-2.353zM6.003 17.212a3.992 3.992 0 01-4-3.997 4 4 0 014-3.998 3.994 3.994 0 014 3.998 4 4 0 01-4 3.997zm11.997 0a3.994 3.994 0 01-4-3.997 4 4 0 014-3.998 3.992 3.992 0 014 3.998 4 4 0 01-4 3.997z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[var(--color-cream)] font-medium group-hover:text-[var(--color-gold)] transition-colors">Leggi tutte le recensioni</p>
                  <p className="text-[var(--color-cream)]/50 text-xs">su TripAdvisor</p>
                </div>
                <svg className="w-5 h-5 text-[var(--color-cream)]/50 group-hover:text-[var(--color-gold)] group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
      </section>

      {/* CTA - Full bleed with broken elements */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={salaPietra}
            alt="Prenota"
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>

        {/* Overlay scuro leggero per leggibilità */}
        <div className="absolute inset-0 bg-[var(--color-wood-dark)]/50" />

        <div className="relative z-10 px-6 md:px-12 w-full">
          <div className="max-w-3xl mx-auto md:ml-auto md:mr-[10vw] text-center md:text-right">
            <h2 className="text-hero text-[var(--color-cream)] mb-6 drop-shadow-lg">
              Prenota il<br />
              <span className="text-[var(--color-gold)]">tuo tavolo</span>
            </h2>
            <p className="text-[var(--color-cream)] text-body-lg mb-10 max-w-md mx-auto md:ml-auto md:mr-0 drop-shadow-md">
              Ti aspettiamo a braccia aperte per creare ricordi indimenticabili.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <a
                href="https://www.bookta.it/pizzerialavecchialanternaditemu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-creative justify-center"
              >
                Prenota Online
              </a>
              <a href="tel:+393792102615" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-semibold text-sm uppercase tracking-wider border-2 border-white cursor-pointer transition-all duration-500 hover:bg-white/20">
                Chiama Ora
              </a>
            </div>
          </div>
        </div>

        {/* Decorative large text */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <p className="text-[25vw] font-heading text-[var(--color-cream)]/5 uppercase leading-none translate-y-[30%]">
            Temù
          </p>
        </div>
      </section>

      {/* MAP - Broken layout */}
      <section className="section-spacing px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Info - centrato su mobile */}
          <div className="lg:col-span-4 lg:col-start-1 text-center lg:text-left">
            <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">
              — Dove Siamo
            </p>
            <h2 className="text-title text-[var(--color-wood-dark)] mb-6">
              Vieni a<br className="hidden lg:block" /> trovarci
            </h2>
            <div className="space-y-3 text-[var(--color-coffee)]/70">
              <p>
                <strong className="text-[var(--color-wood-dark)]">Via Roma, 55</strong><br />
                25050 Temù (BS)
              </p>
              <p className="text-sm">
                A pochi minuti da Ponte di Legno<br />
                e dal Passo del Tonale
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Via+Roma+55+Temù"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-[var(--color-wine)] text-[var(--color-cream)] font-medium text-sm uppercase tracking-wider hover:bg-[var(--color-wood-dark)] transition-colors lg:px-0 lg:py-0 lg:bg-transparent lg:text-[var(--color-wine)] lg:hover:bg-transparent lg:hover:gap-4"
            >
              Indicazioni
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Mappa */}
          <div className="lg:col-span-8 lg:col-start-5 lg:-mt-16 order-first lg:order-last">
            <div className="relative overflow-hidden h-[280px] md:h-[500px] rounded-lg lg:rounded-none lg:-rotate-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.8963071731706!2d10.469044!3d46.248731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDE0JzU1LjQiTiAxMMKwMjgnOC42IkU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                title="Mappa"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
