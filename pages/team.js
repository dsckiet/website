import Layout from "../components/Layout";
import Team from "../components/Team";

const TeamPage = props => (
	<Layout>
		<div>
			<Team team={props.team} />
			{/* <Prices bpi={props.bpi} /> */}
		</div>
	</Layout>
);

export async function getStaticProps() {
	const data = await import("../public/static/data/team.json");
	return {
		props: {
			team: data.default
		}
	};
}
// Team.getInitialProps = async function () {
// 	const res = await Fetch(
// 		"https://api.coindesk.com/v1/bpi/currentprice.json"
// 	);
// 	const data = await res.json();
// 	return {
// 		bpi: data.bpi
// 	};
// };

export default TeamPage;
