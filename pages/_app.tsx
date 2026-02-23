import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Google_Sans } from "next/font/google";
import DefaultHeadTags from "../src/head";
import * as gtag from "../src/head/gtag";
import "../styles/globals.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "optional",
  fallback: ["Avenir Next", "Segoe UI", "sans-serif"]
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultHeadTags />
      <div className={googleSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
