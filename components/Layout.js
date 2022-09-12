import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import config from "../utils/config";
import SEO from "./Seo";
import { useState } from "react";




const Layout = (props) =>{ 
	
	return(
		<>
	
	<div>
		<SEO metaData={config} />
		<script>
			{(console.log = console.warn = console.error = () => {})}
		</script>
		<Navbar isdark={props.isdark} toggleDark={props.toggleDark} />
		<div className="container">{props.children}</div>
		<Footer />
	</div>
	</>
)};

export default Layout;
