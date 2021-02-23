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

    p{
        font-size: 16px;
        line-height: 30px;
    }
`

export default TypographyStyle