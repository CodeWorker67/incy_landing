import { Link } from 'react-router-dom';
import { useTrackedLinks } from '@/hooks/useTrackedLinks';
import { ROUTES } from '@utils/constants';

export default function Footer() {
  const { botUrl } = useTrackedLinks();
  return (
    <footer style={{ background: '#050805', borderTop: '1px solid var(--color-line)' }}>
      <div className="shell" style={{ paddingTop: '2.75rem', paddingBottom: '2.75rem', fontSize: '0.9rem' }}>
        <div className="grid-footer">
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.3rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-ink)',
              }}
            >
              INCY
            </span>
            <p className="mt-2" style={{ fontSize: '0.82rem', color: 'var(--color-ink-faint)', maxWidth: '26ch' }}>
              Приложение для подключения к VPN по своему ключу. Один ключ — на всех устройствах: ПК, Android, iPhone,
              ТВ.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ink)' }}>Приложение</p>
            <ul className="mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li>
                <a href="#download" style={{ color: 'var(--color-ink-soft)' }}>
                  Скачать INCY
                </a>
              </li>
              <li>
                <a href="#steps" style={{ color: 'var(--color-ink-soft)' }}>
                  Как настроить
                </a>
              </li>
              <li>
                <a href="#key" style={{ color: 'var(--color-ink-soft)' }}>
                  Ключи для INCY
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ink)' }}>Помощь</p>
            <ul className="mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li>
                <a href="#faq" style={{ color: 'var(--color-ink-soft)' }}>
                  INCY не работает
                </a>
              </li>
              <li>
                <Link to={ROUTES.ANALOG_HAPP} style={{ color: 'var(--color-ink-soft)' }}>
                  Аналог Happ
                </Link>
              </li>
              <li>
                <a href="#faq" style={{ color: 'var(--color-ink-soft)' }}>
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ink)' }}>О сервисе</p>
            <ul className="mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li>
                <a href="#top" style={{ color: 'var(--color-ink-soft)' }}>
                  О INCY
                </a>
              </li>
              <li>
                <a href={botUrl} rel="noopener noreferrer" target="_blank" style={{ color: 'var(--color-ink-soft)' }}>
                  Telegram-бот
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p
          className="mt-6"
          style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--color-line)',
            fontSize: '0.78rem',
            color: 'var(--color-ink-faint)',
          }}
        >
          INCY — кросс-платформенный клиент для подключения к VPN по ключу/подписке. © 2026 INCY.
        </p>
      </div>
    </footer>
  );
}
