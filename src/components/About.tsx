import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import interior02 from '@/assets/interior-02.jpg';

const About = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission'),
    },
    {
      icon: Eye,
      title: t('about.vision.title'),
      description: t('about.vision'),
    },
    {
      icon: Users,
      title: t('about.team.title'),
      description: t('about.team'),
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="about" 
      className={`section-padding bg-background transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={interior02}
                alt="Trace Designs Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="gold-line mb-4" />
            <h2 className="section-title mb-4">{t('about.title')}</h2>
            <p className="text-xl font-medium text-primary mb-4">{t('about.subtitle')}</p>
            <p className="section-subtitle mb-8">{t('about.description')}</p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
