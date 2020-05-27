import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
	<div>
		<Head>
			<title>DSC KIET</title>
			<link rel="shortcut icon" href="static/images/favicon.png" />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossorigin="anonymous"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
				rel="stylesheet"
			></link>
		</Head>
		<Navbar />
		<div>{props.children}</div>
	</div>
);

export default Layout;
