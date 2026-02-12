import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import logo from '@/assets/logo.svg';

const Footer = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Custom X (Twitter) icon component
  const XIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: XIcon, href: '#', label: 'X' },
    { icon: Linkedin, href: 'http://linkedin.trace-designs.online', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-accent text-accent-foreground transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-start">
            <img
              src={logo}
              alt="Trace Designs"
              className="h-10 mx-auto md:mx-0 mb-4 brightness-0 invert"
            />
            <p className="text-accent-foreground/70 text-sm">
               {t('hero.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
              className="text-accent-foreground/70 hover:text-accent-foreground transition-colors text-sm"
            >
              {t('nav.about')}
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#services');
              }}
              className="text-accent-foreground/70 hover:text-accent-foreground transition-colors text-sm"
            >
              {t('nav.services')}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="text-accent-foreground/70 hover:text-accent-foreground transition-colors text-sm"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Social & Language */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'عربي' : 'English'}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-foreground/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60">
            <p>
              © {currentYear} Trace Designs. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
