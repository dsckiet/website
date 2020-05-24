import Layout from "../components/Layout";
import Header from "../components/Header";

const Index = props => (
	<Layout>
		<div>
			<Header />
			{/* <Prices bpi={props.bpi} /> */}
		</div>
	</Layout>
);

// Index.getInitialProps = async function () {
// 	const res = await Fetch(
// 		"https://api.coindesk.com/v1/bpi/currentprice.json"
// 	);
// 	const data = await res.json();
// 	return {
// 		bpi: data.bpi
// 	};
// };

export default Index;
