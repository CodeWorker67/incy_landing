import { useEffect, useMemo, useState } from 'react';
import { BOT_URL, SITE_URL, SUPPORT_URL } from '@utils/constants';
import {
  buildBotUrl,
  buildSiteUrl,
  buildSupportUrl,
  getYandexClientId,
} from '@utils/trackedLinks';

export function useTrackedLinks() {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    getYandexClientId().then(setClientId);
  }, []);

  const siteUrl = useMemo(() => buildSiteUrl(SITE_URL, clientId), [clientId]);
  const botUrl = useMemo(() => buildBotUrl(BOT_URL, clientId), [clientId]);
  const supportUrl = useMemo(() => buildSupportUrl(SUPPORT_URL, clientId), [clientId]);

  return { siteUrl, botUrl, supportUrl, clientId };
}
