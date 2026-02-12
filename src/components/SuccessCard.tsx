import { Plus } from 'lucide-react';

interface SuccessCardProps {
  onAddAnother: () => void;
}

const SuccessCard = ({ onAddAnother }: SuccessCardProps) => {
  return (
    <div className="card max-w-[640px] mx-auto text-center animate-[fadeInUp_0.5s_ease-out]">
      {/* Fotka jako polaroid card */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <img
            src="/images/IMG-20250914-WA0000.jpg"
            alt="Děkujeme za odpověď"
            className="w-[280px] sm:w-[320px] md:w-[340px] rounded-2xl shadow-lg border-2 border-wedding-border object-cover"
            style={{
              aspectRatio: '4/5',
              objectFit: 'cover',
            }}
          />
          {/* Jemný "tape" efekt - velmi subtilní */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-wedding-accent/20 rounded-sm rotate-[-2deg]"></div>
        </div>
      </div>

      {/* Text */}
      <h3 className="text-2xl sm:text-3xl font-serif text-wedding-dark mb-4">
        Děkujeme!
      </h3>
      <p className="text-wedding-text-secondary mb-8 text-lg">
        Děkujeme za odpověď, moc se na vás těšíme 💗
      </p>

      {/* Tlačítko */}
      <button
        onClick={onAddAnother}
        className="btn-primary inline-flex items-center gap-2"
      >
        <Plus size={20} />
        Přihlásit dalšího hosta
      </button>
    </div>
  );
};

export default SuccessCard;
