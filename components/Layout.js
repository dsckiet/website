import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import config from "../utils/config";
import SEO from "./Seo";

const Layout = props => (
	<div>
		<Head>
			<link rel="shortcut icon" href="static/images/favicon.png" />
		</Head>
		<SEO metaData={config} />
		<Navbar />
		<div className="container">{props.children}</div>
		<Footer />
	</div>
);

export default Layout;
