import { siteData } from '../data/siteData';

const CEREMONY_TITLE = 'Svatební obřad';

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertikální linka – střed sloupce s body (12px) */}
      <div
        className="absolute left-[12px] top-3 bottom-3 w-px bg-wedding-primary/30"
        aria-hidden
      />
      <ul className="space-y-10 sm:space-y-12">
        {siteData.program.map((item, index) => {
          const isCeremony = item.title === CEREMONY_TITLE;
          return (
            <li key={index} className="relative flex gap-4 sm:gap-5 items-start">
              {/* Sloupec: pouze bod (vycentrovaný na ose) */}
              <div className="w-6 flex-shrink-0 flex justify-center pt-0.5">
                <span
                  className={`
                    flex-shrink-0 rounded-full bg-wedding-primary
                    ${isCeremony
                      ? 'w-3.5 h-3.5 shadow-[0_0_0_3px_rgba(127,175,134,0.25)]'
                      : 'w-3 h-3'
                    }
                  `}
                  aria-hidden
                />
              </div>
              {/* Čas – fixní šířka, primary, semibold */}
              <div className="w-14 sm:w-16 flex-shrink-0 pt-0.5">
                <span className="text-base sm:text-lg font-semibold text-wedding-primary">
                  {item.time}
                </span>
              </div>
              {/* Název + popis – žádné pozadí, stejné pro všechny */}
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-lg sm:text-xl font-semibold text-wedding-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-wedding-muted text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
