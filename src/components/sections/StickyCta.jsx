import { useEffect, useRef } from 'react';
import { useTrackedLinks } from '@/hooks/useTrackedLinks';

const STORAGE_KEY = 'incy_sticky_closed';

export default function StickyCta() {
  const { siteUrl } = useTrackedLinks();
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    try {
      if (Date.now() - Number(localStorage.getItem(STORAGE_KEY) || 0) < 864e5) {
        return;
      }
    } catch {
      /* ignore */
    }

    const show = () => {
      el.hidden = false;
      document.body.classList.add('has-sticky');
      window.removeEventListener('scroll', onScroll);
    };

    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + window.innerHeight) / h.scrollHeight > 0.3 || h.scrollTop > 900) {
        show();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => {
    const el = barRef.current;
    if (!el) return;
    el.hidden = true;
    document.body.classList.remove('has-sticky');
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="sticky-cta" ref={barRef} hidden>
      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-ink)' }}>Рабочий ключ для INCY</span>
      <a href={siteUrl} rel="nofollow" className="btn btn-win btn-sm">
        1 день бесплатно →
      </a>
      <button type="button" className="sticky-cta-x" aria-label="Скрыть предложение" onClick={close}>
        ×
      </button>
    </div>
  );
}
