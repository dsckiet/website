import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Notice from "../components/Notice";
import JoinSection from "../components/JoinSection";

const Index = props => (
	<Layout>
		<div>
			<Header />
			<Notice />
			<About />
			<JoinSection />
		</div>
	</Layout>
);

export default Index;
