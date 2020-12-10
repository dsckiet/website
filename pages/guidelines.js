// import Layout from "../components/Layout";
// import styled from "styled-components";
// import { AiOutlineTags } from "react-icons/ai";

// const Heading = styled.h3`
// 	font-family: Sen;
// 	font-weight: 700;
// 	color: #424242;
// `;

// const Paragraph = styled.p`
// 	font-family: Sen;
// 	font-size: 16px;
// 	color: #707070;
// 	margin-top: 16px;
// 	margin-bottom: 40px;
// 	svg {
// 		color: #424242;
// 		font-size: 20px;
// 	}
// `;

const Guidelines = ({ guidelines }) => (
	// <Layout>
	// 	<div className="mb-5 mt-5">
	// 		<Heading>Community Guidelines</Heading>
	// 		<div className="mt-4">
	// 			{guidelines.map(rule => (
	// 				<Paragraph>
	// 					<AiOutlineTags /> {rule}
	// 				</Paragraph>
	// 			))}
	// 		</div>
	// 	</div>
	// </Layout>
	<></>
);

// export async function getStaticProps() {
// 	const data = await import(
// 		"../public/static/data/community-guidelines.json"
// 	);
// 	return {
// 		props: {
// 			guidelines: data.default
// 		}
// 	};
// }

export default Guidelines;
