import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Global Styles will go here */
        html {
        ::-webkit-scrollbar {
            display: none;
        }
        overflow: -moz-scrollbars-none;
        overflow: auto;
        -ms-overflow-style: none !important;
        /* IE 11 */
        scrollbar-width: none !important;
        /* Firefox 64 */
        scroll-behavior: smooth;
        ::selection {
            /* background-color: #0070f3; */
            /* color: white; */
        }
        /* background-color:#02141a; */

        font-family: 'General Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 180%;
        /* or 43px */
    }
    #__next{
        max-width: unset !important;
    }

    .section{
        background: pink;
    }
    
    .grid{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 32px;
        max-width: 1008px;
        margin: 0 auto;

        @media(max-width: 1260px){
            width: 100%;
        }

        @media(max-width:480px){
            padding: 0px 20px;
        }
    };

    a{
        color: #0E0D0D;
    }
`

export default GlobalStyle;
