import { useEffect, useState } from 'react';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import DefaultHeadTags from "../head/index";
import GlobalStyle from "../styles/GlobalStyle";
// import ResetStyle from '../styles/Reset';
import '../styles/reset.css';
// import '../styles/index.scss';
import TypographyStyle from '../styles/Typography';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Menu } from '../components/sections/Menu';
import Credit from '../components/sections/Credit';
import { useRouter } from 'next/router';
import * as gtag from "../head/gtag";
import { AppProps } from 'next/app'

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
    {/* <ResetStyle /> */}
    <TypographyStyle />
    <GlobalStyle />
    <DefaultHeadTags />
    <Header
      transparent={atTop}
      showMenu={hideOnScroll || menu}
      menuOn={menu}
      SwitchMenu={SwitchMenu}
    />
    <Menu showMenu={menu} SwitchMenu={() => SwitchMenu()} />
    <Component {...pageProps} />
    {/* <Footer show={hideOnScroll} /> */}
    {/* <Credit /> */}
  </>
}

export default MyApp
