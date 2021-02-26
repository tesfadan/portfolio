import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Global Styles will go here */
    .grid{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 20px;
        width:1200px;
        margin: 0 auto;
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

    #__next{
        /* position:relative; */
    }

    .underline{
            transition: 0.1s ease-in-out;
            font-weight: 600;
            position:relative;
            &:after, &:before{
                display: block;
                content: " ";
                width: 0%;
                height: 2px;
                border-radius: 2px;
                position:absolute;
                bottom:0px;
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

            &:hover{
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

export default GlobalStyle