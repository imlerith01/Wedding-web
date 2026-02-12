import { Phone } from 'lucide-react';

interface Witness {
  name: string;
  phone: string;
  image: string;
}

const WitnessContacts = () => {
  const witnesses: Witness[] = [
    {
      name: 'Anežka Sobolová',
      phone: '+420 736 448 664',
      image: '/images/marek-dobes.jpg',
    },
    {
      name: 'Marek Dobeš',
      phone: '+420 736 208 374',
      image: '/images/anezka-sobolova.jpg',
    },
  ];

  return (
    <section className="section--alt">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif text-wedding-dark text-center mb-4">
          Máš dotaz, ale nechceš nás otravovat? Zeptej se svědků
        </h2>
        
        <p className="text-center text-wedding-text-secondary text-sm sm:text-base mb-8">
          Rádi pomohou s organizací, překvapením i praktickými dotazy.
        </p>

        {/* Jemná dekorativní linka */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-px bg-wedding-primary/30"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-primary/50 mx-3"></div>
          <div className="w-16 h-px bg-wedding-primary/30"></div>
        </div>

        {/* Karty svědků */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {witnesses.map((witness, index) => (
            <div
              key={index}
              className="bg-wedding-surface rounded-xl p-6 sm:p-8 border border-wedding-border shadow-sm hover:shadow-md hover:border-wedding-primary/40 transition-all duration-200"
            >
              <div className="text-center">
                {/* Fotografie */}
                <div className="mb-6 flex justify-center">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md ring-2 ring-wedding-primary/20">
                    <img
                      src={witness.image}
                      alt={witness.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback pokud fotka neexistuje
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-wedding-secondary/30 flex items-center justify-center">
                              <span class="text-wedding-dark text-2xl font-serif">${witness.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Jméno */}
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-wedding-dark mb-4">
                  {witness.name}
                </h3>

                {/* Telefon */}
                <a
                  href={`tel:${witness.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-wedding-primary hover:text-wedding-primary-hover transition-colors duration-200 text-base sm:text-lg"
                >
                  <Phone size={18} />
                  <span>{witness.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default WitnessContacts;

