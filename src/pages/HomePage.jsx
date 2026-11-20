import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';
import HeroSection from '@components/sections/HeroSection';

const CapsuleSection = lazy(() => import('@components/sections/CapsuleSection'));
const DownloadSection = lazy(() => import('@components/sections/DownloadSection'));
const StepsSection = lazy(() => import('@components/sections/StepsSection'));
const KeySection = lazy(() => import('@components/sections/KeySection'));
const FeaturesSection = lazy(() => import('@components/sections/FeaturesSection'));
const HappSection = lazy(() => import('@components/sections/HappSection'));
const FaqSection = lazy(() => import('@components/sections/FaqSection'));
const StickyCta = lazy(() => import('@components/sections/StickyCta'));

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
        <Suspense fallback={null}>
          <CapsuleSection />
          <DownloadSection />
          <StepsSection />
          <KeySection />
          <FeaturesSection />
          <HappSection />
          <FaqSection />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <StickyCta />
      </Suspense>
    </div>
  );
}