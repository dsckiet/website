import Layout from "../components/Layout";
import styled from "styled-components";
import { useState } from "react";

const Heading = styled.h3`
	font-family: Sen;
	font-weight: 700;
	color: #424242;
`;

const Title = styled.h5`
	font-family: Sen;
	font-weight: 700;
	/* font-size: 16px; */
	color: #424242;
	/* margin-top: 16px; */
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #707070;
	margin-top: 16px;
	margin-bottom: 40px;
`;

const FAQs = ({ faqs }) =>{
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
	return (
	<Layout mode={mode} toggleDark={toggleDark}>
		<div className="mb-5 mt-5">
			<Heading>FAQs</Heading>
			<div className="mt-4">
				{faqs.map(({ query, response }) => (
					<>
						<Title>{query}</Title>
						<Paragraph>{response}</Paragraph>
					</>
				))}
			</div>
		</div>
	</Layout>
)};

export async function getStaticProps() {
	const data = await import("../public/static/data/faqs.json");
	return {
		props: {
			faqs: data.default
		}
	};
}

export default FAQs;
