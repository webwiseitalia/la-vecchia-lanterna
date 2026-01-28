import { Link } from 'react-router-dom'

// Import images
import salaRistoranteCamino from '../assets/foto/sala-camino-acceso.webp'
import salaPietra from '../assets/foto/sala-ristorante-pietra-legno.webp'
import pizzaDiavola from '../assets/foto/pizza-diavola-salame.webp'
import cervoPolenta from '../assets/foto/cervo-polenta-rosmarino.webp'
import dolciFattiCasa from '../assets/foto/dolci-fatti-casa.webp'
import pizzaMargherita from '../assets/foto/pizza-margherita-bufala.webp'
import gnocchiSpinaci from '../assets/foto/gnocchi-spinaci-speck.webp'
import crostatFrutti from '../assets/foto/crostata-frutti-bosco.webp'
import barCalice from '../assets/foto/bar-calice-liquore.webp'

export default function Home() {
  const services = [
    {
      title: 'Ristorante',
      description: 'Cucina tipica di montagna con ingredienti freschi e ricette della tradizione valligiana',
      image: cervoPolenta,
      link: '/menu',
    },
    {
      title: 'Pizzeria',
      description: 'Pizze artigianali con impasto lievitato naturalmente e condimenti freschi selezionati',
      image: pizzaDiavola,
      link: '/menu',
    },
    {
      title: 'Bar',
      description: 'Drink raffinati e caffetteria in un\'atmosfera conviviale e rilassante',
      image: barCalice,
      link: '/contatti',
    },
  ]

  const specialties = [
    { name: 'Cervo con Polenta', description: 'Selvaggina locale con polenta fumante', image: cervoPolenta },
    { name: 'Pizza Margherita', description: 'Impasto leggero con bufala e basilico', image: pizzaMargherita },
    { name: 'Gnocchi agli Spinaci', description: 'Fatti in casa con speck croccante', image: gnocchiSpinaci },
    { name: 'Dolci della Casa', description: 'Torte e crostate preparate ogni giorno', image: dolciFattiCasa },
  ]

  const reviews = [
    {
      text: "Pizza molto buona e leggera. Personale cortese e servizio veloce. Consigliato!",
      author: "Marco R.",
      source: "Google",
      rating: 5,
    },
    {
      text: "I piatti sono abbondanti e con ingredienti freschi. Personale accogliente e professionale. Consiglio questo posto.",
      author: "Laura B.",
      source: "TripAdvisor",
      rating: 5,
    },
    {
      text: "Pizzoccheri ottimi, cervo con polenta tenero e saporito. Strudel fantastico!",
      author: "Giuseppe M.",
      source: "Google",
      rating: 5,
    },
    {
      text: "Locale carino e tipico. Frequento da sempre, la pizza è davvero buonissima.",
      author: "Francesca T.",
      source: "Facebook",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={salaRistoranteCamino}
            alt="La Vecchia Lanterna - Interno del ristorante con camino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/60 via-wood-dark/40 to-wood-dark/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Decorative Lantern */}
          <div className="mb-6 animate-float">
            <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto" viewBox="0 0 100 100">
              <rect x="30" y="30" width="40" height="50" rx="5" fill="#D4AF37"/>
              <rect x="35" y="35" width="30" height="40" rx="3" fill="#FFD700" opacity="0.9"/>
              <ellipse cx="50" cy="55" rx="8" ry="12" fill="#FFF8DC" opacity="0.8" className="animate-glow"/>
              <rect x="35" y="22" width="30" height="10" rx="2" fill="#D4AF37"/>
              <rect x="45" y="15" width="10" height="10" rx="2" fill="#D4AF37"/>
              <path d="M 42 15 Q 50 5 58 15" stroke="#D4AF37" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <rect x="32" y="78" width="36" height="6" rx="2" fill="#D4AF37"/>
            </svg>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 drop-shadow-lg">
            La Vecchia Lanterna
          </h1>
          <p className="font-accent text-2xl sm:text-3xl md:text-4xl text-gold mb-4">
            di Temù
          </p>
          <p className="text-cream/90 text-lg md:text-xl mb-2">
            Ristorante • Pizzeria • Bar
          </p>
          <p className="text-cream/70 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Sapori autentici della tradizione valligiana nel cuore delle montagne
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.bookta.it/pizzerialavecchialanternaditemu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine hover:bg-wine-dark text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
            >
              Prenota un Tavolo
            </a>
            <Link
              to="/menu"
              className="bg-cream/10 backdrop-blur-sm border-2 border-cream/50 hover:bg-cream hover:text-wood-dark text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Scopri il Menu
            </Link>
          </div>

          {/* Quick Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-cream/80">
            <a href="tel:+393792102615" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>379 210 2615</span>
            </a>
            <span className="hidden sm:block text-cream/40">|</span>
            <a href="https://maps.google.com/?q=Via+Roma+55+Temù" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Via Roma, 55 - Temù (BS)</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-wider mb-2">— BENVENUTI</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-dark mb-6">
                La Vecchia Lanterna di Temù
              </h2>
              <div className="decorative-line mb-6 mx-0" />
              <p className="text-coffee/80 text-lg leading-relaxed mb-6">
                Siamo un'accogliente osteria situata nel cuore di Temù, immersa nella bellezza
                delle montagne dell'Alta Valle Camonica. La nostra passione per la gastronomia
                e l'ospitalità è il motore che alimenta la nostra attività, offrendo esperienze
                culinarie autentiche e indimenticabili.
              </p>
              <p className="text-coffee/70 leading-relaxed mb-8">
                Da generazioni, la nostra famiglia dedica impegno e passione per offrire
                piatti deliziosi in un'atmosfera accogliente dove sentirsi a casa.
              </p>
              <Link
                to="/chi-siamo"
                className="inline-flex items-center gap-2 text-wine hover:text-wine-dark font-semibold transition-colors"
              >
                Scopri la nostra storia
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src={salaPietra}
                alt="Interno del ristorante La Vecchia Lanterna"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-wood-dark text-cream p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-accent text-2xl text-gold">Dal cuore della Valle</p>
                <p className="text-sm mt-1">Tradizione e passione</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider mb-2">— I NOSTRI SERVIZI</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-dark mb-4">
              Cosa Offriamo?
            </h2>
            <div className="decorative-line mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-cream mb-2">{service.title}</h3>
                  <p className="text-cream/80 text-sm">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-gold mt-4 font-medium text-sm group-hover:gap-3 transition-all">
                    Scopri di più
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src={salaRistoranteCamino}
            alt="Atmosfera del ristorante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-wider mb-2">— LA NOSTRA STORIA</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
            Tradizione e Passione dal Cuore della Valle
          </h2>
          <div className="decorative-line mb-8" />
          <p className="text-cream/80 text-lg leading-relaxed mb-8">
            Fondata con l'amore per la tradizione e la cucina di qualità, La Vecchia Lanterna
            ha radici profonde nella comunità locale. Il nostro impegno per l'eccellenza si
            riflette nella varietà dei nostri servizi e nella cura di ogni singolo piatto.
          </p>
          <Link
            to="/chi-siamo"
            className="inline-block bg-gold hover:bg-gold/90 text-wood-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Scopri di Più
          </Link>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider mb-2">— DAL NOSTRO MENU</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-dark mb-4">
              Le Nostre Specialità
            </h2>
            <div className="decorative-line mb-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg text-wood-dark mb-1">{item.name}</h3>
                  <p className="text-coffee/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block bg-wine hover:bg-wine-dark text-cream px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Scopri il Menu Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider mb-2">— TESTIMONIANZE</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-dark mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <div className="decorative-line mb-6" />
            <div className="flex justify-center items-center gap-2 text-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-2 text-coffee font-medium">4.8 su Facebook</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-coffee/80 italic mb-4">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-wood-dark">{review.author}</p>
                  <span className="text-sm text-coffee/60">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src={salaPietra}
            alt="Prenota al ristorante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-dark/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
            Prenota il Tuo Tavolo
          </h2>
          <p className="text-cream/80 text-lg mb-8">
            Ti aspettiamo a braccia aperte per deliziarti con i nostri piatti
            e creare ricordi indimenticabili insieme alla tua famiglia e ai tuoi amici.
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
              Chiama Ora
            </a>
          </div>
          <p className="text-cream/60 text-sm mt-6">
            Accettiamo prenotazioni telefoniche e online
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider mb-2">— DOVE SIAMO</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-wood-dark mb-4">
              Vieni a Trovarci
            </h2>
            <div className="decorative-line mb-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.8963071731706!2d10.469044!3d46.248731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783456789abcdef%3A0x1234567890abcdef!2sVia%20Roma%2C%2055%2C%2025050%20Tem%C3%B9%20BS!5e0!3m2!1sit!2sit!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa La Vecchia Lanterna di Temù"
                />
              </div>
            </div>
            <div className="bg-wood-dark text-cream rounded-2xl p-8">
              <h3 className="font-heading text-2xl text-gold mb-6">Informazioni</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-cream mb-2">Indirizzo</h4>
                  <p className="text-cream/70">
                    Via Roma, 55<br />
                    25050 Temù (BS)
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-cream mb-2">Come Raggiungerci</h4>
                  <p className="text-cream/70 text-sm">
                    Nel centro di Temù, sulla via principale. A pochi minuti da
                    Ponte di Legno e dal Passo del Tonale.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-cream mb-2">Orari</h4>
                  <div className="text-cream/70 text-sm space-y-1">
                    <p>Pranzo: 10:30 - 15:00</p>
                    <p>Cena: 18:00 - 23:00</p>
                    <p className="text-gold text-xs mt-2">Aperto tutti i giorni</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Via+Roma+55+Temù"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-wood-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Indicazioni Stradali
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
