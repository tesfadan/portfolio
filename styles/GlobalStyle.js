import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

const GlobalStyle = createGlobalStyle`
    /* Global Styles will go here */
    .grid{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 20px;
        width:1180px;
    };

    .button{
        height: 50px;
        display:flex;
        justify-content:center;
        border: 2px solid ${colors.border};
        padding: 0px 16px;
        border-radius: 3px; 
        width:max-content;
        align-items:center;
        transition: 0.1s ease-in;
        border-width:1px;
        &.small{
            height: 40px;
        }
        &:hover{
            background: ${colors.till};
        }

        &.primary{
            background: ${colors.primaryContarst};
            color: ${colors.white};
            border-color: ${colors.primaryContarst};

            &:hover{
                background: ${colors.primaryDark};
            }
        }
    }

    .underline{
        position: relative;
        &:after{
            transition: 0.15s ease-in;
            display: inline-block;
            position: relative;
            content: " ";
            width: 0%;
            height: 2px;
            background: currentColor;
            position:absolute;
            bottom: -4px;
            border-radius:2px;
        }
        &:hover, &:focus{
            &::after{
                width: 100%;
            }
        }
    }

    .label{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        text-transform: uppercase;
        user-select: none;
    }

    svg, a, img{
        user-select: none;
    }
    a{
        cursor: pointer;
    }

    .screenReaderOnly {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
`

export default GlobalStyle