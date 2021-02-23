import { useEffect } from 'react';
import Footer from '../components/sections/Footer';
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
    <Footer />
    <Component {...pageProps} />
  </>
}

export default MyApp
