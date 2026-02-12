import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import interior01 from '@/assets/interior-01.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={interior01}
          alt="Luxury Interior Design by Trace Designs"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="img-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto stagger-children">
          {/* Decorative line */}
          <div className="flex justify-center mb-6">
            <div className="gold-line" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/80 font-light mb-6">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-hero rounded-lg"
            >
              {t('hero.cta')}
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="btn-hero-outline rounded-lg"
            >
              {t('hero.cta.secondary')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
