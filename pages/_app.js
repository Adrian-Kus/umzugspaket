import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import "@/app/globals.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const tagManagerArgs = { gtmId };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  const router = useRouter();
  const canonicalUrl = (
    `https://pakete.schenck-hansen.de` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
