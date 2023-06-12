"use client";
import Head from "next/head";
import Hero from "@/app/components/Hero.js";
import Reviews from "@/app/components/Reviews.js";
import Introduction from "@/app/components/Introduction.js";
import Packages from "@/app/components/Packages.js";
import Questions from "@/app/components/Questions.js";
import CallToAction from "@/app/components/CallToAction.js";
import Text from "@/app/components/Text.js";
import { LayoutGroup } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Schenck & Hansen | Umzugspakete</title>
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
        <Hero />
        <Reviews />
        <Introduction />
        <Packages />

        <LayoutGroup>
          <AnimatePresence>
            <motion.div layout>
              <Questions />
            </motion.div>
            <motion.div layout>
              <CallToAction />
              <Text />
              <CallToAction />
              <Reviews />
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </main>
    </>
  );
}
