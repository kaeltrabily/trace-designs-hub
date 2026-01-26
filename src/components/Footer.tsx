import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Footer = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'linkedin.trace-designs.online', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground">
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
              Transforming spaces with innovative design and engineering solutions.
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
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
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
