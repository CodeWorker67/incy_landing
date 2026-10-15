const YANDEX_METRIKA_ID =
  Number(import.meta.env.VITE_YANDEX_METRIKA_ID) || 113482931;

const UTM_SOURCE = import.meta.env.VITE_UTM_SOURCE || 'incywork';

/** Сайт провайдера: UTM-метки + ClientID из Метрики. */
export function buildSiteUrl(base, { medium, campaign = 'home' }, clientId) {
  try {
    const url = new URL(base);
    url.searchParams.set('utm_source', UTM_SOURCE);
    url.searchParams.set('utm_medium', medium);
    url.searchParams.set('utm_campaign', campaign);
    if (clientId) {
      url.searchParams.set('ClientIDYandex', clientId);
    }
    return url.href;
  } catch {
    return base;
  }
}

/** Telegram-бот: start-метка слота + ClientID из Метрики. */
export function buildBotUrl(base, startTag, clientId) {
  try {
    const url = new URL(base);
    url.searchParams.set('start', startTag);
    if (clientId) {
      url.searchParams.set('ClientIDYandex', clientId);
    }
    return url.href;
  } catch {
    return base;
  }
}

/** @deprecated используйте buildSiteUrl */
export function buildAuthUrl(base, clientId) {
  return buildSiteUrl(base, { medium: 'legacy', campaign: 'home' }, clientId);
}

export function buildSupportUrl(base, clientId) {
  try {
    const url = new URL(base);
    if (clientId) {
      url.searchParams.set('start', `YDincy_lab_${clientId}`);
    }
    return url.href;
  } catch {
    return base;
  }
}

let clientIdPromise = null;

/** ClientID посетителя из счётчика Яндекс.Метрики. */
export function getYandexClientId(timeoutMs = 5000) {
  if (clientIdPromise) {
    return clientIdPromise;
  }

  clientIdPromise = new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }

    let settled = false;
    const finish = (id) => {
      if (settled) return;
      settled = true;
      resolve(id);
    };

    const timer = window.setTimeout(() => finish(null), timeoutMs);
    const ym = window.ym;

    if (typeof ym !== 'function') {
      window.clearTimeout(timer);
      finish(null);
      return;
    }

    try {
      ym(YANDEX_METRIKA_ID, 'getClientID', (clientId) => {
        window.clearTimeout(timer);
        finish(clientId || null);
      });
    } catch {
      window.clearTimeout(timer);
      finish(null);
    }
  });

  return clientIdPromise;
}
