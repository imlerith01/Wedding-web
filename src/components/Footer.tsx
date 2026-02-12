import { Mail, Phone, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wedding-primary text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart size={20} fill="currentColor" />
            <span className="text-xl font-serif">
              {siteData.couple.groom} & {siteData.couple.bride}
            </span>
          </div>

          {siteData.contact.email && (
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Mail size={18} />
              <a
                href={`mailto:${siteData.contact.email}`}
                className="hover:text-white transition-colors duration-200"
              >
                {siteData.contact.email}
              </a>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90">
            {siteData.contact.phoneGroom && (
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href={`tel:${siteData.contact.phoneGroom}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  Kuba: {siteData.contact.phoneGroom}
                </a>
              </div>
            )}
            {siteData.contact.phoneBride && (
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href={`tel:${siteData.contact.phoneBride}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  Katka: {siteData.contact.phoneBride}
                </a>
              </div>
            )}
          </div>

          {siteData.contact.phone && !siteData.contact.phoneGroom && !siteData.contact.phoneBride && (
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Phone size={18} />
              <a
                href={`tel:${siteData.contact.phone}`}
                className="hover:text-white transition-colors duration-200"
              >
                {siteData.contact.phone}
              </a>
            </div>
          )}

          <div className="pt-6 border-t border-white/30">
            <p className="text-sm text-white/80">
              © {currentYear} {siteData.couple.groom} & {siteData.couple.bride}. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

