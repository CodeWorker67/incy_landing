export const SITE_URL =
  import.meta.env.VITE_SITE_URL ||
  import.meta.env.VITE_AUTH_URL ||
  'https://zoomersky.win/auth/login';

export const BOT_URL =
  import.meta.env.VITE_BOT_URL ||
  import.meta.env.VITE_SUPPORT_URL ||
  'https://t.me/Helpzoomerbot';

export const SUPPORT_URL = import.meta.env.VITE_SUPPORT_URL || BOT_URL;

/** @deprecated используйте SITE_URL */
export const AUTH_URL = SITE_URL;

export const ROUTES = {
  HOME: '/',
  ANALOG_HAPP: '/analog-happ',
  PRIVACY: '/privacy',
  TERMS: '/terms',
};

export const DOWNLOADS = {
  ios: 'https://apps.apple.com/us/app/incy/id6756943388',
  android: 'https://play.google.com/store/apps/details?id=llc.itdev.incy&hl=ru',
  desktop: 'https://github.com/INCY-DEV/incy-platforms',
};
