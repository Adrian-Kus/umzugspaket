import Head from "next/head";
import ContactForm from "@/app/contact/components/ContactForm.js";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Schenck & Hansen | Kontaktformular</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001e3e" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#001e3e" />
        <link rel="stylesheet" href="https://use.typekit.net/xnb3ykb.css" />
      </Head>
      <main>
        <ContactForm />
      </main>
    </>
  );
}
