import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t, dir } = useLanguage();
  // Replace with actual WhatsApp number
  const whatsappNumber = '966500000000';
  const message = encodeURIComponent('Hello, I would like to inquire about your services.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn group"
      aria-label={t('contact.whatsapp')}
    >
      <MessageCircle className="w-6 h-6" />
      <span 
        className={`absolute bottom-full mb-2 px-3 py-1 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
          dir === 'rtl' ? 'right-0' : 'left-0'
        }`}
      >
        {t('contact.whatsapp')}
      </span>
    </a>
  );
};

export default WhatsAppButton;
