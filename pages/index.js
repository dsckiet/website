import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Notice from "../components/Notice";
import JoinSection from "../components/JoinSection";
import styled from "styled-components";
import { useState } from "react";

const NoticeSection = styled.div`
	display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const Index = ({ notice }) => {
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
	<Layout mode={mode} toggleDark={toggleDark}>
		<div>
			<Header />
			<NoticeSection isVisible={notice.isVisible}>
				<Notice notice={notice} />
			</NoticeSection>
			<About />
			<JoinSection />
		</div>
	</Layout>
)};

export async function getStaticProps() {
	const data = await import("../public/static/data/notice.json");
	return {
		props: {
			notice: data.default.notice
		}
	};
}

export default Index;
