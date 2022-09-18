import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import config from "../utils/config";
import SEO from "./Seo";

const Layout =(props) => 
{
return(
	<div>
		<SEO metaData={config} />
		<script>
			{(console.log = console.warn = console.error = () => {})}
		</script>
		<Navbar mode={props.mode} toggleDark={props.toggleDark} />
		<div className="container">{props.children}</div>
		<Footer mode={props.mode} />
	</div>
)};

export default Layout;
