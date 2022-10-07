import "../styles/global.css";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { GTMPageView } from "../utils/gtm";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <div>
      <Head>
        {/* <link rel="icon" href="/icon-192x192.png" /> */}
        <meta
          name="description"
          content="4C: The Cool Community for Content Creators"
        />
      </Head>

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
