import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import config from "../utils/config";
import SEO from "./Seo";

const Layout = props => (
	<div>
		<Head>
			{/* <link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossorigin="anonymous"
			/> */}
		</Head>
		<SEO metaData={config} />
		<Navbar />
		<div className="container">{props.children}</div>
		<Footer />
	</div>
);

export default Layout;
