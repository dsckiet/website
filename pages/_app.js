import { register, unregister } from "next-offline/runtime";
import React from "react";
import Router from "next/router";
// import * as gtag from "../utils/gtag";
import "../styles/tailwind.css";
import "tailwindcss/utilities.css";
import "../styles/global.css";

export default class MyApp extends React.Component {
	componentDidMount() {
		register();
	}
	componentWillUnmount() {
		unregister();
	}

	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		register();

		return () => {
			unregister();
		};
	}, []);

	useEffect(() => {
		setHasMounted(true);

		const handleRouteChange = url => {
			// gtag.pageview(url);
		};
		Router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

	if (!hasMounted) return <></>;
	return (
		<Layout darkMode={darkMode.value} toggle={darkMode}>
			<Component {...pageProps} darkMode={darkMode.value} />
		</Layout>
	);
}
