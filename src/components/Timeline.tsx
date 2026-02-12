import { siteData } from '../data/siteData';

const CEREMONY_TITLE = 'Svatební obřad';

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertikální linka – od prvního do posledního bodu */}
      <div
        className="absolute left-[6px] top-3 bottom-3 w-px bg-wedding-primary/30"
        aria-hidden
      />
      <ul className="space-y-10 sm:space-y-12">
        {siteData.program.map((item, index) => {
          const isCeremony = item.title === CEREMONY_TITLE;
          return (
            <li key={index} className="relative flex gap-4 sm:gap-6">
              {/* Bod + čas */}
              <div className="flex items-start gap-3 flex-shrink-0 w-20 sm:w-24">
                <span
                  className={`
                    flex-shrink-0 rounded-full bg-wedding-primary mt-1
                    ${isCeremony ? 'w-3.5 h-3.5 mt-1' : 'w-3 h-3 mt-1.5'}
                  `}
                  aria-hidden
                />
                <span className="text-base sm:text-lg font-semibold text-wedding-dark pt-0.5">
                  {item.time}
                </span>
              </div>
              {/* Název + popis */}
              <div
                className={`
                  flex-1 min-w-0 pt-0.5
                  ${isCeremony ? 'rounded-lg bg-wedding-primary-light/40 px-4 py-3 sm:px-5 sm:py-4' : ''}
                `}
              >
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
