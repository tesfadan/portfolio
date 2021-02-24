import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

const TypographyStyle = createGlobalStyle`
    body{
        font-family: 'Manrope', sans-serif;
        font-weight: normal;
        font-size: 16px;
        color: ${colors.text}
    }
    h1, h2, h3{
        color: ${colors.black};
    }
    p{
        font-size: 16px;
        line-height: 30px;
    }
    p{
        margin-bottom:10px;
    }
    h1{
    }
    
    h2{
        font-weight: bold;
        font-size: 32px;
        line-height: 30px;
        margin-bottom: 24px;
    }

    h3{
        font-size:18px;
        margin-bottom: 12px;
    }
    h4{
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 6px;
    }
`

export default TypographyStyle