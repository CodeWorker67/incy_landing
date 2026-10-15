import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';
import TrialKeyCta from '@components/sections/TrialKeyCta';
import StickyCta from '@components/sections/StickyCta';
import { ROUTES } from '@utils/constants';

const TITLE = 'INCY — аналог Happ в 2026: чем отличается и как перейти';
const DESCRIPTION =
  'INCY — близкий аналог Happ: тот же клиент на ядре Xray-core, те же ключи-подписки (VLESS, Reality). Чем INCY отличается от Happ, как перейти без потери ключа и что было с Happ в App Store.';

const FAQ = [
  {
    q: 'Чем INCY отличается от Happ?',
    a: 'Это очень похожие клиенты на одном ядре Xray-core, работают с одними и теми же ключами-подписками. Различия — в интерфейсе, наборе мелких функций и оформлении. INCY есть в российском App Store, а Happ для iPhone и iPad в нём сейчас нет — его ставят из глобальной витрины после смены региона Apple ID.',
  },
  {
    q: 'Подойдёт ли мой ключ от Happ для INCY?',
    a: 'Да. И Happ, и INCY работают с одними и теми же ключами-подписками (VLESS, Reality, VMess, Trojan и др.). Тот же ключ можно добавить в INCY ссылкой или по QR-коду — перевыпускать ничего не нужно.',
  },
  {
    q: 'Happ удаляли из App Store?',
    a: 'Да, и не раз: карточку Happ убирали из российского App Store и публиковали заново трижды с июня 2026. Для iPhone и iPad Happ в российском App Store сейчас нет. INCY в российском App Store есть.',
  },
  {
    q: 'Вставил ключ от Happ в INCY, а он пишет «Администратор подписки ограничил доступ»',
    a: 'Ключ рабочий, а отказ приходит от сервера подписки: провайдер выдал лимитированную ссылку с ограничением по числу устройств, и лимит исчерпан. Переустановка не поможет — нужно освободить слот или получить новую ссылку.',
  },
  {
    q: 'Как перейти с Happ на INCY?',
    a: 'Установите INCY, откройте раздел «Провайдер» и добавьте тот же ключ-подписку, что был в Happ (ссылкой или по QR-коду). Выберите сервер и подключайтесь — всё работает так же.',
  },
];

const ALSO_READ = [
  { href: '/#download', label: 'Скачать INCY →' },
  { href: '/#download', label: 'INCY на iPhone →' },
  { href: '/#download', label: 'Скачать INCY на ПК →' },
  { href: '/#steps', label: 'Как настроить INCY →' },
  { href: '/#key', label: 'Ключи для INCY →' },
  { href: '/#faq', label: 'INCY не работает →' },
];

