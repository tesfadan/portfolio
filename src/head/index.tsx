import Head from "next/head";
import { GA_TRACKING_ID } from "./gtag";

export default function DefaultHeadTags() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tesfadan.com";
  const socialImageUrl = `${siteUrl}/assets/images/tesfadan.com.png`;
  const meta = {
    title: "Tesfa Demissie | Design Engineer",
    description: "I build digital experiences with strong taste and production-level execution."
  };

  return (
    <Head>
      {GA_TRACKING_ID && (
        <>
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
        </>
      )}

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/assets/icons/icon.svg" type="image/svg+xml" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/assets/icons/apple-icon.png" />
      <link rel="canonical" href={siteUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:site" content="@tesfadan" />
      <meta name="twitter:creator" content="@tesfadan" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Tesfa Demissie" />
      <meta property="og:image:secure_url" content={socialImageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1512" />
      <meta property="og:image:height" content="856" />
      <meta property="og:image:alt" content={meta.title} />
    </Head>
  );
}
