import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { t } = useLanguage();
  const portfolioUrl = 'http://portfolio.trace-designs.online/';

  return (
    <section id="portfolio" className="section-padding bg-background">
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
        <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-card">
          <iframe
            src={portfolioUrl}
            title="Trace Designs Portfolio"
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] border-0"
            loading="lazy"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
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
