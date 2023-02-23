import Head from "next/head";
import { GA_TRACKING_ID } from "./gtag";

export default function DefaultHeadTags() {
    const meta = {
        title: "Tesfa Demissie | Product Designer based in Winnipeg MB",
        description: "A passionate Product Designer creating intuitive and visually stunning digital solutions that improve users' lives. I believe in designing products that are both functional and visually appealing, always keeping the user's needs at the forefront of my mind."
    }


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
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Theme and Icons  */}
            <meta name="theme-color" content="#F6F3F0" />
            <link rel="icon" href="/assets/logo.svg" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/assets/icons/apple-icon.png" />

            {/* Twitter metadata  */}
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content="/assets/images/tesfadan.com.png" />
            <meta name="twitter:site" content="@tesfadan" />
            <meta name="twitter:creator" content="@tesfadan" />

            {/* Open Graph metadata*/}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content="/assets/images/tesfadan.com.png" />
            <meta property="og:url" content="PERMALINK" />
            <meta property="og:site_name" content={meta.title} />
            <meta property="og:image" content="/assets/images/tesfadan.com.png" />
            <meta property="og:image:secure_url" content="/assets/images/tesfadan.com.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1512" />
            <meta property="og:image:height" content="977" />
            <meta property="og:image:alt" content={meta.title} />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" /> */}
        </Head>
    )
}
