import Head from "next/head";

const THEME_STORAGE_KEY = "tesfa-theme";
const LIGHT_THEME_COLOR = "#f7f6f3";
const DARK_THEME_COLOR = "#101011";
const EMAIL_ADDRESS = "tesfa@tesfadan.com";
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/tesfadan/";
const SHOW_THEME_CONTROL = false;

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute("data-theme", theme);

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore write failures in private browsing modes.
  }

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", theme === "dark" ? DARK_THEME_COLOR : LIGHT_THEME_COLOR);
  }
}

export default function Home() {
  const toggleTheme = () => {
    const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <>
      <Head>
        <title>Tesfa Demissie | Design Engineer</title>
        <meta
          name="description"
          content="I build digital experiences with strong taste and production-level execution."
        />
      </Head>

      <main className="home">
        {SHOW_THEME_CONTROL && (
          <div className="home__toolbar">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle light and dark theme"
            >
              Theme
            </button>
          </div>
        )}

        <p className="summary">
          I&apos;m Tesfa Demissie, a design engineer. I build digital products with strong taste and production-level
          execution.
        </p>

        <p className="contact">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <span className="contact-separator" aria-hidden="true">
            ·
          </span>
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </p>
      </main>
    </>
  );
}
