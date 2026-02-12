import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'alt';
}

const Section = ({ id, title, children, className = '', variant = 'default' }: SectionProps) => {
  const sectionClass = variant === 'alt' ? 'section--alt' : 'section';
  
  return (
    <section id={id} className={`${sectionClass} ${className}`}>
      <div className="section-container">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-serif text-wedding-dark text-center mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

