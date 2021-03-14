import Head from "next/head";
import { GA_TRACKING_ID } from "./gtag";

export default function DefaultHeadTags() {

    return (
        <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                    });
                        `
                }}
            />

            <meta charSet="utf-8" />
            <title>Tesfa Demissie | Front End Developer, based in Winnipeg, MB.</title>
            <meta name="description" content="I am a Designer and Front End Developer with experience building websites and web applications with JavaScript, HTML, SCSS, and React." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Theme and Icons  */}
            <meta name="theme-color" content="#021B22" />
            <link rel="icon" href="/assets/logo.svg" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/assets/icons/apple-icon.png" />
            <meta name="theme-color" content="#317EFB" />

            {/* Twitter metadata  */}
            <meta name="twitter:title" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            <meta name="twitter:description" content="I am a Designer and Front End Developer with experience building websites and web applications with JavaScript, HTML, SCSS, and React." />
            <meta name="twitter:image" content="/assets/images/tesfadan.com.png" />
            <meta name="twitter:site" content="@tesfadan" />
            <meta name="twitter:creator" content="@tesfadan" />

            {/* Open Graph metadata*/}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            <meta property="og:description" content="I am a Designer and Front End Developer with experience building websites and web applications with JavaScript, HTML, SCSS, and React." />
            <meta property="og:image" content="/assets/images/tesfadan.com.png" />
            <meta property="og:url" content="PERMALINK" />
            <meta property="og:site_name" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            <meta property="og:image" content="/assets/images/tesfadan.com.png" />
            <meta property="og:image:secure_url" content="/assets/images/tesfadan.com.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1920" />
            <meta property="og:image:height" content="1080" />
            <meta property="og:image:alt" content="Tesfa Demissie | Front End Developer, based in Winnipeg, MB." />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" />


        </Head>
    )
}