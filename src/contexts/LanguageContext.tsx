import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Trace Designs',
    'hero.subtitle': 'Building Lasting Trace',
    'hero.description': 'Delivers integrated engineering and design solutions that turn ideas into efficient, buildable realities.',
    'hero.cta': 'Get a Quote',
    'hero.cta.secondary': 'View Our Work',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Crafting Excellence Since Day One',
    'about.description': 'Trace Designs is a leading design and engineering consultancy specializing in creating exceptional spaces. Our multidisciplinary team combines creativity with technical expertise to deliver projects that exceed expectations.',
    'about.mission.title': 'Our Mission',
    'about.mission': 'To transform architectural visions into reality through innovative design solutions and meticulous attention to detail.',
    'about.vision.title': 'Our Vision',
    'about.vision': 'To be the premier choice for comprehensive design and engineering services in the region.',
    'about.team.title': 'Expert Team',
    'about.team': 'Our team of architects, engineers, and designers work collaboratively to bring your vision to life.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Design & Engineering Solutions',
    
    'services.interior.title': 'Interior Design',
    'services.interior.description': 'Creating stunning, functional interiors that reflect your style and enhance your lifestyle.',
    'services.interior.deliverables': '3D Visualization • Space Planning • Material Selection • Furniture Design • Lighting Design',
    
    'services.structural.title': 'Structural Design',
    'services.structural.description': 'Engineering robust structural solutions that ensure safety, stability, and longevity.',
    'services.structural.deliverables': 'Structural Analysis • Foundation Design • Load Calculations • Seismic Design • Technical Reports',
    
    'services.shop.title': 'Shop Drawings',
    'services.shop.description': 'Precise technical drawings that bridge design intent with construction reality.',
    'services.shop.deliverables': 'Fabrication Drawings • Installation Details • Coordination Plans • As-Built Documentation',
    
    'services.quantity.title': 'Quantity Survey',
    'services.quantity.description': 'Accurate cost estimation and quantity takeoffs for informed project decisions.',
    'services.quantity.deliverables': 'Bill of Quantities • Cost Estimation • Value Engineering • Progress Measurements',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Explore Our Latest Projects',
    'portfolio.cta': 'Explore Full Portfolio',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s Discuss Your Project',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.OurEmail': 'Email',
    'contact.OurPhone': 'Phone',
    'contact.OurLocation': 'Our Location',
    'contact.GetinTouch': 'New Damietta - Damietta - Egypt',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.contact': 'تواصل معنا',
    
    // Hero
    'hero.title': 'تريس ديزاينز',
    'hero.subtitle': 'نبني أثراً يدوم',
    'hero.description': 'تقدم حلول تصميم وهندسة متكاملة تحوّل الأفكار إلى واقع عملي قابل للتنفيذ.',
    'hero.cta': 'احصل على عرض سعر',
    'hero.cta.secondary': 'شاهد أعمالنا',
    
    // About
    'about.title': 'من نحن',
    'about.subtitle': 'صناعة التميز منذ البداية',
    'about.description': 'في أثر للتصميم الهندسي (Trace Designs)، نحن فريق مكرس من المحترفين المتخصصين في الهندسة الإنشائية وخدمات العمارة. مع شغف بالابتكار والتزام بالتميز، نقدم حلولاً مصممة خصيصًا تلبي الاحتياجات المتطورة لعملائنا.',
    'about.mission.title': 'مهمتنا',
    'about.mission': 'نهدف إلى تصميم منشآت لا تقاوم اختبار الزمن فحسب، بل تترك أيضًا تأثيرًا ذا مغزى ودائم على المجتمعات التي تخدمها. ',
    'about.vision.title': 'رؤيتنا',
    'about.vision': 'أن نكون الخيار الأول لخدمات التصميم والهندسة الشاملة في المنطقة.',
    'about.team.title': 'فريق الخبراء',
    'about.team': 'يعمل فريقنا من المعماريين والمهندسين الانشائيين والمصممين بشكل تعاوني لتحقيق رؤيتك.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة للتصميم والهندسة',
    
    'services.interior.title': 'التصميم الداخلي',
    'services.interior.description': 'إنشاء تصميمات داخلية مذهلة وعملية تعكس أسلوبك وتعزز نمط حياتك.',
    'services.interior.deliverables': 'تصور ثلاثي الأبعاد • تخطيط المساحات • اختيار المواد • تصميم الأثاث • تصميم الإضاءة',
    
    'services.structural.title': 'التصميم الإنشائي',
    'services.structural.description': 'هندسة حلول إنشائية متينة تضمن السلامة والاستقرار والمتانة.',
    'services.structural.deliverables': 'التحليل الإنشائي • تصميم الأساسات • حسابات الأحمال • التصميم الزلزالي • التقارير الفنية',
    
    'services.shop.title': 'رسومات التنفيذ',
    'services.shop.description': 'رسومات تقنية دقيقة تربط بين نية التصميم وواقع البناء.',
    'services.shop.deliverables': 'رسومات التصنيع • تفاصيل التركيب • مخططات التنسيق • وثائق البناء النهائية',
    
    'services.quantity.title': 'حصر الكميات',
    'services.quantity.description': 'تقدير دقيق للتكاليف وحصر الكميات لقرارات مشروع مستنيرة.',
    'services.quantity.deliverables': 'جداول الكميات • تقدير التكاليف • هندسة القيمة • قياسات التقدم',
    
    // Portfolio
    'portfolio.title': 'أعمالنا',
    'portfolio.subtitle': 'استكشف أحدث مشاريعنا',
    'portfolio.cta': 'استكشف المعرض الكامل',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'دعنا نناقش مشروعك',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'رسالتك',
    'contact.submit': 'إرسال الرسالة',
    'contact.whatsapp': 'تحدث عبر واتساب',
    'contact.OurEmail': 'الايميل',
    'contact.OurPhone': 'الهاتف',
    'contact.OurLocation': 'عنواننا',
    'contact.GetinTouch': 'دمياط الجديدة - دمياط - مصر',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cookie utility functions
const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from cookie or default to 'en'
    const savedLanguage = getCookie('preferred_language');
    return (savedLanguage === 'ar' || savedLanguage === 'en') ? savedLanguage : 'en';
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      setCookie('preferred_language', newLang);
      return newLang;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key as keyof typeof translations['en']] || key;
    },
    [language]
  );

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
