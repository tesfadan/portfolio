import { createGlobalStyle } from 'styled-components';

const TypographyStyle = createGlobalStyle`
/**
 * @license
 *
 * Font Family: General Sans
 * Designed by: Frode Helland
 * URL: https://www.fontshare.com/fonts/general-sans
 * © 2023 Indian Type Foundry
 *
 * Font Styles:
 * General Sans Variable(Variable font)
 * General Sans Variable Italic(Variable font)
 * General Sans Extralight
 * General Sans Extralight Italic
 * General Sans Light
 * General Sans Light Italic
 * General Sans Regular
 * General Sans Italic
 * General Sans Medium
 * General Sans Medium Italic
 * General Sans Semibold
 * General Sans Semibold Italic
 * General Sans Bold
 * General Sans Bold Italic
 *
*/

/**
* This is a variable font
* You can controll variable axes as shown below:
* font-variation-settings: 'wght' 700.0;
*
* available axes:

* 'wght' (range from 200.0 to 700.0)

*/

@font-face {
  font-family: 'GeneralSans-Variable';
  src: url('assets/fonts/GeneralSans-Variable.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Variable.woff') format('woff'),
       url('assets/fonts/GeneralSans-Variable.ttf') format('truetype');
       font-weight: 200 400 500 700;
       font-display: swap;
       font-style: normal;
}

/**
* This is a variable font
* You can controll variable axes as shown below:
* font-variation-settings: 'wght' 700.0;
*
* available axes:

* 'wght' (range from 200.0 to 700.0)

*/

/* @font-face {
  font-family: 'GeneralSans-VariableItalic';
  src: url('assets/fonts/GeneralSans-VariableItalic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-VariableItalic.woff') format('woff'),
       url('assets/fonts/GeneralSans-VariableItalic.ttf') format('truetype');
       font-weight: 200 700;
       font-display: swap;
       font-style: italic;
} */

/* @font-face {
  font-family: 'GeneralSans-Extralight';
  src: url('assets/fonts/GeneralSans-Extralight.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Extralight.woff') format('woff'),
       url('assets/fonts/GeneralSans-Extralight.ttf') format('truetype');
       font-weight: 200;
       font-display: swap;
       font-style: normal;
} */

/* @font-face {
  font-family: 'GeneralSans-ExtralightItalic';
  src: url('assets/fonts/GeneralSans-ExtralightItalic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-ExtralightItalic.woff') format('woff'),
       url('assets/fonts/GeneralSans-ExtralightItalic.ttf') format('truetype');
       font-weight: 200;
       font-display: swap;
       font-style: italic;
} */

/* @font-face {
  font-family: 'GeneralSans-Light';
  src: url('assets/fonts/GeneralSans-Light.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Light.woff') format('woff'),
       url('assets/fonts/GeneralSans-Light.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: normal;
} */

/* @font-face {
  font-family: 'GeneralSans-LightItalic';
  src: url('assets/fonts/GeneralSans-LightItalic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-LightItalic.woff') format('woff'),
       url('assets/fonts/GeneralSans-LightItalic.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: italic;
} */

@font-face {
  font-family: 'GeneralSans-Regular';
  src: url('assets/fonts/GeneralSans-Regular.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Regular.woff') format('woff'),
       url('assets/fonts/GeneralSans-Regular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}

/* @font-face {
  font-family: 'GeneralSans-Italic';
  src: url('assets/fonts/GeneralSans-Italic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Italic.woff') format('woff'),
       url('assets/fonts/GeneralSans-Italic.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: italic;
} */

@font-face {
  font-family: 'GeneralSans-Medium';
  src: url('assets/fonts/GeneralSans-Medium.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Medium.woff') format('woff'),
       url('assets/fonts/GeneralSans-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}

/* @font-face {
  font-family: 'GeneralSans-MediumItalic';
  src: url('assets/fonts/GeneralSans-MediumItalic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-MediumItalic.woff') format('woff'),
       url('assets/fonts/GeneralSans-MediumItalic.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: italic;
} */


/* @font-face {
  font-family: 'GeneralSans-Semibold';
  src: url('assets/fonts/GeneralSans-Semibold.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Semibold.woff') format('woff'),
       url('assets/fonts/GeneralSans-Semibold.ttf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: normal;
} */

/* @font-face {
  font-family: 'GeneralSans-SemiboldItalic';
  src: url('assets/fonts/GeneralSans-SemiboldItalic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-SemiboldItalic.woff') format('woff'),
       url('assets/fonts/GeneralSans-SemiboldItalic.ttf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: italic;
} */

/* @font-face {
  font-family: 'GeneralSans-Bold';
  src: url('assets/fonts/GeneralSans-Bold.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-Bold.woff') format('woff'),
       url('assets/fonts/GeneralSans-Bold.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
} */

/* @font-face {
  font-family: 'GeneralSans-BoldItalic';
  src: url('assets/fonts/GeneralSans-BoldItalic.woff2') format('woff2'),
       url('assets/fonts/GeneralSans-BoldItalic.woff') format('woff'),
       url('assets/fonts/GeneralSans-BoldItalic.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: italic;
} */

  html{
    font-family: 'GeneralSans-Variable', -apple-system, BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    /* font-family: 'GeneralSans-Regular', -apple-system, BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif; */
    text-rendering: optimizeSpeed;
  }
  *{
    line-height: 180%;
  }

  h1{
    font-weight: 500;
    font-size: 44px;
    line-height: 160%;
    margin-bottom: 1em;
  }
`

export default TypographyStyle