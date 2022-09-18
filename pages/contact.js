import Layout from "../components/Layout";
import JoinSection from "../components/JoinSection";
import { useState } from "react";
const About = () => {
	const [mode, setMode] = useState("light");
	const toggleDark=()=>{
		if (mode==="light"){
			setMode('dark');
			// document.body.style.backgroundColor="black"
		}
		else{
			setMode('light');
			// document.body.style.backgroundColor="white"
		}

	}
	return(
	<Layout  mode={mode} toggleDark={toggleDark}>
		<JoinSection />
	</Layout>
)};

export default About;
