import Header from "../components/Header";
import JoinSection from "../components/JoinSection";
import AboutSection from "../components/AboutSection";
// import Notice from "../components/Notice";

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
		<JoinSection />
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