export default function AnalogHappPage() {
  return (
    <div className="min-h-screen antialiased">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Header />
      <main className="page" style={{ paddingTop: '2.2rem', paddingBottom: '3.5rem' }}>
        <nav aria-label="Хлебные крошки" className="mb-4" style={{ fontSize: '0.85rem', color: 'var(--color-ink-faint)' }}>
          <ol className="breadcrumbs">
            <li>
              <Link to={ROUTES.HOME} style={{ color: 'var(--color-ink-soft)' }}>
                Главная
              </Link>
              <span aria-hidden="true"> › </span>
            </li>
            <li>
              <span aria-current="page" style={{ color: 'var(--color-ink)' }}>
                INCY — аналог Happ: чем отличается и как перейти
              </span>
            </li>
          </ol>
        </nav>

        <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.3rem)' }}>INCY — аналог Happ: чем отличается и как перейти</h1>
        <p className="mt-2 mono" style={{ fontSize: '0.74rem', color: 'var(--color-ink-faint)' }}>
          <span className="badge-tested">Проверено: 2026-08-31</span>
          <span style={{ marginLeft: '0.5rem' }}>автор: Артём Соколов</span>
        </p>

        <div className="capsule mt-4">
          INCY — прямой аналог Happ: тот же тип приложения (клиент на ядре Xray-core), те же ключи-подписки (VLESS,
          Reality и др.), при этом INCY есть в российском App Store, а Happ для iPhone и iPad в нём сейчас нет.{' '}
          <strong>Ключ от Happ подходит и для INCY</strong> — добавляется ссылкой или по QR. Если ищете замену Happ или
          второй клиент про запас — INCY самый близкий вариант.
        </div>

        <article className="prose-yt">
          <p>
            Если вы пользуетесь Happ и ищете похожее приложение — на замену или как второй клиент про запас, — самый
            близкий вариант это INCY. Разберём, чем они отличаются и как перейти без потери ключа.
          </p>

          <h2 id="analog">INCY — прямой аналог Happ</h2>
          <p>
            INCY — это приложение того же типа: <strong>клиент на ядре Xray-core</strong>, в который вы добавляете свой
            ключ-подписку и подключаетесь к серверу. По сути это очень близкие программы:
          </p>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th />
                  <th>Happ</th>
                  <th>INCY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Тип</td>
                  <td>клиент на Xray-core</td>
                  <td>клиент на Xray-core</td>
                </tr>
                <tr>
                  <td>Ключи</td>
                  <td>VLESS, Reality, VMess, Trojan, Hysteria2</td>
                  <td>те же протоколы</td>
                </tr>
                <tr>
                  <td>App Store России</td>
                  <td>для iPhone и iPad нет, для Apple TV есть</td>
                  <td>есть</td>
                </tr>
                <tr>
                  <td>Android / Windows / Linux</td>
                  <td>да</td>
                  <td>да</td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td>бесплатно</td>
                  <td>бесплатно</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Отличаются они в основном интерфейсом и набором мелких функций. Ключи, движок и принцип работы — одинаковые.
          </p>

          <h2 id="key-fit">Ваш ключ от Happ подойдёт</h2>
          <p>
            И Happ, и INCY работают с <strong>одними и теми же ключами-подписками</strong>. Если у вас уже есть рабочий
            ключ, просто добавьте его в INCY — ссылкой или по QR-коду, как в Happ. Ничего перевыпускать не нужно. Как
            добавить — в разделе <Link to="/#steps">настройка INCY</Link>.
          </p>
          <p>
            Если рабочего ключа нет, его можно получить бесплатно на 1 день — см.{' '}
            <Link to="/#key">ключи для INCY</Link>.
          </p>

          <h3>Если при добавлении ключа появляется «Администратор подписки ограничил доступ»</h3>
          <p>
            Ключ рабочий, а отказ приходит от <strong>сервера подписки</strong>, когда провайдер выдал лимитированную
            ссылку: в неё зашито максимальное число устройств, и лимит исчерпан. INCY на телефоне становится ещё одной
            установкой в этом счёте — наравне с Happ на том же телефоне, если вы его не удалили.
          </p>
          <ul>
            <li>
              <strong>ключ рабочий</strong> — там, где он уже добавлен, всё продолжает работать;
            </li>
            <li>
              <strong>дело не в сроке подписки</strong>: при истёкшем периоде серверы пропадают у всех сразу;
            </li>
            <li>
              <strong>переустановка не помогает</strong> — счётчик установок ведётся на стороне провайдера.
            </li>
          </ul>
          <p>
            Если слот освободить не у кого — вопрос решается своим ключом: пробный 1 день берётся в{' '}
            <Link to="/#key">ключах для INCY</Link>.
          </p>

          <h2 id="app-store">Что было с Happ в App Store</h2>
          <p>
            С июня 2026 карточку Happ убирали из российского App Store и публиковали заново трижды.{' '}
            <strong>30 июля 2026</strong> приложение вернулось под названием «Happ - Proxy Utility Plus», но и эта
            карточка перестала открываться. Для iPhone и iPad Happ в российском App Store сейчас нет: смена региона
            Apple ID либо аналог на том же ядре — INCY, он в российском App Store есть.
          </p>
          <p>
            Именно из-за этой нестабильности часть пользователей держит под рукой INCY — он работает с теми же ключами,
            переключиться можно за минуту.
          </p>

          <h2 id="migrate">Как перейти на INCY</h2>
          <ol className="blk-steps">
            <li>
              Установите INCY — на iPhone из App Store, на других устройствах см.{' '}
              <Link to="/#download">страницу загрузок</Link>.
            </li>
            <li>Добавьте свой ключ-подписку (тот же, что в Happ) в разделе «Провайдер».</li>
            <li>Выберите сервер и подключайтесь.</li>
          </ol>
          <blockquote>
            INCY стоит выбрать, если хотите запасной клиент на том же движке или просто предпочитаете его интерфейс.
            Ключ один и тот же — можно держать оба приложения и переключаться.
          </blockquote>
        </article>

        <div className="mt-8">
          <TrialKeyCta campaign="analog-happ" />
        </div>

        <nav className="mt-12" aria-label="Читайте также">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem' }}>Читайте также</h2>
          <ul className="also-read-grid mt-3">
            {ALSO_READ.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="card also-read-card">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-12">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.3rem, 2.4vw, 1.6rem)' }}>
            Частые вопросы
          </h2>
          <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {FAQ.map((item) => (
              <details key={item.q} className="card faq-card" style={{ padding: 0 }}>
                <summary>{item.q}</summary>
                <div>{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta campaign="analog-happ" />
    </div>
  );
}
