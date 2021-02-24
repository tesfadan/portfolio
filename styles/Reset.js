import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
    /* Globally Reset Styles */
// https://dev.to/hankchizljaw/a-modern-css-reset-6p3

/* Box sizing rules */

*,
*::before,
*::after {
    box-sizing: border-box;
}


/* Remove default padding */

ul[class],
ol[class] {
    padding: 0;
}

a {
    text-decoration: none;
    color: unset;
}

li {
    list-style: none;
}


/* Remove default margin */

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
}


/* Set core body defaults */

body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}


/* Remove list styles on ul, ol elements with a class attribute */

ul[class],
ol[class] {
    list-style: none;
}


/* A elements that don't have a class get default styles */

a:not([class]) {
    text-decoration-skip-ink: auto;
}


/* Make images easier to work with */

img {
    // max-width: 100%;
    display: block;
}


/* Natural flow and rhythm in articles by default */

article>*+* {
    margin-top: 1em;
}


/* Inherit fonts for inputs and buttons */

* {
    outline: none;
}

button,
a,
.link {
    cursor: pointer;
}

button{
    background: unset;
}

// // // // // RESET NEW 

/*
*  html5resetcss
*/

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent
}

body {
    line-height: 1
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block
}

nav ul {
    list-style: none
}

blockquote,
q {
    quotes: none
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: none
}

a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent
}

ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none
}

mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold
}

del {
    text-decoration: line-through
}

abbr[title],
dfn[title] {
    border-bottom: 1px dotted;
    cursor: help
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0
}

input,
select {
    vertical-align: middle
}

a,
input,
button,
textarea,
select {
    font: inherit;
    &:focus {
        // outline: 1px solid #ccc;
    }
}
`

export default ResetStyle