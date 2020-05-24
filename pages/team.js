import Layout from "../components/Layout";
import Team from "../components/Team";

const TeamPage = props => (
	<Layout>
		<div>
			<Team />
			{/* <Prices bpi={props.bpi} /> */}
		</div>
	</Layout>
);

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
