import { useTrackedLinks } from '@/hooks/useTrackedLinks';
import { BOT_START } from '@utils/constants';

export default function TrialKeyCta({ siteMedium = 'hard', botStart = BOT_START.analogHappHard, campaign = 'home' }) {
  const { siteLink, botLink } = useTrackedLinks();

  return (
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
        <a href={siteLink(siteMedium, campaign)} rel="nofollow" className="btn btn-win">
          Получить ключ — 1 день бесплатно →
        </a>
      </div>
      <p className="mono mt-3" style={{ fontSize: '0.72rem', color: 'var(--color-ink-faint)' }}>
        без карты · оплата СБП · от 99 ₽/мес
      </p>
      <p className="link-alt mt-1">
        Удобнее в Телеграме?{' '}
        <a href={botLink(botStart)} rel="nofollow">
          Ключ в боте →
        </a>
      </p>
    </div>
  );
}
