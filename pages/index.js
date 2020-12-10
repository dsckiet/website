import Header from "../components/Header";
// import Notice from "../components/Notice";
// import JoinSection from "../components/JoinSection";
// import styled from "styled-components";

import AboutSection from "../components/AboutSection";

// const NoticeSection = styled.div`
// 	display: ${({ isVisible }) => (isVisible ? "block" : "none")};
// `;

const Index = ({ notice }) => (
	<>
		<Header />
		{/* <NoticeSection isVisible={notice.isVisible}>
			<Notice notice={notice} />
		</NoticeSection> */}
		<AboutSection />
		{/* <JoinSec/tion /> */}
	</>
);

// export async function getStaticProps() {
// 	const data = await import("../public/static/data/notice.json");
// 	return {
// 		props: {
// 			notice: data.default.notice
// 		}
// 	};
// }

export default Index;
