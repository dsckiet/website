import "bootstrap/dist/css/bootstrap.min.css";
import "../components/main.css";
import { register, unregister } from "next-offline/runtime";
import React from "react";
import "./Accordian.css";
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
