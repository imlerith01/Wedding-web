import { Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-wedding-background"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Levý blok - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8 flex justify-center lg:justify-start">
              <Heart className="text-wedding-secondary" size={48} fill="currentColor" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-wedding-dark mb-4">
              {siteData.couple.groom}
              <span className="mx-4 text-wedding-accent">&</span>
              {siteData.couple.bride}
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-wedding-text-secondary mb-8 font-serif">
              {siteData.date.day}. {siteData.date.month} {siteData.date.year}
            </p>
            
            <p className="text-lg sm:text-xl text-wedding-text-secondary mb-4">
              {siteData.location.name}
            </p>
            
            <p className="text-base sm:text-lg text-wedding-muted mb-12">
              Začátek v {siteData.date.time}
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <a
                href="#rsvp"
                className="btn-primary inline-block text-lg px-8 py-4"
              >
                Potvrdit účast
              </a>
            </div>
          </div>

          {/* Pravý blok - Fotka */}
          <div className="order-1 lg:order-2">
            {siteData.hero.image ? (
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={siteData.hero.image}
                  alt={`${siteData.couple.groom} & ${siteData.couple.bride} - zásnuby`}
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
                />
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden shadow-2xl bg-wedding-card aspect-[4/5] lg:aspect-square flex items-center justify-center">
                <Heart className="text-wedding-secondary opacity-30" size={120} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

