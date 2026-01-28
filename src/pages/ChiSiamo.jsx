import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SplitType from 'split-type'

import salaCamino from '../assets/foto/sala-camino-acceso.webp'
import salaPietra from '../assets/foto/sala-ristorante-pietra-legno.webp'
import salaEventi from '../assets/foto/sala-eventi-gruppi.webp'
import cervoPolenta from '../assets/foto/cervo-polenta-rosmarino.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const heroTitleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTitleRef.current) {
        const split = new SplitType(heroTitleRef.current, { types: 'chars,words' })
        gsap.fromTo(split.chars,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.02, ease: 'power4.out', delay: 0.3 }
        )
      }

      gsap.utils.toArray('.reveal-section').forEach((section, i) => {
        gsap.fromTo(section,
          { opacity: 0, y: 60, rotate: i % 2 === 0 ? -2 : 2 },
          {
            opacity: 1, y: 0, rotate: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true }
          }
        )
      })

      gsap.utils.toArray('.value-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.9, y: 40 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true }
          }
        )
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  const values = [
    { title: 'Tradizione', desc: 'Ricette tramandate di generazione in generazione', num: '01' },
    { title: 'Qualità', desc: 'Ingredienti freschi, locali e sostenibili', num: '02' },
    { title: 'Ospitalità', desc: 'Vi accogliamo come parte della famiglia', num: '03' },
    { title: 'Territorio', desc: 'Il gusto autentico della Valle Camonica', num: '04' },
  ]

  return (
    <div ref={contentRef} className="grain">
      {/* HERO */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={salaCamino} alt="La Vecchia Lanterna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4"
          >
            — Chi Siamo
          </motion.p>
          <h1 ref={heroTitleRef} className="text-hero text-[var(--color-cream)] max-w-4xl">
            La Nostra<br />
            <span className="ml-[10vw] inline-block text-[var(--color-gold)]">Storia</span>
          </h1>
        </div>
      </section>

      {/* INTRO - Broken layout */}
      <section className="section-spacing px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 lg:col-start-1 reveal-section">
            <h2 className="text-display text-[var(--color-wood-dark)] mb-8">
              Un'osteria<br />
              <span className="ml-8">nel cuore</span><br />
              <span className="ml-16">delle Alpi</span>
            </h2>
            <p className="text-body-lg text-[var(--color-coffee)]/70 max-w-lg leading-relaxed">
              Siamo un'accogliente osteria situata nel cuore di Temù, immersa nella bellezza
              delle montagne dell'Alta Valle Camonica. La nostra passione per la gastronomia
              e l'ospitalità è il motore che alimenta la nostra attività.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:-mt-32 reveal-section">
            <div className="relative" style={{ transform: 'rotate(3deg)' }}>
              <img src={salaPietra} alt="Interno" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-gold)]" />
            </div>
          </div>
        </div>
      </section>

      {/* STORIA - Split with offset */}
      <section className="bg-[var(--color-ivory)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[50vh] lg:h-auto reveal-section">
            <img src={cervoPolenta} alt="Piatto tradizionale" className="w-full h-full object-cover" />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-24 reveal-section">
            <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-6">— Le Nostre Radici</p>
            <h2 className="text-title text-[var(--color-wood-dark)] mb-8">
              Tradizione<br />Familiare
            </h2>
            <p className="text-body-lg text-[var(--color-coffee)]/70 leading-relaxed mb-6">
              Fondata con l'amore per la tradizione e la cucina di qualità, La Vecchia Lanterna
              ha radici profonde nella comunità locale. Da generazioni, la nostra famiglia ha
              dedicato impegno e passione per offrire piatti deliziosi.
            </p>
            <p className="text-[var(--color-coffee)]/60 leading-relaxed">
              Il nostro impegno per l'eccellenza si riflette nella varietà dei nostri servizi:
              ristorante, pizzeria e bar, tutti uniti dalla stessa filosofia di autenticità.
            </p>
          </div>
        </div>
      </section>

      {/* VALORI - Scattered cards */}
      <section className="section-spacing px-6 md:px-12">
        <div className="max-w-xl mb-16">
          <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">— I Nostri Valori</p>
          <h2 className="text-display text-[var(--color-wood-dark)]">Cosa Ci Guida</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="value-card bg-[var(--color-cream)] p-8 border border-[var(--color-sand)]"
              style={{ marginTop: `${(i % 2) * 40}px` }}
            >
              <span className="text-[var(--color-gold)] text-xs font-mono">{value.num}</span>
              <h3 className="text-subtitle text-[var(--color-wood-dark)] mt-4 mb-3">{value.title}</h3>
              <p className="text-[var(--color-coffee)]/60 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMBIENTE - Full bleed image with text overlay */}
      <section className="relative h-[80vh] flex items-center overflow-hidden reveal-section">
        <div className="absolute inset-0">
          <img src={salaEventi} alt="La sala" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--color-wood-dark)]/60" />
        </div>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4">— Sostenibilità</p>
          <h2 className="text-title text-[var(--color-cream)] mb-6">
            Rispetto per<br />l'Ambiente
          </h2>
          <p className="text-[var(--color-cream)]/70 text-body-lg leading-relaxed">
            Siamo consapevoli dell'importanza di preservare la bellezza naturale che ci circonda.
            Utilizziamo ingredienti locali e sostenibili, collaborando con produttori della Valle.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <p className="text-[20vw] font-heading text-[var(--color-cream)]/5 uppercase leading-none translate-y-[40%] translate-x-[10%]">
            Valle
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-6 md:px-12 bg-[var(--color-wood-dark)]">
        <div className="max-w-4xl mx-auto text-center reveal-section">
          <p className="font-accent text-3xl md:text-4xl text-[var(--color-gold)] mb-8">
            "La Vecchia Lanterna è più di un luogo dove mangiare; è un'esperienza
            che vi invita a condividere momenti speciali."
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-creative"
            >
              Prenota un Tavolo
            </a>
            <Link to="/menu" className="btn-outline border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wood-dark)]">
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
