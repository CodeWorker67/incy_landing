import { useCallback, useEffect, useState } from 'react';
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

  const siteLink = useCallback(
    (medium, campaign = 'home') => buildSiteUrl(SITE_URL, { medium, campaign }, clientId),
    [clientId],
  );

  const botLink = useCallback(
    (startTag) => buildBotUrl(BOT_URL, startTag, clientId),
    [clientId],
  );

  const supportUrl = buildSupportUrl(SUPPORT_URL, clientId);

  return { siteLink, botLink, supportUrl, clientId };
}
