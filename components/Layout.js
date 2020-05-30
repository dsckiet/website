import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import config from "../utils/config";
import SEO from "./Seo";

const Layout = props => (
	<div>
		<SEO metaData={config} />
		<script>
			{(console.log = console.warn = console.error = () => {})}
		</script>
		<Navbar />
		<div className="container">{props.children}</div>
		<Footer />
	</div>
);

export default Layout;
