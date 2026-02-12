import { Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden hero-background"
    >
      {/* Rohové dekorace - traviny (subtilní, pod obsahem) */}
      <div
        className="absolute top-0 left-0 z-0 pointer-events-none opacity-[0.18] hidden sm:block sm:scale-100 md:scale-100"
        aria-hidden
      >
        <img
          src="/botanical/Floral 21.svg"
          alt=""
          className="hero-floral-tint w-[120px] sm:w-[140px] md:w-[160px] h-auto"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 z-0 pointer-events-none opacity-[0.18] hidden sm:block sm:scale-[0.7] md:scale-100"
        aria-hidden
      >
        <img
          src="/botanical/Floral 25.svg"
          alt=""
          className="hero-floral-tint w-[80px] sm:w-[100px] md:w-[120px] h-auto"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Levý blok - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8 flex justify-center lg:justify-start">
              <Heart className="text-wedding-primary" size={48} fill="currentColor" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-wedding-dark mb-4">
              {siteData.couple.groom}
              <span className="mx-4 text-wedding-primary">&</span>
              {siteData.couple.bride}
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-wedding-muted mb-8 font-serif">
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
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-wedding-border">
                <img
                  src={siteData.hero.image}
                  alt={`${siteData.couple.groom} & ${siteData.couple.bride} - zásnuby`}
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
                />
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-lg bg-wedding-card border-2 border-wedding-border aspect-[4/5] lg:aspect-square flex items-center justify-center">
                <Heart className="text-wedding-primary opacity-30" size={120} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

