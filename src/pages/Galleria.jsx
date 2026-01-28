import { useState } from 'react'

// Import all images
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

export default function Galleria() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('tutti')

  const images = [
    { src: salaCamino, alt: 'Sala con camino acceso', category: 'locale' },
    { src: pizzaMargherita, alt: 'Pizza Margherita con bufala', category: 'pizze' },
    { src: cervoPolenta, alt: 'Cervo con polenta e rosmarino', category: 'piatti' },
    { src: salaPietra, alt: 'Sala ristorante in pietra e legno', category: 'locale' },
    { src: pizzaDiavola, alt: 'Pizza Diavola', category: 'pizze' },
    { src: gnocchiSpinaci, alt: 'Gnocchi agli spinaci con speck', category: 'piatti' },
    { src: salaRistoranteCamino, alt: 'Interno ristorante con luce naturale', category: 'locale' },
    { src: pizzaRucola, alt: 'Pizza con rucola e pomodorini', category: 'pizze' },
    { src: cervoFrutti, alt: 'Cervo ai frutti di bosco', category: 'piatti' },
    { src: salaEventi, alt: 'Sala preparata per eventi', category: 'locale' },
    { src: pizzaPere, alt: 'Pizza pere e gorgonzola', category: 'pizze' },
    { src: carpaccio, alt: 'Carpaccio con rucola e grana', category: 'piatti' },
    { src: barCalice, alt: 'Calice di liquore al bar', category: 'locale' },
    { src: penneRadicchio, alt: 'Penne al radicchio', category: 'piatti' },
    { src: dolciFattiCasa, alt: 'Dolci fatti in casa', category: 'dolci' },
    { src: spaghettiCozze, alt: 'Spaghetti alle cozze', category: 'piatti' },
    { src: tagliere, alt: 'Tagliere con bresaola e polpettine', category: 'piatti' },
    { src: crostatFrutti, alt: 'Crostata ai frutti di bosco', category: 'dolci' },
  ]

  const filters = [
    { key: 'tutti', label: 'Tutti' },
    { key: 'locale', label: 'Il Locale' },
    { key: 'piatti', label: 'Piatti' },
    { key: 'pizze', label: 'Pizze' },
    { key: 'dolci', label: 'Dolci' },
  ]

  const filteredImages = filter === 'tutti'
    ? images
    : images.filter(img => img.category === filter)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={salaCamino}
            alt="La Vecchia Lanterna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-wider mb-4">— GALLERIA</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            I Nostri Momenti
          </h1>
          <div className="decorative-line mb-6" />
          <p className="text-cream/80 text-lg md:text-xl">
            Atmosfera, piatti e momenti speciali
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-cream sticky top-16 md:top-20 z-30 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-wood-dark text-cream'
                    : 'bg-sand/50 text-coffee hover:bg-sand'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-wood-dark/0 group-hover:bg-wood-dark/40 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section-padding bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-wood-dark mb-4">
            Seguici su Instagram
          </h2>
          <p className="text-coffee/70 mb-6">
            Per vedere le foto più recenti e i piatti del giorno
          </p>
          <a
            href="https://instagram.com/lavecchialanterna2023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @lavecchialanterna2023
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </div>
  )
}
