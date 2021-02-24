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
        line-height: 32px;
    }
    p{
        margin-bottom:10px;
    }
    h1{
        font-size: 72px;
        line-height: 76px;
        letter-spacing: -3px;
        font-weight: 700;
        margin-bottom: 40px;
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

    @media(max-width: 1010px){
        /* Font sizes should change here */
        h1{
            font-size: 54px;
            line-height: 60px;
            margin-bottom: 20px;

        }
        h2{
            font-size: 24px;
            margin-bottom: 12px;
        }
        h3{
            font-size:16px;
            margin-bottom: 8px;
        }
        h4{
            font-size: 16px;
            line-height: 18px;
        }
        p{
        }
    }

    @media(max-width: 640px){
        h1{
            font-size: 38px;
            line-height: 44px;
            margin-bottom: 20px;
            letter-spacing: -2px;
        }
        h2{
            font-size: 20px;
            line-height: 32px;
        }
        h3{
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            line-height: 24px;
        }
    } 
    @media(max-width: 480px){
        h1{
            font-size: 32px;
            line-height: 40px;
        }
    }
`

export default TypographyStyle