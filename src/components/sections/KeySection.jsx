import { useTrackedLinks } from '@/hooks/useTrackedLinks';
import { BOT_START } from '@utils/constants';

export default function KeySection() {
  const { siteLink, botLink } = useTrackedLinks();

  return (
    <section id="key" className="mt-24">
      <div className="card" style={{ padding: 'clamp(1.4rem, 4vw, 2.2rem)' }}>
        <div className="grid-key">
          <div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)' }}>Нужен ключ для INCY</h2>
            <p className="mt-3" style={{ color: 'var(--color-ink-soft)', maxWidth: '40ch' }}>
              Публичные бесплатные ключи живут 1–3 дня. Стабильный ключ можно попробовать бесплатно 1 день — вставьте
              его в поле «Ссылка».{' '}
              <a href="#key" style={{ color: 'var(--color-brand)' }}>
                Подробнее о ключах для INCY →
              </a>
            </p>
            <p className="mt-2" style={{ color: 'var(--color-ink-soft)', maxWidth: '40ch', fontSize: '0.93rem' }}>
              Список серверов в приложении появляется из этого же ключа — своих серверов у INCY нет.{' '}
              <a href="#key" style={{ color: 'var(--color-brand)' }}>
                Откуда берутся серверы →
              </a>
            </p>
            <p className="mt-2" style={{ color: 'var(--color-ink-soft)', maxWidth: '40ch', fontSize: '0.93rem' }}>
              Ключ уже был, но закончился срок?{' '}
              <a href={siteLink('key', 'renew')} style={{ color: 'var(--color-brand)' }}>
                Кому платить за INCY и как продлить →
              </a>
            </p>
            <div className="keybox mt-4">
              https://sub.…/<span style={{ color: 'var(--color-ink-faint)' }}>ваш-ключ</span>
            </div>
          </div>
          <div
            className="glow-green"
            style={{
              borderRadius: '1rem',
              padding: '1.75rem',
              textAlign: 'center',
              background:
                'radial-gradient(120% 120% at 50% 0%, rgba(47,224,106,0.1), transparent 60%), var(--color-panel)',
              border: '1px solid var(--color-line-strong)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-ink)' }}>
              Ключ для INCY — 1 день бесплатно
            </p>
            <p className="mt-2" style={{ color: 'var(--color-ink-soft)', fontSize: '0.97rem', maxWidth: '48ch', marginInline: 'auto' }}>
              Получите ключ за пару кликов и вставьте в INCY. Один ключ — на 3–7 устройств.
            </p>
            <div className="cta-row mt-4" style={{ justifyContent: 'center' }}>
              <a href={siteLink('hard')} rel="nofollow" className="btn btn-win">
                Получить ключ — 1 день бесплатно →
              </a>
            </div>
            <p className="mono mt-3" style={{ fontSize: '0.72rem', color: 'var(--color-ink-faint)' }}>
              без карты · оплата СБП · от 99 ₽/мес
            </p>
            <p className="link-alt mt-1">
              Удобнее в Телеграме?{' '}
              <a href={botLink(BOT_START.homeHard)} rel="nofollow">
                Ключ в боте →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
