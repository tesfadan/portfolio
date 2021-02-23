import { useEffect } from 'react';
import Header from '../components/sections/Header';
import DefaultHeadTags from "../head";
import GlobalStyle from "../styles/GlobalStyle";
import ResetStyle from '../styles/Reset';
import TypographyStyle from '../styles/Typography';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  });
  return <>
    <ResetStyle />
    <TypographyStyle />
    <GlobalStyle />
    <DefaultHeadTags />
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
