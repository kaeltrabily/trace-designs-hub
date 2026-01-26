import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Building, FileText, Calculator } from 'lucide-react';
import interior01 from '@/assets/interior-01.jpg';
import interior02 from '@/assets/interior-02.jpg';
import interior03 from '@/assets/interior-03.jpg';
import interior05 from '@/assets/interior-05.jpg';
import interior06 from '@/assets/interior-06.jpg';
import interior07 from '@/assets/Interior 07.jpg';
import interior08 from '@/assets/Interior 08.jpg';
import interior09 from '@/assets/Interior 09.jpg';
import interior10 from '@/assets/Interior 10.jpg';
import interior11 from '@/assets/Interior 11.jpg';
import structureDesign from '@/assets/structure-design.gif';
import footingsSchedule from '@/assets/footings-schedule.gif';
import shopDrawing from '@/assets/shop-drawing.gif';
import quantitySurvey from '@/assets/quantity-survey.gif';
const Services = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <section id="services" className="overflow-hidden">
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
          <img src={interior05} alt="Interior Design" className="w-full h-full object-cover opacity-40" />
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
            <p className="font-medium text-gray-300">
              {t('services.interior.deliverables')}
            </p>
          </div>
        </div>

        {/* Floating Images Gallery */}
        <div className="absolute bottom-4 right-4 hidden lg:block">
          <div className="flex gap-3">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior01} alt="Interior Design 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior02} alt="Interior Design 2" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-3 translate-y-6">
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior03} alt="Interior Design 3" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior06} alt="Interior Design 6" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior07} alt="Interior Design 7" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior08} alt="Interior Design 8" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-3 translate-y-6">
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior09} alt="Interior Design 9" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior10} alt="Interior Design 10" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Column 5 */}
            <div className="flex flex-col gap-3">
              <div className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img src={interior11} alt="Interior Design 11" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Design - Split Layout */}
      <div className="relative min-h-[80vh] bg-background">
        <div className={`flex flex-col lg:flex-row min-h-[80vh] ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <div className="lg:w-1/2 relative overflow-hidden">
            <img src={structureDesign} alt="Structural Design" className="w-full h-64 lg:h-full object-cover" />
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

      {/* Shop Drawings & Quantity Survey - Combined Section */}
      <div className="relative min-h-[80vh] bg-background overflow-hidden flex items-center">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/10" />
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Two Services Grid */}
          <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Shop Drawings */}
            <div className="flex flex-col items-center text-center h-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-primary font-medium tracking-widest uppercase text-sm">03</span>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                {t('services.shop.title')}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {t('services.shop.description')}
              </p>
              
              {/* GIF */}
              <div className="w-full max-w-xs mb-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card" style={{
                aspectRatio: '0.9'
              }}>
                  <img src={shopDrawing} alt="Shop Drawing Process" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="inline-block px-4 py-2 bg-secondary/40 rounded-full border border-border/50">
                <p className="text-primary font-medium text-sm">
                  {t('services.shop.deliverables')}
                </p>
              </div>
            </div>
            
            {/* Quantity Survey */}
            <div className="flex flex-col items-center text-center h-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-primary font-medium tracking-widest uppercase text-sm">04</span>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                {t('services.quantity.title')}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                {t('services.quantity.description')}
              </p>
              
              {/* GIF */}
              <div className="w-full max-w-xs mb-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card w-full" style={{
                aspectRatio: '0.9'
              }}>
                  <img src={quantitySurvey} alt="Quantity Survey Process" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="inline-block px-4 py-2 bg-secondary/40 rounded-full border border-border/50">
                <p className="text-primary font-medium text-sm">
                  {t('services.quantity.deliverables')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;