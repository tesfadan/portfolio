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
            background-color: #0070f3;
            color: white;
        }
        background-color:#02141a;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        /* column-gap: 20px; */
        width:1200px;
        margin: 0 auto;

        @media(max-width: 1260px){
            width: 100%;
        }

        @media(max-width:480px){
                padding: 0px 20px;
        }
    };

    .label{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        text-transform: uppercase;
        user-select: none;
    }
    .screenReaderOnly {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    .underline{
            transition: 0.1s ease-in-out;
            position:relative;
            &:after, &:before{
                display: block;
                content: " ";
                width: 0%;
                height: 2px;
                border-radius: 12px;
                position:absolute;
                bottom:0px;
            }

            &.big{
                &:after, &:before{
                    height: 4px;
                    bottom: -2px;
                }
            }

            &:before{
                background:#3e98ff;
                z-index:2;
                transition: 0.3s ease-in-out;
            }

            &:after{
                background:#E2E5E9;
                transition: 0.15s ease-out;
            }

            &:hover, &:focus{
                color: #E2E5E9;
                ::before{
                    width: 100%;
                }
                ::after{
                    width: 100%;
                }
            }
    }
`

export default GlobalStyle;