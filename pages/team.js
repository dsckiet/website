import React from "react";
import Image from "next/image";
import TeamMember from "../components/TeamMember";

const TeamPage = ({ team }) => (
	<>
		<section className="cntr py-4 flex justify-around items-center">
			<div className="flex flex-col md:max-w-md">
				<h2 className="text-3xl font-bold text-gray-700">Team</h2>
				<p className="text-base">
					We are a group of excited people with a clear sense of
					purpose. We believe in continuous learning and development.
					We are adaptive to upcoming challenges in technology and
					management. We learn, code, preach, and grow together. Here
					at DSC KIET, we are not just a team, we are a growing family
					of developers.
				</p>
			</div>
			<div className="max-w-md hidden md:block">
				<Image
					className="object-contain"
					src="/static/images/team.png"
					alt="team at dsc kiet"
					width={289}
					height={244}
					layout="fixed"
				/>
			</div>
		</section>
		<section className="cntr py-4 mb-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
			{team
				? team.map((member, i) => (
						<TeamMember key={i} member={member} />
				  ))
				: null}
		</section>
	</>
);

export async function getStaticProps() {
	const data = await import("../public/static/data/team.json");
	return {
		props: {
			team: data.default
		}
	};
}

export default TeamPage;
