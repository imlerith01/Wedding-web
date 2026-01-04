import { Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

const Timeline = () => {
  return (
    <div className="space-y-8">
      {siteData.program.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 card hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-start sm:items-center gap-4 sm:w-32 flex-shrink-0">
            <Clock className="text-wedding-secondary flex-shrink-0" size={24} />
            <span className="text-xl font-semibold text-wedding-dark">
              {item.time}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-wedding-dark mb-2">
              {item.title}
            </h3>
            <p className="text-wedding-text-secondary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

