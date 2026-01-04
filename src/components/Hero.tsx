import { Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wedding-accent via-white to-wedding-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-wedding-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-wedding-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 px-4 py-20 mt-16">
        <div className="mb-8 flex justify-center">
          <Heart className="text-wedding-primary" size={48} fill="currentColor" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-wedding-dark mb-4">
          {siteData.couple.groom}
          <span className="mx-4 text-wedding-primary">&</span>
          {siteData.couple.bride}
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 font-serif">
          {siteData.date.day}. {siteData.date.month} {siteData.date.year}
        </p>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          {siteData.location.name}
        </p>
        
        <p className="text-base sm:text-lg text-gray-500 mb-12">
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

