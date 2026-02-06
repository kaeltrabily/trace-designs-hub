import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Building, FileText, Calculator } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ImageWithSkeleton from '@/components/services/ImageWithSkeleton';
import { Lightbox } from '@/components/ui/lightbox';
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
import interior12 from '@/assets/Interior 12.jpg';
import structureDesign from '@/assets/structure-design.gif';
import footingsSchedule from '@/assets/footings-schedule.gif';
import shopDrawing from '@/assets/shop-drawing.gif';
import quantitySurvey from '@/assets/quantity-survey.gif';

const interiorImages = [
  { src: interior05, alt: 'Interior Design Background' },
  { src: interior01, alt: 'Interior Design 1' },
  { src: interior02, alt: 'Interior Design 2' },
  { src: interior03, alt: 'Interior Design 3' },
  { src: interior06, alt: 'Interior Design 6' },
  { src: interior07, alt: 'Interior Design 7' },
  { src: interior08, alt: 'Interior Design 8' },
  { src: interior09, alt: 'Interior Design 9' },
  { src: interior10, alt: 'Interior Design 10' },
  { src: interior11, alt: 'Interior Design 11' },
  { src: interior12, alt: 'Interior Design 12' },
];

const Services = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: interiorRef, isVisible: interiorVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: structuralRef, isVisible: structuralVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: combinedRef, isVisible: combinedVisible } = useScrollAnimation({ threshold: 0.1 });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return <section id="services" className="overflow-hidden">
      {/* Section Header */}
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`bg-background py-16 px-4 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
      <div 
        ref={interiorRef as React.RefObject<HTMLDivElement>}
        className={`relative min-h-[80vh] bg-[#1a1a1a] overflow-hidden transition-all duration-700 ease-out ${interiorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Background Image with Overlay - Clickable */}
        <button 
          onClick={() => openLightbox(0)} 
          className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
          aria-label="View interior design gallery"
        >
          <ImageWithSkeleton src={interior05} alt="Interior Design" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none" />
        </button>
        
        {/* Content */}
        <div className={`relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-[80vh] ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">01</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight break-words">
              {t('services.interior.title')}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 break-words">
              {t('services.interior.description')}
            </p>
            <p className="font-medium text-gray-300 break-words">
              {t('services.interior.deliverables')}
            </p>
          </div>

          {/* Mobile Gallery */}
          <div className="grid grid-cols-3 gap-2 mt-8 lg:hidden w-full max-w-md">
            {interiorImages.slice(1, 7).map((image, index) => (
              <button 
                key={index}
                onClick={() => openLightbox(index + 1)} 
                className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <ImageWithSkeleton src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Floating Images Gallery - Desktop */}
        <div className="absolute bottom-4 right-4 hidden lg:block">
          <div className="flex gap-3">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <button onClick={() => openLightbox(1)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior01} alt="Interior Design 1" className="w-full h-full object-cover" />
              </button>
              <button onClick={() => openLightbox(2)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior02} alt="Interior Design 2" className="w-full h-full object-cover" />
              </button>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-3 translate-y-6">
              <button onClick={() => openLightbox(3)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior03} alt="Interior Design 3" className="w-full h-full object-cover" />
              </button>
              <button onClick={() => openLightbox(4)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior06} alt="Interior Design 6" className="w-full h-full object-cover" />
              </button>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <button onClick={() => openLightbox(5)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior07} alt="Interior Design 7" className="w-full h-full object-cover" />
              </button>
              <button onClick={() => openLightbox(6)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior08} alt="Interior Design 8" className="w-full h-full object-cover" />
              </button>
            </div>
            {/* Column 4 */}
            <div className="flex flex-col gap-3 translate-y-6">
              <button onClick={() => openLightbox(7)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior09} alt="Interior Design 9" className="w-full h-full object-cover" />
              </button>
              <button onClick={() => openLightbox(8)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior10} alt="Interior Design 10" className="w-full h-full object-cover" />
              </button>
            </div>
            {/* Column 5 */}
            <div className="flex flex-col gap-3">
              <button onClick={() => openLightbox(9)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior11} alt="Interior Design 11" className="w-full h-full object-cover" />
              </button>
              <button onClick={() => openLightbox(10)} className="w-24 h-28 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ImageWithSkeleton src={interior12} alt="Interior Design 12" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          images={interiorImages}
          initialIndex={lightboxIndex}
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
        />
      </div>

      {/* Structural Design - Split Layout */}
      <div 
        ref={structuralRef as React.RefObject<HTMLDivElement>}
        className={`relative min-h-fit lg:min-h-[80vh] bg-background transition-all duration-700 ease-out ${structuralVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className={`flex flex-col lg:flex-row min-h-fit lg:min-h-[80vh] ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
            <ImageWithSkeleton src={structureDesign} alt="Structural Design" className="w-full h-64 lg:h-full object-cover" />
            {/* Overlapping secondary image */}
            <div className="absolute bottom-8 right-8 w-48 h-64 rounded-lg overflow-hidden shadow-2xl hidden lg:block border-4 border-background">
              <ImageWithSkeleton src={footingsSchedule} alt="Footings Schedule" className="w-full h-full object-cover bg-white" />
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
      <div 
        ref={combinedRef as React.RefObject<HTMLDivElement>}
        className={`relative min-h-[80vh] bg-background overflow-hidden flex items-center transition-all duration-700 ease-out ${combinedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
                  <ImageWithSkeleton src={shopDrawing} alt="Shop Drawing Process" className="w-full h-full object-cover" />
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
                  <ImageWithSkeleton src={quantitySurvey} alt="Quantity Survey Process" className="w-full h-full object-cover" />
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