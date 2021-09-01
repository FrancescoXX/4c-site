import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
			<Head />
				<body>

					{/* Google Tag Manager */}
					<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
					height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
					{/* Google Tag Manager */}

					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

