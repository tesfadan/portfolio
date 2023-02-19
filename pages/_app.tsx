import { useEffect, useState } from 'react';
import DefaultHeadTags from "../src/head/index";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useRouter } from 'next/router';
import * as gtag from "../src/head/gtag";
import { AppProps } from 'next/app'
import "../src/styles/index.scss"
import Header from '../src/sections/Header';
import { Provider } from '../src/context';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  });
  const [isTop, setTop] = useState(true)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [menu, setMenu] = useState(false)
  const [atTop, setAtTop] = useState(true)
  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    const atTop = currPos.y > -160;
    setAtTop(atTop)
    if (isShow !== hideOnScroll && atTop !== isTop) { setHideOnScroll(isShow) }
  }, [hideOnScroll])

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, [router.events]);

  const SwitchMenu = () => {
    setMenu(!menu)
  }
  

  return <>
    <Provider>
      <DefaultHeadTags />
      <Header />
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
