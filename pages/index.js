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
	const [isdark, setIsdark] = useState('light');
	const toggleDark=()=>{
		if(isdark==='light'){
			setIsdark('dark')
			document.body.style.backgroundColor='black'
		}
		else{
			setIsdark('light');
			document.body.style.backgroundColor='white'
		}
	}
	
    return(
	<Layout isdark={isdark} toggleDark={toggleDark} >
		<div>
			<Header isdark={isdark} />
			<NoticeSection isVisible={notice.isVisible}>
				<Notice notice={notice} />
			</NoticeSection>
			<About isdark={isdark} />
			<JoinSection isdark={isdark}/>
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
