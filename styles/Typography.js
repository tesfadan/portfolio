import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

const TypographyStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');
    body{
        font-family: 'Manrope', sans-serif;
        font-weight: normal;
        font-size: 16px;
        color: ${colors.text}
    }
    h1, h2, h3{
        color: ${colors.black};
    }

    p, li{
        font-size: 16px;
        line-height: 30px;
    }
    p{
        margin-bottom:10px;
    }
    
    h2{
        font-weight: bold;
        font-size: 32px;
        line-height: 30px;
        margin-bottom: 24px;
    }
`

export default TypographyStyle