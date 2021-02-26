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
`

export default GlobalStyle