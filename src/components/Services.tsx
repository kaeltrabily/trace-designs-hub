import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Building, FileText, Calculator } from 'lucide-react';
import interior01 from '@/assets/interior-01.jpg';
import interior02 from '@/assets/interior-02.jpg';
import interior03 from '@/assets/interior-03.jpg';
import interior05 from '@/assets/interior-05.jpg';
import structureDesign from '@/assets/structure-design.gif';
import footingsSchedule from '@/assets/footings-schedule.gif';
import quantitySurvey from '@/assets/quantity-survey.gif';

const Services = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="services" className="overflow-hidden">
      {/* Section Header */}
      <div className="bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="gold-line" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      {/* Interior Design - Full Width Dark */}
      <div className="relative min-h-[80vh] bg-[#1a1a1a] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={interior05} 
            alt="Interior Design" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
        </div>
        
        {/* Content */}
        <div className={`relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-[80vh] ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">01</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              {t('services.interior.title')}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('services.interior.description')}
            </p>
            <p className="text-primary font-medium">
              {t('services.interior.deliverables')}
            </p>
          </div>
        </div>

        {/* Floating Images */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-4">
          <div className="w-32 h-40 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img src={interior01} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-32 h-40 rounded-lg overflow-hidden shadow-2xl transform translate-y-8 hover:scale-105 transition-transform duration-300">
            <img src={interior02} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Structural Design - Split Layout */}
      <div className="relative min-h-[80vh] bg-background">
        <div className={`flex flex-col lg:flex-row min-h-[80vh] ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <div className="lg:w-1/2 relative overflow-hidden">
            <img 
              src={structureDesign} 
              alt="Structural Design" 
              className="w-full h-64 lg:h-full object-cover"
            />
            {/* Overlapping secondary image */}
            <div className="absolute bottom-8 right-8 w-48 h-64 rounded-lg overflow-hidden shadow-2xl hidden lg:block border-4 border-background">
              <img src={footingsSchedule} alt="Footings Schedule" className="w-full h-full object-cover bg-white" />
            </div>
          </div>
          
          {/* Content Side */}
          <div className={`lg:w-1/2 flex items-center ${isRTL ? 'lg:pr-20' : 'lg:pl-20'} px-4 py-16 lg:py-0`}>
            <div className="max-w-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Building className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-primary font-medium tracking-widest uppercase text-sm">02</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
                {t('services.structural.title')}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('services.structural.description')}
              </p>
              <p className="text-primary font-medium">
                {t('services.structural.deliverables')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Drawings - Angled Background */}
      <div className="relative min-h-[80vh] overflow-hidden">
        {/* Angled Background */}
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        {/* Decorative Angle */}
        <div className="absolute top-0 left-0 w-full h-32 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }} />
        
        <div className={`relative z-10 container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">03</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              {t('services.shop.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('services.shop.description')}
            </p>
            <p className="text-primary font-medium">
              {t('services.shop.deliverables')}
            </p>
          </div>
          
          {/* Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <img src={interior03} alt="" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <img src={interior01} alt="" className="w-full h-32 object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <img src={interior02} alt="" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <img src={interior05} alt="" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Survey - Light with GIF showcase */}
      <div className="relative min-h-[80vh] bg-background overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        
        <div className={`relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-16 min-h-[80vh] ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">04</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              {t('services.quantity.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('services.quantity.description')}
            </p>
            <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
              <p className="text-primary font-medium">
                {t('services.quantity.deliverables')}
              </p>
            </div>
          </div>
          
          {/* GIF Showcase */}
          <div className="lg:w-3/5 flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Glow effect behind */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl" />
              
              {/* Main GIF container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <img 
                  src={quantitySurvey} 
                  alt="Quantity Survey Process" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/20 rounded-xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-secondary/40 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
