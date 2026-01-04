import { Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Titulní fotka jako pozadí */}
      {siteData.hero.image && (
        <div className="absolute inset-0">
          <img
            src={siteData.hero.image}
            alt={`${siteData.couple.groom} & ${siteData.couple.bride} - zásnuby`}
            className="w-full h-full object-cover"
          />
          {/* Overlay pro lepší čitelnost textu */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      {/* Dekorativní prvky (pokud není fotka) */}
      {!siteData.hero.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-wedding-accent via-white to-wedding-secondary">
          <div className="absolute top-20 left-10 w-32 h-32 bg-wedding-primary rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-wedding-secondary rounded-full blur-3xl opacity-10"></div>
        </div>
      )}

      <div className="text-center z-10 px-4 py-20 mt-16 relative">
        <div className="mb-8 flex justify-center">
          <Heart className="text-white drop-shadow-lg" size={48} fill="currentColor" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 drop-shadow-lg">
          {siteData.couple.groom}
          <span className="mx-4 text-wedding-accent">&</span>
          {siteData.couple.bride}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-serif drop-shadow-md">
          {siteData.date.day}. {siteData.date.month} {siteData.date.year}
        </p>
        
        <p className="text-lg sm:text-xl text-white mb-4 drop-shadow-md">
          {siteData.location.name}
        </p>
        
        <p className="text-base sm:text-lg text-white/90 mb-12 drop-shadow-md">
          Začátek v {siteData.date.time}
        </p>
        
        <a
          href="#rsvp"
          className="btn-primary inline-block text-lg px-8 py-4"
        >
          Potvrdit účast
        </a>
      </div>
    </section>
  );
};

export default Hero;

