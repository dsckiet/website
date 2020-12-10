import { register, unregister } from "next-offline/runtime";
import React, { useEffect } from "react";
import Router from "next/router";
// import * as gtag from "../utils/gtag";
import "../styles/tailwind.css";
import "tailwindcss/utilities.css";
import "../styles/global.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		register();

		return () => {
			unregister();
		};
	}, []);

	useEffect(() => {
		const handleRouteChange = url => {
			// gtag.pageview(url);
		};
		Router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
