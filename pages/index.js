import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Notice from "../components/Notice";
import JoinSection from "../components/JoinSection";
import styled from "styled-components";

const NoticeSection = styled.div`
	display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const Index = ({ notice }) => {
	const [mode, setMode] = useState("light");
	
	return(
	<Layout>
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
