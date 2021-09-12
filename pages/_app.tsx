import "../styles/global.css";

import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { ReactElement } from "react";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="4C: The Cool Community for Content Creators"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}