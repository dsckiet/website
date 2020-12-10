import Document, { Html, Head, Main, NextScript } from "next/document";
// import { GA_TRACKING_ID } from "../utils/gtag";
export default class MyDocument extends Document {
	render() {
		const GA_TRACKING_ID = "UA-133730372-2";
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
						rel="stylesheet"
					/>

					{/* <script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
						}}
					/> */}
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
