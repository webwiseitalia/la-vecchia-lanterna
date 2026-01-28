import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SplitType from 'split-type'

import pizzaMargherita from '../assets/foto/pizza-margherita-bufala.webp'
import pizzaDiavola from '../assets/foto/pizza-diavola-salame.webp'
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

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const heroTitleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTitleRef.current) {
        const split = new SplitType(heroTitleRef.current, { types: 'chars' })
        gsap.fromTo(split.chars,
          { y: 100, opacity: 0, rotateY: -45 },
          { y: 0, opacity: 1, rotateY: 0, duration: 1, stagger: 0.03, ease: 'power4.out', delay: 0.3 }
        )
      }

      gsap.utils.toArray('.menu-section').forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 80 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 80%', once: true }
          }
        )
      })

      gsap.utils.toArray('.dish-card').forEach((card, i) => {
        const direction = i % 2 === 0 ? -30 : 30
        gsap.fromTo(card,
          { opacity: 0, x: direction, rotate: direction / 10 },
          {
            opacity: 1, x: 0, rotate: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true }
          }
        )
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  const categories = [
    {
      name: 'Antipasti',
      subtitle: 'Per iniziare con gusto',
      items: [
        { name: 'Carpaccio di Manzo', desc: 'Con rucola, grana e limone', img: carpaccio },
        { name: 'Tagliere della Casa', desc: 'Salumi e formaggi locali', img: tagliere },
      ]
    },
    {
      name: 'Primi',
      subtitle: 'Pasta fresca e tradizione',
      items: [
        { name: 'Gnocchi agli Spinaci', desc: 'Fatti in casa con speck', img: gnocchiSpinaci },
        { name: 'Penne al Radicchio', desc: 'Con radicchio e gorgonzola', img: penneRadicchio },
        { name: 'Spaghetti alle Cozze', desc: 'Cozze fresche e prezzemolo', img: spaghettiCozze },
        { name: 'Pizzoccheri', desc: 'Pasta di grano saraceno', img: null },
      ]
    },
    {
      name: 'Secondi',
      subtitle: 'Selvaggina e carni pregiate',
      items: [
        { name: 'Cervo con Polenta', desc: 'Con rosmarino e polenta fumante', img: cervoPolenta },
        { name: 'Cervo ai Frutti di Bosco', desc: 'Filetto con salsa ai mirtilli', img: cervoFrutti },
      ]
    },
    {
      name: 'Pizze',
      subtitle: 'Impasto lievitato 48h',
      items: [
        { name: 'Margherita', desc: 'Bufala e basilico fresco', img: pizzaMargherita },
        { name: 'Diavola', desc: 'Salame piccante', img: pizzaDiavola },
        { name: 'Rucola e Pomodorini', desc: 'Base bianca con stracchino', img: pizzaRucola },
        { name: 'Pere e Gorgonzola', desc: 'Con noci e miele', img: pizzaPere },
      ]
    },
    {
      name: 'Dolci',
      subtitle: 'Preparati ogni giorno',
      items: [
        { name: 'Torta di Mele', desc: 'Soffice e profumata', img: dolciFattiCasa },
        { name: 'Crostata ai Frutti', desc: 'Con frutti di bosco', img: crostatFrutti },
      ]
    },
  ]

  return (
    <div ref={contentRef} className="grain">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={pizzaMargherita} alt="Le nostre pizze" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/60 to-[var(--color-wood-dark)]/20" />
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-4"
          >
            — Il Nostro Menu
          </motion.p>
          <h1 ref={heroTitleRef} className="text-hero text-[var(--color-cream)]">
            Sapori<br />
            <span className="ml-[8vw] inline-block">Autentici</span>
          </h1>
        </div>
        <div className="absolute top-[20vh] right-[5vw] text-[var(--color-cream)]/10 text-[20vw] font-heading leading-none pointer-events-none">
          48h
        </div>
      </section>

      {/* INTRO */}
      <section className="section-spacing-sm px-6 md:px-12 border-b border-[var(--color-sand)]">
        <div className="max-w-3xl">
          <p className="text-body-lg text-[var(--color-coffee)]/70 leading-relaxed">
            Il nostro menu celebra la tradizione culinaria della Valle Camonica.
            Dalle ricette tramandate alle pizze con impasto lievitato 48 ore,
            ogni piatto è preparato con passione.
          </p>
        </div>
      </section>

      {/* MENU SECTIONS - Each with unique layout */}
      {categories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`menu-section section-spacing px-6 md:px-12 ${catIndex % 2 === 1 ? 'bg-[var(--color-ivory)]' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Header - alternating position */}
            <div className={`lg:col-span-4 ${catIndex % 2 === 1 ? 'lg:col-start-9 lg:order-2' : 'lg:col-start-1'}`}>
              <div className="sticky top-32">
                <span className="text-[var(--color-gold)] text-xs font-mono">0{catIndex + 1}</span>
                <h2 className="text-display text-[var(--color-wood-dark)] mt-2">{category.name}</h2>
                <p className="text-[var(--color-coffee)]/60 mt-2">{category.subtitle}</p>
                <div className="w-16 h-px bg-[var(--color-gold)] mt-6" />
              </div>
            </div>

            {/* Items - scattered layout */}
            <div className={`lg:col-span-7 ${catIndex % 2 === 1 ? 'lg:col-start-1 lg:order-1' : 'lg:col-start-6'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="dish-card group"
                    style={{ marginTop: i % 2 === 1 ? '2rem' : '0' }}
                  >
                    {item.img ? (
                      <div className="relative overflow-hidden mb-4" style={{ transform: `rotate(${(i - 1) * 1}deg)` }}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[4/3] bg-[var(--color-sand)]/30 mb-4 flex items-center justify-center">
                        <span className="text-[var(--color-sand)] text-6xl font-heading">?</span>
                      </div>
                    )}
                    <h3 className="text-subtitle text-[var(--color-wood-dark)]">{item.name}</h3>
                    <p className="text-[var(--color-coffee)]/60 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FOLLOW CTA */}
      <section className="py-16 bg-[var(--color-wood-dark)] overflow-hidden">
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[var(--color-gold)] text-xs uppercase tracking-[0.3em] mb-2">— Piatti del Giorno</p>
              <p className="text-[var(--color-cream)]/70">Seguici per scoprire le novità stagionali</p>
            </div>
            <a
              href="https://instagram.com/lavecchialanterna2023"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-creative"
            >
              @lavecchialanterna2023
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-6 md:px-12 bg-[var(--color-cream)]">
        <div className="max-w-2xl ml-auto text-right">
          <h2 className="text-title text-[var(--color-wood-dark)] mb-6">
            Hai trovato<br />il tuo piatto?
          </h2>
          <p className="text-[var(--color-coffee)]/70 mb-8">
            Prenota subito e vieni a gustarlo.
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-creative"
            >
              Prenota Online
            </a>
            <a href="tel:+393792102615" className="btn-outline">
              379 210 2615
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
