import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {siteData.faq.map((item, index) => (
        <div key={index} className="card">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-lg font-semibold text-wedding-dark pr-4">
              {item.question}
            </h3>
            <ChevronDown
              className={`text-wedding-primary flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              size={24}
            />
          </button>
          {openIndex === index && (
            <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

