import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import config from "../utils/config";
// import SEO from "./Seo";

const Layout = props => (
	<>
		{/* <SEO metaData={config} /> */}
		<Navbar />
		<main className="mt-8">{props.children}</main>
		<Footer />
	</>
);

export default Layout;
