import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import { siteData } from './data/siteData';
import { MapPin, Car, Home, Shirt, Gift } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      <Section id="about" title={siteData.about.title}>
        <div className="card max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {siteData.about.text}
          </p>
        </div>
      </Section>

      <Section id="program" title="Program dne">
        <Timeline />
      </Section>

      <Section id="location" title="Místo konání">
        <div className="space-y-6">
          <div className="card max-w-2xl mx-auto text-center">
            <MapPin className="mx-auto text-wedding-primary mb-4" size={32} />
            <h3 className="text-2xl font-serif text-wedding-dark mb-2">
              {siteData.location.name}
            </h3>
            <p className="text-gray-600 mb-1">{siteData.location.address}</p>
            <p className="text-gray-600">{siteData.location.city}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src={siteData.location.mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa místa konání"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      <Section id="transport" title="Doprava & ubytování">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Car className="text-wedding-primary" size={24} />
              <h3 className="text-xl font-semibold text-wedding-dark">
                {siteData.transportation.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              {siteData.transportation.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-wedding-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Home className="text-wedding-primary" size={24} />
              <h3 className="text-xl font-semibold text-wedding-dark">
                {siteData.accommodation.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              {siteData.accommodation.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-wedding-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="dresscode" title={siteData.dressCode.title}>
        <div className="card max-w-2xl mx-auto text-center">
          <Shirt className="mx-auto text-wedding-primary mb-4" size={32} />
          <p className="text-lg text-gray-700 leading-relaxed">
            {siteData.dressCode.text}
          </p>
        </div>
      </Section>

      <Section id="gifts" title={siteData.gifts.title}>
        <div className="card max-w-2xl mx-auto text-center">
          <Gift className="mx-auto text-wedding-primary mb-4" size={32} />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {siteData.gifts.text}
          </p>
          {siteData.gifts.account && (
            <p className="text-base text-gray-600 font-mono bg-wedding-accent px-4 py-2 rounded inline-block">
              {siteData.gifts.account}
            </p>
          )}
        </div>
      </Section>

      <Section id="faq" title="Často kladené otázky">
        <FAQ />
      </Section>

      <Section id="rsvp" title="Potvrzení účasti">
        <RSVPForm />
      </Section>

      <Footer />
    </div>
  );
}

export default App;

