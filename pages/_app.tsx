import { useEffect, useState } from 'react';
import DefaultHeadTags from "../src/head/index";
import { useRouter } from 'next/router';
import * as gtag from "../src/head/gtag";
import { AppProps } from 'next/app'
import "../src/styles/index.scss"
import Header from '../src/sections/Header';
import { Provider } from '../src/context';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  const [menu, setMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, [router.events]);

  const switchMenu = () => {
    setMenu((prev) => !prev);
  }
  

  return <>
    <Provider>
      <DefaultHeadTags />
      <Header showMenu={menu} switchMenu={switchMenu} />
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
