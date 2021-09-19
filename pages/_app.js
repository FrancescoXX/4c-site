import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="4C: The Cool Community for Content Creators where creators from across platforms come together to grow and learn together as a community."
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
