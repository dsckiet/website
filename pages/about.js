import Layout from "../components/Layout";
import AboutSection from "../components/About";

const About = (props) => (
	<Layout >
		<AboutSection mode={props.mode} />
	</Layout>
);

export default About;
