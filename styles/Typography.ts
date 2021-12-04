import { createGlobalStyle } from 'styled-components';

const TypographyStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;800&display=swap');
   * {
        font-family: 'Manrope', -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
        text-rendering: optimizeSpeed;
    }

.sectionLabel {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
}

.label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #aeb9c7;
}

p,
a {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
}

p {
    margin-bottom: 16px;
}

li {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
}

h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #E2E5E9;
    margin-bottom: 32px;
}

h3 {
    color: #E2E5E9;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    margin-bottom: 16px;
}

@media(max-width: 760px) {
    h2 {
        font-size: 24px;
        margin-bottom: 18px;
    }
    h3 {
        font-size: 20px;
        margin-bottom: 8px;
    }
}
`

export default TypographyStyle