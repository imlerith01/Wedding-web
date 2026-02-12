import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Domů', href: '#hero' },
    { label: 'O nás', href: '#about' },
    { label: 'Program', href: '#program' },
    { label: 'Místo', href: '#location' },
    { label: 'Dress code', href: '#dresscode' },
    { label: 'Dary', href: '#gifts' },
    { label: 'Přihlášení', href: '#rsvp' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-wedding-surface/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl md:text-2xl font-serif text-wedding-dark">
              Kuba & Katka 2026
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-wedding-dark hover:text-wedding-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-wedding-dark hover:text-wedding-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-wedding-surface/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-wedding-dark hover:text-wedding-primary py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

