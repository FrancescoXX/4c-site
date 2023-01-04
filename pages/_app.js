import '../styles/global.css';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { Poppins, Red_Hat_Display as RedHatDisplay } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

const redHatDisplay = RedHatDisplay({
  weight: ['700'],
  variable: '--font-redhat',
});

export default function App ({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${redHatDisplay.variable} font-sans`}>
      <Head>
        <meta
          name="description"
          content="4C: The Cool Community for Content Creators"
        />
      </Head>

      <AnimatePresence
        mode='wait'
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
