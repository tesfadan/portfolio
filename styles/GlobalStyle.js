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
        border: 2px solid currentColor;
        padding: 0px 16px;
        border-radius: 3px; 
        width:max-content;
        align-items:center;
        transition: 0.075s ease-in-out;
        
        &.small{
            height: 40px;
        }
        &:hover{
            background: ${colors.primaryVeryLight};
        }

        &.primary{
            background: ${colors.primary};
            color: ${colors.white};
            border-color: ${colors.primary};
        }


    }
`

export default GlobalStyle