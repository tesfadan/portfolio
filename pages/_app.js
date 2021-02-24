import { useEffect, useState } from 'react';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import DefaultHeadTags from "../head";
import GlobalStyle from "../styles/GlobalStyle";
import ResetStyle from '../styles/Reset';
import TypographyStyle from '../styles/Typography';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  });

  const [isTop, setTop] = useState(true)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    const atTop = currPos.y > -400;
    if (isShow !== hideOnScroll && atTop !== isTop) { setHideOnScroll(isShow) }
  }, [hideOnScroll])

  return <>
    <ResetStyle />
    <TypographyStyle />
    <GlobalStyle />
    <DefaultHeadTags />
    <Header show={hideOnScroll} />
    <Component {...pageProps} />
    <Footer show={hideOnScroll} />
  </>
}

export default MyApp
