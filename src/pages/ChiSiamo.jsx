import { Link } from 'react-router-dom'

// Import images
import salaCamino from '../assets/foto/sala-camino-acceso.webp'
import salaPietra from '../assets/foto/sala-ristorante-pietra-legno.webp'
import salaEventi from '../assets/foto/sala-eventi-gruppi.webp'
import cervoPolenta from '../assets/foto/cervo-polenta-rosmarino.webp'

export default function ChiSiamo() {
  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tradizione',
      description: 'Ricette tramandate di generazione in generazione, sapori autentici della Valle Camonica',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Qualità',
      description: 'Ingredienti freschi, locali e sostenibili selezionati con cura ogni giorno',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Ospitalità',
      description: 'Vi accogliamo come parte della famiglia, in un ambiente caldo e conviviale',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Territorio',
      description: 'Il gusto autentico della Valle Camonica e delle Alpi in ogni piatto',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src={salaCamino}
            alt="La Vecchia Lanterna - Sala con camino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-wider mb-4">— CHI SIAMO</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            La Nostra Storia
          </h1>
          <div className="decorative-line mb-6" />
          <p className="text-cream/80 text-lg md:text-xl">
            Tradizione, passione e sapori autentici dal cuore di Temù
          </p>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-wider mb-2">— LA NOSTRA PASSIONE</p>
              <h2 className="font-heading text-3xl md:text-4xl text-wood-dark mb-6">
                Un'Osteria nel Cuore delle Montagne
              </h2>
              <div className="decorative-line mb-6 mx-0" />
              <p className="text-coffee/80 text-lg leading-relaxed mb-6">
                Siamo un'accogliente osteria situata nel cuore di Temù, immersa nella bellezza
                delle montagne dell'Alta Valle Camonica. La nostra passione per la gastronomia
                e l'ospitalità è il motore che alimenta la nostra attività.
              </p>
              <p className="text-coffee/70 leading-relaxed">
                Offriamo esperienze culinarie autentiche e indimenticabili, dove ogni piatto
                racconta la storia del nostro territorio e delle tradizioni che ci appartengono.
              </p>
            </div>
            <div className="relative">
              <img
                src={salaPietra}
                alt="Interno del ristorante"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={cervoPolenta}
                alt="Piatto di cervo con polenta"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium tracking-wider mb-2">— LE NOSTRE RADICI</p>
              <h2 className="font-heading text-3xl md:text-4xl text-wood-dark mb-6">
                Tradizione Familiare
              </h2>
              <div className="decorative-line mb-6 mx-0" />
              <p className="text-coffee/80 text-lg leading-relaxed mb-6">
                Fondata con l'amore per la tradizione e la cucina di qualità, La Vecchia Lanterna
                ha radici profonde nella comunità locale. Da generazioni, la nostra famiglia ha
                dedicato impegno e passione per offrire piatti deliziosi e un'atmosfera accogliente.
              </p>
              <p className="text-coffee/70 leading-relaxed">
                Il nostro impegno per l'eccellenza si riflette nella varietà dei nostri servizi:
                ristorante, pizzeria e bar, tutti uniti dalla stessa filosofia di qualità e autenticità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider mb-2">— I NOSTRI VALORI</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-dark mb-4">
              Cosa Ci Guida
            </h2>
            <div className="decorative-line mb-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md card-hover"
              >
                <div className="text-gold mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl text-wood-dark mb-3">{value.title}</h3>
                <p className="text-coffee/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-wider mb-2">— SOSTENIBILITÀ</p>
              <h2 className="font-heading text-3xl md:text-4xl text-wood-dark mb-6">
                Rispetto per l'Ambiente
              </h2>
              <div className="decorative-line mb-6 mx-0" />
              <p className="text-coffee/80 text-lg leading-relaxed mb-6">
                Siamo consapevoli dell'importanza di preservare la bellezza naturale che ci circonda.
                Per questo ci impegniamo a utilizzare ingredienti locali e sostenibili, riducendo
                al minimo l'impatto ambientale delle nostre operazioni.
              </p>
              <p className="text-coffee/70 leading-relaxed">
                Collaboriamo con produttori locali della Valle Camonica, valorizzando i prodotti
                del territorio e sostenendo l'economia locale.
              </p>
            </div>
            <div className="relative">
              <img
                src={salaEventi}
                alt="Sala eventi del ristorante"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote & CTA Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={salaCamino}
            alt="Atmosfera del ristorante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <svg className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="font-accent text-2xl md:text-3xl text-cream mb-8">
            La Vecchia Lanterna è più di un luogo dove mangiare e bere; è un'esperienza
            che vi invita a condividere momenti speciali con amici e familiari.
          </p>
          <div className="decorative-line mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine hover:bg-wine-dark text-cream px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Prenota il Tuo Tavolo
            </a>
            <Link
              to="/menu"
              className="bg-cream/10 backdrop-blur-sm border-2 border-cream/50 hover:bg-cream hover:text-wood-dark text-cream px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
