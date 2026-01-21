import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Building, FileText, Calculator } from 'lucide-react';
import interior05 from '@/assets/interior-05.jpg';
import interior06 from '@/assets/interior-06.jpg';
import interior03 from '@/assets/interior-03.jpg';
import structureDesign from '@/assets/structure-design.gif';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t('services.interior.title'),
      description: t('services.interior.description'),
      deliverables: t('services.interior.deliverables'),
      image: interior05,
    },
    {
      icon: Building,
      title: t('services.structural.title'),
      description: t('services.structural.description'),
      deliverables: t('services.structural.deliverables'),
      image: structureDesign,
    },
    {
      icon: FileText,
      title: t('services.shop.title'),
      description: t('services.shop.description'),
      deliverables: t('services.shop.deliverables'),
      image: interior03,
    },
    {
      icon: Calculator,
      title: t('services.quantity.title'),
      description: t('services.quantity.description'),
      deliverables: t('services.quantity.deliverables'),
      image: interior06,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="gold-line" />
          </div>
          <h2 className="section-title mb-4">{t('services.title')}</h2>
          <p className="section-subtitle mx-auto">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">{service.deliverables}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
