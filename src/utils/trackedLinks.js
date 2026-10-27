const YANDEX_METRIKA_ID =
  Number(import.meta.env.VITE_YANDEX_METRIKA_ID) || 113482931;

const SITE_START = import.meta.env.VITE_SITE_START;
const BOT_START_PREFIX = import.meta.env.VITE_BOT_START_PREFIX;

/** Сайт: ?start={VITE_SITE_START}&ClientIDYandex=… */
export function buildSiteUrl(base, clientId) {
  try {
    const url = new URL(base);
    if (SITE_START) {
      url.searchParams.set('start', SITE_START);
    }
    if (clientId) {
      url.searchParams.set('ClientIDYandex', clientId);
    }
    return url.href;
  } catch {
    return base;
  }
}

/** Telegram-бот: ?start={VITE_BOT_START_PREFIX}{ClientID} */
export function buildBotUrl(base, clientId) {
  try {
    const url = new URL(base);
    if (clientId && BOT_START_PREFIX) {
      url.searchParams.set('start', `${BOT_START_PREFIX}${clientId}`);
    }
    return url.href;
  } catch {
    return base;
  }
}

/** @deprecated используйте buildSiteUrl */
export function buildAuthUrl(base, clientId) {
  return buildSiteUrl(base, clientId);
}

export function buildSupportUrl(base, clientId) {
  return buildBotUrl(base, clientId);
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
