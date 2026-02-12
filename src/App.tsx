import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Section from './components/Section';
import SectionDivider from './components/SectionDivider';
import Timeline from './components/Timeline';
import WitnessContacts from './components/WitnessContacts';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import { siteData } from './data/siteData';
import { MapPin, Shirt, Gift } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      <Countdown />

      <SectionDivider />

      <Section id="about" title={siteData.about.title} variant="default">
        <div className="card max-w-2xl mx-auto text-center">
          <p className="text-lg text-wedding-dark leading-relaxed">
            {siteData.about.text}
          </p>
        </div>
      </Section>

      <SectionDivider />

      <Section id="program" title="Program dne" variant="alt" showFloralDivider>
        <Timeline />
      </Section>

      <SectionDivider />

      <Section id="location" title="Místo konání" variant="default" showFloralDivider>
        <div className="space-y-6">
          <div className="card max-w-2xl mx-auto text-center">
            <MapPin className="mx-auto text-wedding-primary mb-4" size={32} />
            <h3 className="text-2xl font-serif text-wedding-dark mb-2">
              {siteData.location.name}
            </h3>
            <p className="text-wedding-text-secondary mb-1">{siteData.location.address}</p>
            <p className="text-wedding-text-secondary mb-4">{siteData.location.city}</p>
            {siteData.location.website && (
              <a
                href={siteData.location.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-wedding-primary hover:text-wedding-primary-hover underline transition-colors duration-200"
              >
                Více informací o místě →
              </a>
            )}
          </div>

          {/* Fotografie místa */}
          {siteData.location.images && siteData.location.images.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteData.location.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-md aspect-[4/3] border border-wedding-border"
                  >
                    <img
                      src={image}
                      alt={`${siteData.location.name} - fotografie ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-md border border-wedding-border">
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

      <SectionDivider />

      <Section id="dresscode" title={siteData.dressCode.title} variant="alt">
        <div className="card max-w-2xl mx-auto text-center">
          <Shirt className="mx-auto text-wedding-primary mb-4" size={32} />
          <p className="text-lg text-wedding-dark leading-relaxed">
            {siteData.dressCode.text}
          </p>
        </div>
      </Section>

      <SectionDivider />

      <Section id="gifts" title={siteData.gifts.title} variant="default">
        <div className="card max-w-2xl mx-auto text-center">
          <Gift className="mx-auto text-wedding-primary mb-4" size={32} />
          <p className="text-lg text-wedding-dark leading-relaxed mb-4">
            {siteData.gifts.text}
          </p>
          {siteData.gifts.account && (
            <p className="text-base text-wedding-dark font-mono bg-wedding-accent/20 px-4 py-2 rounded-xl inline-block border border-wedding-border">
              {siteData.gifts.account}
            </p>
          )}
        </div>
      </Section>

      <WitnessContacts />

      <SectionDivider />

      <Section id="rsvp" title="Potvrzení účasti" variant="alt" showFloralDivider>
        <RSVPForm />
      </Section>

      <Footer />
    </div>
  );
}

export default App;

