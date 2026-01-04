import { Mail, Phone, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wedding-dark text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart size={20} fill="currentColor" />
            <span className="text-xl font-serif">
              {siteData.couple.bride} & {siteData.couple.groom}
            </span>
          </div>

          {siteData.contact.email && (
            <div className="flex items-center justify-center gap-2 text-wedding-accent">
              <Mail size={18} />
              <a
                href={`mailto:${siteData.contact.email}`}
                className="hover:text-white transition-colors duration-200"
              >
                {siteData.contact.email}
              </a>
            </div>
          )}

          {siteData.contact.phone && (
            <div className="flex items-center justify-center gap-2 text-wedding-accent">
              <Phone size={18} />
              <a
                href={`tel:${siteData.contact.phone}`}
                className="hover:text-white transition-colors duration-200"
              >
                {siteData.contact.phone}
              </a>
            </div>
          )}

          <div className="pt-6 border-t border-wedding-primary/30">
            <p className="text-sm text-wedding-accent">
              © {currentYear} {siteData.couple.bride} & {siteData.couple.groom}. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

