import DefaultHeadTags from "../headTags"
import GlobalStyle from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <DefaultHeadTags />
    <Component {...pageProps} />
  </>
}

export default MyApp
