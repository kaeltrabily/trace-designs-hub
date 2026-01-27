import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { t } = useLanguage();
  const portfolioUrl = 'http://portfolio.trace-designs.online/';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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

        {/* Portfolio iframe */}
        <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-card aspect-[29.7/21]">
          <iframe
            src="https://www.canva.com/design/DAGSCUrTrJk/KTtNROq-mw4sTpsnpeYAEQ/view?embed"
            title="Trace Designs Portfolio"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
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
