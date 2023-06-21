"use client";
import "./globals.css";
import Navbar from "@/app/components/Navbar.js";
import Footer from "@/app/components/Footer.js";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const tagManagerArgs = { gtmId };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
