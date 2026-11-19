import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import logo from '@/assets/logo.svg';

const PageHeader = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Trace Designs" className="h-10 md:h-12" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
              {language === 'ar' ? 'العودة للرئيسية' : 'Back to home'}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 19 November 2026',
    sections: [
      {
        h: 'What we collect',
        p: 'When you send us a message through the contact form, we receive the details you enter: your name, your email address, your phone number if you choose to add it, and your message.',
      },
      {
        h: 'How we use it',
        p: 'We use these details only to read your inquiry and reply to you. The form delivers your message to the contact email designated for this site.',
      },
      {
        h: 'Who processes it',
        p: 'The contact form is delivered by Web3Forms, an external form service. Web3Forms receives your submission, applies spam protection, forwards it to us by email, and keeps a copy in our account dashboard for up to 30 days. You can read their privacy policy at web3forms.com/privacy.',
      },
      {
        h: 'Where your message goes',
        p: 'Your submission goes to Web3Forms, which forwards it to the designated contact email and keeps the dashboard copy described above.',
      },
      {
        h: 'Cookies and device storage',
        p: 'This site stores two small preferences on your device: your language choice and your cookie-banner choice. No tracking or advertising cookies are used.',
      },
      {
        h: 'Questions',
        p: 'For any privacy question or a request to delete a message you sent, email us at Contact-Us@Trace-Designs.online.',
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: ١٩ نوفمبر ٢٠٢٦',
    sections: [
      {
        h: 'البيانات التي نجمعها',
        p: 'عندما ترسل لنا رسالة من نموذج التواصل، نستلم البيانات التي تكتبها: اسمك، وبريدك الإلكتروني، ورقم هاتفك إذا اخترت إضافته، ونص رسالتك.',
      },
      {
        h: 'كيف نستخدمها',
        p: 'نستخدم هذه البيانات فقط لقراءة استفسارك والرد عليك. يوصل النموذج رسالتك إلى البريد الإلكتروني المخصص للتواصل في هذا الموقع.',
      },
      {
        h: 'من يعالجها',
        p: 'يتم توصيل نموذج التواصل عن طريق Web3Forms، وهي خدمة نماذج خارجية. تستلم الخدمة رسالتك، وتحميها من الرسائل المزعجة، وتوصلها لنا بالبريد الإلكتروني، وتحتفظ بنسخة منها في لوحة التحكم الخاصة بحسابنا لمدة تصل إلى ٣٠ يومًا. يمكنك قراءة سياسة الخصوصية الخاصة بهم على web3forms.com/privacy.',
      },
      {
        h: 'أين تذهب رسالتك',
        p: 'تذهب رسالتك إلى Web3Forms، والتي توصلها إلى البريد الإلكتروني المخصص للتواصل وتحتفظ بنسخة لوحة التحكم الموضحة أعلاه.',
      },
      {
        h: 'ملفات تعريف الارتباط والتخزين على جهازك',
        p: 'يحفظ الموقع على جهازك تفضيلين صغيرين فقط: اللغة التي اخترتها واختيارك في شريط ملفات تعريف الارتباط. لا توجد أي ملفات تتبع أو إعلانات.',
      },
      {
        h: 'لديك سؤال؟',
        p: 'لأي سؤال عن الخصوصية أو لطلب حذف رسالة أرسلتها، راسلنا على Contact-Us@Trace-Designs.online.',
      },
    ],
  },
};

const Privacy = () => {
  const { language } = useLanguage();
  const c = language === 'ar' ? content.ar : content.en;

  useEffect(() => {
    document.title =
      language === 'ar'
        ? 'سياسة الخصوصية | تريس ديزاينز'
        : 'Privacy Policy | Trace Designs';
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main className="pt-24">
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="gold-line" />
              </div>
              <h1 className="section-title mb-3">{c.title}</h1>
              <p className="text-sm text-muted-foreground">{c.updated}</p>
            </div>
            <div className="space-y-8">
              {c.sections.map((s) => (
                <div key={s.h}>
                  <h2 className="text-xl font-semibold text-foreground mb-2">{s.h}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
