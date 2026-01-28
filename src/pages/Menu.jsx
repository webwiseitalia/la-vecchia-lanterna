import { Link } from 'react-router-dom'

// Import images
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

export default function Menu() {
  const menuCategories = [
    {
      name: 'Antipasti',
      description: 'Per iniziare con gusto',
      items: [
        { name: 'Carpaccio di Manzo', description: 'Con rucola, grana e limone', image: carpaccio },
        { name: 'Tagliere della Casa', description: 'Salumi e formaggi locali con polpettine', image: tagliere },
        { name: 'Bresaola della Valtellina', description: 'Con rucola e scaglie di grana', image: null },
        { name: 'Funghi Trifolati', description: 'Funghi porcini con aglio e prezzemolo', image: null },
      ],
    },
    {
      name: 'Primi Piatti',
      description: 'Pasta fresca e tradizione',
      items: [
        { name: 'Pizzoccheri della Valtellina', description: 'Pasta di grano saraceno con verze, patate e formaggio', image: null },
        { name: 'Casoncelli alla Bergamasca', description: 'Pasta ripiena con burro, salvia e pancetta', image: null },
        { name: 'Gnocchi agli Spinaci', description: 'Fatti in casa con speck croccante', image: gnocchiSpinaci },
        { name: 'Penne al Radicchio', description: 'Con radicchio trevigiano e gorgonzola', image: penneRadicchio },
        { name: 'Spaghetti alle Cozze', description: 'Cozze fresche con pomodorini e prezzemolo', image: spaghettiCozze },
        { name: 'Tagliatelle ai Funghi', description: 'Pasta fresca con porcini e tartufo', image: null },
        { name: 'Risotto ai Frutti di Bosco', description: 'Con mirtilli, lamponi e casera', image: null },
      ],
    },
    {
      name: 'Secondi di Carne',
      description: 'Selvaggina e carni pregiate',
      items: [
        { name: 'Cervo con Polenta', description: 'Tenero cervo con frutti di bosco e polenta fumante', image: cervoPolenta },
        { name: 'Cervo ai Frutti di Bosco', description: 'Filetto di cervo con salsa ai mirtilli', image: cervoFrutti },
        { name: 'Costine alla Griglia', description: 'Costine di maiale con salsa barbecue', image: null },
        { name: 'Tagliata di Manzo', description: 'Con rucola, grana e aceto balsamico', image: null },
        { name: 'Capriolo in Salmì', description: 'Tradizionale ricetta di montagna', image: null },
      ],
    },
    {
      name: 'Le Nostre Pizze',
      description: 'Impasto lievitato naturalmente 48h',
      items: [
        { name: 'Margherita', description: 'Pomodoro, mozzarella di bufala, basilico fresco', image: pizzaMargherita },
        { name: 'Diavola', description: 'Pomodoro, mozzarella, salame piccante', image: pizzaDiavola },
        { name: 'Rucola e Pomodorini', description: 'Base bianca, rucola, pomodorini e stracchino', image: pizzaRucola },
        { name: 'Pere e Gorgonzola', description: 'Gorgonzola, pere, noci e miele', image: pizzaPere },
        { name: 'Trevisana', description: 'Radicchio, speck e scamorza affumicata', image: null },
        { name: 'Montanara', description: 'Funghi porcini, salsiccia e fontina', image: null },
        { name: '4 Formaggi', description: 'Mozzarella, gorgonzola, fontina, grana', image: null },
        { name: 'Capricciosa', description: 'Prosciutto cotto, funghi, carciofi, olive', image: null },
      ],
    },
    {
      name: 'Dolci della Casa',
      description: 'Preparati ogni giorno con amore',
      items: [
        { name: 'Strudel di Mele', description: 'Ricetta tradizionale con gelato alla vaniglia', image: null },
        { name: 'Tiramisù', description: 'Il classico fatto in casa', image: null },
        { name: 'Torta di Mele', description: 'Soffice e profumata', image: dolciFattiCasa },
        { name: 'Crostata ai Frutti di Bosco', description: 'Con frutti freschi di stagione', image: crostatFrutti },
        { name: 'Panna Cotta', description: 'Con coulis ai frutti di bosco', image: null },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src={pizzaMargherita}
            alt="Le nostre pizze"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-wider mb-4">— IL NOSTRO MENU</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Sapori Autentici
          </h1>
          <div className="decorative-line mb-6" />
          <p className="text-cream/80 text-lg md:text-xl">
            Cucina tipica di montagna e pizze artigianali
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-coffee/80 text-lg leading-relaxed">
            Il nostro menu celebra la tradizione culinaria della Valle Camonica con ingredienti
            freschi e di stagione. Dalle ricette tramandate di generazione in generazione
            alle pizze artigianali con impasto lievitato 48 ore, ogni piatto è preparato
            con passione e cura.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-ivory' : 'bg-cream'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-wood-dark mb-2">
                {category.name}
              </h2>
              <p className="text-coffee/60">{category.description}</p>
              <div className="decorative-line mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
                >
                  {item.image ? (
                    <div className="aspect-square">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-sand/30 flex items-center justify-center">
                      <svg className="w-16 h-16 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-wood-dark mb-1">{item.name}</h3>
                    <p className="text-coffee/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Info Section */}
      <section className="py-12 bg-wood-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-cream/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-forest" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Opzioni vegetariane disponibili</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Servizio asporto</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-wine" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Pet-friendly</span>
            </div>
          </div>
          <p className="text-cream/60 text-xs mt-6">
            Informaci di eventuali allergie o intolleranze. I nostri piatti possono contenere allergeni.
          </p>
        </div>
      </section>

      {/* Social Follow */}
      <section className="section-padding bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-wood-dark mb-4">
            Seguici sui Social
          </h2>
          <p className="text-coffee/70 mb-6">
            Per scoprire i piatti del giorno e le novità stagionali
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/lavecchialanterna2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @lavecchialanterna2023
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src={cervoPolenta}
            alt="Prenota al ristorante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
            Hai trovato il tuo piatto preferito?
          </h2>
          <p className="text-cream/80 text-lg mb-8">
            Prenota subito il tuo tavolo e vieni a gustare i nostri piatti!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine hover:bg-wine-dark text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Prenota Online
            </a>
            <a
              href="tel:+393792102615"
              className="bg-cream/10 backdrop-blur-sm border-2 border-cream/50 hover:bg-cream hover:text-wood-dark text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              379 210 2615
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
