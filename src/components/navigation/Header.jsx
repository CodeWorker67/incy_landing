import { Link, useLocation } from 'react-router-dom';
import { useTrackedLinks } from '@/hooks/useTrackedLinks';
import { BOT_START, ROUTES } from '@utils/constants';

const NAV = [
  { hash: '#download', label: 'Скачать' },
  { hash: '#steps', label: 'Настройка' },
  { hash: '#key', label: 'Ключи' },
  { hash: '#faq', label: 'FAQ' },
];

function sectionHref(hash) {
  return `${ROUTES.HOME}${hash}`;
}

export default function Header() {
  const { pathname } = useLocation();
  const { siteLink, botLink } = useTrackedLinks();
  const campaign = pathname.startsWith(ROUTES.ANALOG_HAPP) ? 'analog-happ' : 'home';

  return (
    <>
      <div style={{ height: 3, background: 'var(--gradient-accent)' }} />
      <header className="site-head">
        <div className="shell head-row">
          <Link to={ROUTES.HOME} className="brand" aria-label="INCY — на главную">
            <img className="brand-logo" src="/favicon.svg" alt="INCY" width={36} height={36} />
            <span className="brand-wm">INCY</span>
          </Link>
          <nav className="nav-desktop" aria-label="Главное меню">
            {NAV.map((item) => (
              <a key={item.hash} href={sectionHref(item.hash)} className="nav-top">
                {item.label}
              </a>
            ))}
            <Link to={ROUTES.ANALOG_HAPP} className="nav-top">
              Аналог Happ
            </Link>
          </nav>
          <div className="head-right">
            <a href={siteLink('header', campaign)} rel="nofollow" className="btn btn-win btn-sm">
              1 день бесплатно
            </a>
            <details className="mobile-nav">
              <summary aria-label="Меню">
                <span />
                <span />
                <span />
              </summary>
              <div className="mobile-panel">
                {NAV.map((item) => (
                  <a key={item.hash} href={sectionHref(item.hash)} className="m-head">
                    {item.label}
                  </a>
                ))}
                <Link to={ROUTES.ANALOG_HAPP} className="m-head">
                  Аналог Happ
                </Link>
                <a href={sectionHref('#faq')} className="m-head">
                  Поддержка
                </a>
                <a href={botLink(BOT_START.mobileMenu)} rel="noopener noreferrer" target="_blank" className="m-head">
                  Telegram-бот
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
