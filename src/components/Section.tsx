import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'alt';
  showFloralDivider?: boolean;
}

const Section = ({ id, title, children, className = '', variant = 'default', showFloralDivider = false }: SectionProps) => {
  const sectionClass = variant === 'alt' ? 'section--alt' : 'section';
  
  return (
    <section id={id} className={`${sectionClass} ${className}`}>
      <div className="section-container">
        {title && (
          <>
            <h2 className={`text-3xl sm:text-4xl font-serif text-wedding-dark text-center ${showFloralDivider ? 'mb-6' : 'mb-12'}`}>
              {title}
            </h2>
            {showFloralDivider && (
              <div className="flex justify-center my-6 mb-10">
                <img
                  src="/botanical/floral-divider.svg"
                  alt=""
                  className="max-w-[200px] w-full h-auto opacity-[0.12]"
                  aria-hidden
                />
              </div>
            )}
          </>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

