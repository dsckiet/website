const FAQs = ({ faqs }) => (
	<section className="cntr py-4 mb-8">
		<h2 className="text-3xl font-extrabold text-gray-700">FAQs</h2>
		<div className="flex flex-col space-y-8 mt-4">
			{faqs.map(({ query, response }) => (
				<div key={query}>
					<h3 className="text-xl font-bold text-gray-700">{query}</h3>
					<p className="text-base">{response}</p>
				</div>
			))}
		</div>
	</section>
);

export async function getStaticProps() {
	const data = await import("../public/static/data/faqs.json");
	return {
		props: {
			faqs: data.default
		}
	};
}

export default FAQs;
