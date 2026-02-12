import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

const Countdown = () => {
  // Vytvoření ISO stringu z dat v siteData
  // Formát: 2026-09-05T11:00:00+02:00 (5. září 2026, 11:00, časové pásmo +02:00 pro ČR)
  const WEDDING_DATETIME = `2026-09-05T11:00:00+02:00`;
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  const getTimeLeft = (): TimeLeft | null => {
    try {
      const weddingDate = new Date(WEDDING_DATETIME);
      
      // Kontrola validity data
      if (isNaN(weddingDate.getTime())) {
        return null;
      }

      const now = new Date();
      const totalMs = weddingDate.getTime() - now.getTime();

      if (totalMs <= 0) {
        setIsExpired(true);
        return null;
      }

      const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((totalMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalMs % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, totalMs };
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    // Inicializace
    const initialTime = getTimeLeft();
    setTimeLeft(initialTime);

    // Interval pro aktualizaci každou sekundu
    const interval = setInterval(() => {
      const time = getTimeLeft();
      if (time) {
        setTimeLeft(time);
      } else {
        setIsExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  if (isExpired) {
    return (
      <section className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-wedding-dark mb-4">
            Už se nemůžeme dočkat.
          </h2>
          <p className="text-2xl sm:text-3xl text-wedding-primary font-serif">
            Svatba začíná! 🎉
          </p>
        </div>
      </section>
    );
  }

  if (!timeLeft) {
    return (
      <section className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-wedding-dark mb-4">
            Už se nemůžeme dočkat.
          </h2>
          <p className="text-lg text-wedding-text-secondary">
            Datum svatby není nastavené.
          </p>
        </div>
      </section>
    );
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-wedding-surface rounded-xl p-6 sm:p-8 border border-wedding-border shadow-sm">
      <div className="text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-wedding-dark mb-2 font-bold">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs sm:text-sm text-wedding-text-secondary uppercase tracking-wider font-medium">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif text-wedding-dark text-center mb-8">
          Už se nemůžeme dočkat.
        </h2>
        
        {/* Jemná dekorativní linka */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-wedding-primary/30"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-primary/50 mx-3"></div>
          <div className="w-16 h-px bg-wedding-primary/30"></div>
        </div>

        {/* Timer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <TimeUnit value={timeLeft.days} label="Dní" />
          <TimeUnit value={timeLeft.hours} label="Hodin" />
          <TimeUnit value={timeLeft.minutes} label="Minut" />
          <TimeUnit value={timeLeft.seconds} label="Sekund" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;

