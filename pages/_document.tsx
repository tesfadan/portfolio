import { Head, Html, Main, NextScript } from "next/document";

const THEME_STORAGE_KEY = "tesfa-theme";
const LIGHT_THEME_COLOR = "#f7f6f3";
const DARK_THEME_COLOR = "#101011";

const themeInitScript = `
(function () {
  var storageKey = '${THEME_STORAGE_KEY}';
  var lightThemeColor = '${LIGHT_THEME_COLOR}';
  var darkThemeColor = '${DARK_THEME_COLOR}';
  var root = document.documentElement;
  var selectedTheme = 'dark';

  try {
    var savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      selectedTheme = savedTheme;
    }
  } catch {}

  root.setAttribute('data-theme', selectedTheme);

  var metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', selectedTheme === 'dark' ? darkThemeColor : lightThemeColor);
  }
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={DARK_THEME_COLOR} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
