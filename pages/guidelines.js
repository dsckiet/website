import { AiOutlineTags } from "react-icons/ai";

const Guidelines = ({ guidelines }) => (
	<section className="cntr py-4 mb-8">
		<h2 className="text-2xl font-extrabold text-gray-700">
			Community Guidelines
		</h2>
		<div className="flex flex-col space-y-8 mt-4">
			{guidelines.map(rule => (
				<p key={rule} className="text-base flex space-x-2">
					<AiOutlineTags className="text-xl mt-1" />{" "}
					<span className="flex-1">{rule}</span>
				</p>
			))}
		</div>
	</section>
);

export async function getStaticProps() {
	const data = await import(
		"../public/static/data/community-guidelines.json"
	);
	return {
		props: {
			guidelines: data.default
		}
	};
}

export default Guidelines;
