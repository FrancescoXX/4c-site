import "../styles/global.css";
import Head from 'next/head';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
		<div>
			<Head>

				{/* Google Tag Manager */}
				<script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-XXXXXXX');`}}></script>
				{/* Google Tag Manager */}

				<meta name='description' content='4C: The Cool Community for Content Creators' />
			</Head>
			<Component {...pageProps} />;
		</div>
	)
}

export default MyApp;
