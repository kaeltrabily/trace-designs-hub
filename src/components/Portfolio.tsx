import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Skeleton } from '@/components/ui/skeleton';

const Portfolio = () => {
  const { t } = useLanguage();
  const portfolioUrl = 'http://portfolio.trace-designs.online/';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="portfolio" 
      className={`section-padding bg-background transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="gold-line" />
          </div>
          <h2 className="section-title mb-4">{t('portfolio.title')}</h2>
          <p className="section-subtitle mx-auto">{t('portfolio.subtitle')}</p>
        </div>

        {/* Portfolio iframe with skeleton */}
        <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-card aspect-[29.7/21]">
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
              <Skeleton className="w-full h-full absolute inset-0" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-muted-foreground text-sm">{t('portfolio.loading') || 'Loading portfolio...'}</p>
              </div>
            </div>
          )}
          <iframe
            src="https://www.canva.com/design/DAGSCUrTrJk/KTtNROq-mw4sTpsnpeYAEQ/view?embed"
            title="Trace Designs Portfolio"
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero rounded-lg inline-flex items-center gap-2"
          >
            {t('portfolio.cta')}
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
