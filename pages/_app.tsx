import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import DefaultHeadTags from "../src/head";
import * as gtag from "../src/head/gtag";
import "../styles/globals.css";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
