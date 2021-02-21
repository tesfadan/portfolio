import Head from "next/head";

export default function DefaultHeadTags() {
    return (
        <Head>
            <meta charset="utf-8" />
            <title>Tesfa Demissie | Front End Developer, based in Winnipeg, MB.</title>
            <meta name="description" content="I am a Designer and Front End Developer with experience building websites and web applications with JavaScript, HTML, SASS, and React." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Theme and Icons  */}
            <meta name="theme-color" content="#ddeaeb" />

            {/* Twitter metadata  */}
            <meta name="twitter:title" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            <meta name="twitter:description" content="I am a Designer and Front End Developer with experience building websites and web applications with JavaScript, HTML, SASS, and React." />
            {/* <meta name="twitter:image" content="/assets/images/tesfadan.com.png" /> */}
            <meta name="twitter:site" content="@tesfadan" />
            <meta name="twitter:creator" content="@tesfadan" />

            {/* Open Graph metadata*/}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            <meta property="og:description" content="I am a Designer and Front End Developer with experience building websites and web applications with JavaScript, HTML, SASS, and React." />
            {/* <meta property="og:image" content="/assets/images/tesfadan.com.png" /> */}
            <meta property="og:url" content="PERMALINK" />
            <meta property="og:site_name" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            {/* <meta property="og:image" content="/assets/images/tesfadan.com.png" /> */}
            {/* <meta property="og:image:secure_url" content="/assets/images/tesfadan.com.png" /> */}
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1414" />
            <meta property="og:image:height" content="934" />
            <meta property="og:image:alt" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
        </Head>
    )
}