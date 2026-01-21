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
          <div style="position: relative; width: 100%; height: 0; padding-top: 70.7071%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGSCUrTrJk/KTtNROq-mw4sTpsnpeYAEQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGSCUrTrJk&#x2F;KTtNROq-mw4sTpsnpeYAEQ&#x2F;view?utm_content=DAGSCUrTrJk&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Trace Designs Portfolio</a> by Khaled Eltrabily
            {t('portfolio.cta')}
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
