import { useLanguage } from '@/contexts/LanguageContext';
import interior01 from '@/assets/interior-01.jpg';
import interior02 from '@/assets/interior-02.jpg';
import interior03 from '@/assets/interior-03.jpg';
import interior05 from '@/assets/interior-05.jpg';
import interior06 from '@/assets/interior-06.jpg';
import structureDesign from '@/assets/structure-design.gif';

const Services = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="services">
      {/* Interior Design Section - Dark Background */}
      <div className="bg-[#1a1a1a] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-12">
            {t('services.title')}
          </h2>
          
          <div className={`flex flex-col md:flex-row gap-8 mb-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/3">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                {t('services.interior.title')}
              </h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 leading-relaxed">
                {t('services.interior.description')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={interior01} alt="Interior Design 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={interior02} alt="Interior Design 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={interior05} alt="Interior Design 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={interior03} alt="Interior Design 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Shop Drawing Section - Diagonal Light Background */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-primary/10 -skew-y-3 scale-110" />
        <div className="container mx-auto relative z-10">
          <div className={`flex flex-col md:flex-row gap-8 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/3">
              <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                {t('services.shop.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.shop.description')}
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                  <img src={interior03} alt="Shop Drawing 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src={interior05} alt="Shop Drawing 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src={interior06} alt="Shop Drawing 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Design Section - Light Background */}
      <div className="bg-background py-20 px-4">
        <div className="container mx-auto">
          <div className={`flex flex-col md:flex-row gap-8 mb-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/3">
              <h3 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
                {t('services.structural.title')}
              </h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-muted-foreground leading-relaxed">
                {t('services.structural.description')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={structureDesign} alt="Structural Design" className="w-full h-64 md:h-80 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-card p-4">
              <div className="h-64 md:h-80 flex items-center justify-center">
                <p className="text-sm text-muted-foreground text-center px-4">
                  {t('services.structural.deliverables')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Survey Section - Light Background */}
      <div className="bg-secondary/20 py-20 px-4">
        <div className="container mx-auto">
          <div className={`flex flex-col md:flex-row gap-8 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                {t('services.quantity.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.quantity.description')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg bg-card">
                <img src={interior06} alt="Quantity Survey" className="w-full h-64 md:h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
