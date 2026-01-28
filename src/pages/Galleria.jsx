import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import SplitType from 'split-type'

// Import all images
import esternoRistorante from '../assets/foto/esterno-ristorante-inverno.webp'
import salaPietra from '../assets/foto/sala-ristorante-pietra-legno.webp'
import salaCamino from '../assets/foto/sala-camino-acceso.webp'
import salaRistoranteCamino from '../assets/foto/sala-ristorante-camino.webp'
import salaEventi from '../assets/foto/sala-eventi-gruppi.webp'
import pizzaDiavola from '../assets/foto/pizza-diavola-salame.webp'
import pizzaMargherita from '../assets/foto/pizza-margherita-bufala.webp'
import pizzaRucola from '../assets/foto/pizza-rucola-pomodorini.webp'
import pizzaPere from '../assets/foto/pizza-pere-gorgonzola.webp'
import cervoPolenta from '../assets/foto/cervo-polenta-rosmarino.webp'
import cervoFrutti from '../assets/foto/cervo-frutti-bosco.webp'
import gnocchiSpinaci from '../assets/foto/gnocchi-spinaci-speck.webp'
import penneRadicchio from '../assets/foto/penne-radicchio.webp'
import spaghettiCozze from '../assets/foto/spaghetti-cozze.webp'
import carpaccio from '../assets/foto/carpaccio-rucola-grana.webp'
import tagliere from '../assets/foto/tagliere-bresaola-polpettine.webp'
import dolciFattiCasa from '../assets/foto/dolci-fatti-casa.webp'
import crostatFrutti from '../assets/foto/crostata-frutti-bosco.webp'
import barCalice from '../assets/foto/bar-calice-liquore.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Galleria() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('tutti')
  const heroTitleRef = useRef(null)
  const contentRef = useRef(null)
  const galleryRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (heroTitleRef.current) {
        const split = new SplitType(heroTitleRef.current, { types: 'chars' })
        gsap.fromTo(split.chars,
          { y: 100, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.04, ease: 'power4.out', delay: 0.3 }
        )
      }

      // Gallery items staggered animation
      gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        const xOffset = (col - 1) * 30
        const rotation = (Math.random() - 0.5) * 6

        gsap.fromTo(item,
          { opacity: 0, y: 80, x: xOffset, rotate: rotation },
          {
            opacity: 1, y: 0, x: 0, rotate: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%', once: true }
          }
        )
      })

      // Parallax on decorative elements
      gsap.to('.parallax-text', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-text',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      })
    }, contentRef)

    return () => ctx.revert()
  }, [filter])

  const images = [
    { src: salaCamino, alt: 'Sala con camino acceso', category: 'locale', size: 'large' },
    { src: pizzaMargherita, alt: 'Pizza Margherita con bufala', category: 'pizze', size: 'normal' },
    { src: cervoPolenta, alt: 'Cervo con polenta e rosmarino', category: 'piatti', size: 'tall' },
    { src: salaPietra, alt: 'Sala ristorante in pietra e legno', category: 'locale', size: 'normal' },
    { src: pizzaDiavola, alt: 'Pizza Diavola', category: 'pizze', size: 'wide' },
    { src: gnocchiSpinaci, alt: 'Gnocchi agli spinaci con speck', category: 'piatti', size: 'normal' },
    { src: salaRistoranteCamino, alt: 'Interno ristorante con luce naturale', category: 'locale', size: 'tall' },
    { src: pizzaRucola, alt: 'Pizza con rucola e pomodorini', category: 'pizze', size: 'normal' },
    { src: cervoFrutti, alt: 'Cervo ai frutti di bosco', category: 'piatti', size: 'large' },
    { src: salaEventi, alt: 'Sala preparata per eventi', category: 'locale', size: 'normal' },
    { src: pizzaPere, alt: 'Pizza pere e gorgonzola', category: 'pizze', size: 'normal' },
    { src: carpaccio, alt: 'Carpaccio con rucola e grana', category: 'piatti', size: 'wide' },
    { src: barCalice, alt: 'Calice di liquore al bar', category: 'locale', size: 'normal' },
    { src: penneRadicchio, alt: 'Penne al radicchio', category: 'piatti', size: 'normal' },
    { src: dolciFattiCasa, alt: 'Dolci fatti in casa', category: 'dolci', size: 'tall' },
    { src: spaghettiCozze, alt: 'Spaghetti alle cozze', category: 'piatti', size: 'normal' },
    { src: tagliere, alt: 'Tagliere con bresaola e polpettine', category: 'piatti', size: 'large' },
    { src: crostatFrutti, alt: 'Crostata ai frutti di bosco', category: 'dolci', size: 'normal' },
  ]

  const filters = [
    { key: 'tutti', label: 'Tutto', num: '18' },
    { key: 'locale', label: 'Il Locale', num: '05' },
    { key: 'piatti', label: 'Piatti', num: '08' },
    { key: 'pizze', label: 'Pizze', num: '04' },
    { key: 'dolci', label: 'Dolci', num: '02' },
  ]

  const filteredImages = filter === 'tutti'
    ? images
    : images.filter(img => img.category === filter)

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large': return 'md:col-span-2 md:row-span-2'
      case 'tall': return 'md:row-span-2'
      case 'wide': return 'md:col-span-2'
      default: return ''
    }
  }

  return (
    <div ref={contentRef} className="grain">
      {/* HERO - Asymmetric */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={esternoRistorante} alt="La Vecchia Lanterna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/50 to-transparent" />
        </div>

        {/* Decorative scattered numbers */}
        <div className="absolute top-[15vh] left-[5vw] text-[var(--color-cream)]/5 text-[25vw] font-heading leading-none pointer-events-none parallax-text">
          18
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4"
          >
            — Galleria Fotografica
          </motion.p>
          <h1 ref={heroTitleRef} className="text-hero text-[var(--color-cream)]">
            I Nostri<br />
            <span className="ml-[12vw] inline-block">Momenti</span>
          </h1>
        </div>

        {/* Offset decorative element */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[-3vh] right-[10vw] w-24 h-24 md:w-32 md:h-32 border-2 border-[var(--color-gold)]"
        />
      </section>

      {/* INTRO */}
      <section className="section-spacing-sm px-6 md:px-12 border-b border-[var(--color-sand)]">
        <div className="max-w-3xl ml-auto text-right">
          <p className="text-body-lg text-[var(--color-coffee)]/70 leading-relaxed">
            Atmosfera, piatti e momenti speciali. Ogni foto racconta la nostra storia,
            l'amore per la cucina e il calore della montagna.
          </p>
        </div>
      </section>

      {/* FILTER - Creative tabs */}
      <section className="py-8 px-6 md:px-12 bg-[var(--color-cream)] sticky top-20 z-30 border-b border-[var(--color-sand)]">
        <div className="flex flex-wrap gap-3 md:gap-6">
          {filters.map((f, i) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`group relative px-4 md:px-6 py-3 transition-all duration-300 ${
                filter === f.key ? 'text-[var(--color-cream)]' : 'text-[var(--color-coffee)]'
              }`}
            >
              <span className={`absolute inset-0 transition-transform duration-500 origin-left ${
                filter === f.key ? 'bg-[var(--color-wood-dark)] scale-x-100' : 'bg-[var(--color-sand)] scale-x-0 group-hover:scale-x-100'
              }`} style={{ transform: filter === f.key ? 'scaleX(1)' : undefined }} />
              <span className="relative z-10 flex items-center gap-2">
                <span className={`text-xs font-mono ${filter === f.key ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold)]/50'}`}>
                  {f.num}
                </span>
                <span className="text-sm uppercase tracking-wider">{f.label}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY - Masonry-like broken grid */}
      <section ref={galleryRef} className="section-spacing px-6 md:px-12 bg-[var(--color-ivory)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[200px] md:auto-rows-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${filter}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`gallery-item relative overflow-hidden cursor-pointer group ${getSizeClasses(image.size)}`}
                style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index % 3) * 0.5}deg)` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--color-wood-dark)]/0 group-hover:bg-[var(--color-wood-dark)]/50 transition-all duration-500" />

                {/* Hover overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[var(--color-cream)] text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </p>
                  <span className="text-[var(--color-gold)] text-xs uppercase tracking-wider mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.category}
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[var(--color-gold)] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* INSTAGRAM CTA - Creative asymmetric */}
      <section className="py-20 md:py-32 bg-[var(--color-wood-dark)] overflow-hidden">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-2">
              <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">— Seguici</p>
              <h2 className="text-display text-[var(--color-cream)] mb-6">
                Altre foto<br />
                <span className="ml-4 md:ml-8">su Instagram</span>
              </h2>
              <p className="text-[var(--color-cream)]/60 mb-8 max-w-md">
                Per vedere le foto più recenti, i piatti del giorno e gli eventi speciali.
              </p>
              <a
                href="https://instagram.com/lavecchialanterna2023"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-creative inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @lavecchialanterna2023
              </a>
            </div>

            {/* Decorative grid of small images */}
            <div className="lg:col-span-5 lg:col-start-8 hidden lg:block">
              <div className="grid grid-cols-3 gap-3" style={{ transform: 'rotate(-3deg)' }}>
                {[pizzaMargherita, cervoPolenta, salaPietra, dolciFattiCasa, pizzaDiavola, barCalice].map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden"
                    style={{ transform: `translateY(${(i % 2) * 20}px)` }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX - Full screen with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[var(--color-charcoal)]/98 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 text-[var(--color-cream)]/70 hover:text-[var(--color-gold)] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-16 left-0"
              >
                <p className="text-[var(--color-cream)] text-lg font-heading">{selectedImage.alt}</p>
                <span className="text-[var(--color-gold)] text-xs uppercase tracking-wider">{selectedImage.category}</span>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
