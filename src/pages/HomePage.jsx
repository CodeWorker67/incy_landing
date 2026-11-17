import { Helmet } from 'react-helmet-async';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';
import HeroSection from '@components/sections/HeroSection';
import CapsuleSection from '@components/sections/CapsuleSection';
import DownloadSection from '@components/sections/DownloadSection';
import StepsSection from '@components/sections/StepsSection';
import KeySection from '@components/sections/KeySection';
import FeaturesSection from '@components/sections/FeaturesSection';
import HappSection from '@components/sections/HappSection';
import FaqSection from '@components/sections/FaqSection';
import StickyCta from '@components/sections/StickyCta';

const TITLE = 'INCY (Инси) — официальный сайт: скачать приложение для ПК, Android, iPhone, ТВ';
const DESCRIPTION =
  'Официальный сайт INCY (Инси): скачайте приложение на ПК, Android, iPhone или ТВ и подключитесь к серверу по ключу-подписке. Один ключ — на всех устройствах. Рабочий ключ — 1 день бесплатно.';

export default function HomePage() {
  return (
    <div className="min-h-screen antialiased">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>
      <Header />
      <main className="shell" style={{ paddingTop: '2.2rem', paddingBottom: '3.5rem' }}>
        <HeroSection />
        <CapsuleSection />
        <DownloadSection />
        <StepsSection />
        <KeySection />
        <FeaturesSection />
        <HappSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
