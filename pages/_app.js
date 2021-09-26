import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icon-192x192.png"/>
        <meta
          name="description"
          content="4C: The Cool Community for Content Creators"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
