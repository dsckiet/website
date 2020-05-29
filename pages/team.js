import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import TeamMember from "../components/TeamMember";

const Heading = styled.h2`
	font-family: Sen;
	font-weight: 700;
	color: #424242;
	margin-top: 40px;
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #707070;
	margin-top: 16px;
`;

const ImageWrapper = styled.div`
	@media (max-width: 768px) {
		/* display: none; */
		position: absolute;
		z-index: -99;
		opacity: 0.2;
		right: -120px;
		overflow-x: hidden;
		/* img {
			width: 50%;
		} */
	}
`;

const TeamPage = ({ team }) => (
	<Layout>
		<div>
			<div className="">
				<div className="row mt-5">
					<div className="col-lg-1"></div>
					<div className="col-lg-6">
						<Heading>Team</Heading>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Porro modi possimus aspernatur fuga totam
							impedit aut non. Voluptas veritatis explicabo
							ratione accusamus nam saepe maxime laborum illo
							minus officiis, atque suscipit? Odio vero,
							aspernatur deserunt, voluptatibus tempora dicta
							accusamus voluptatem fugiat doloribus ut recusandae
							eos numquam.
						</Paragraph>
					</div>
					<ImageWrapper className="col-lg-4">
						<img
							className="img-fluid mb-1"
							src="static/images/team.png"
							alt="logo"
							width="100%"
						/>
					</ImageWrapper>
					<div className="col-lg-1"></div>
				</div>
				<div className="row mt-5">
					{team
						? team.map((member, i) => (
								<TeamMember key={i} member={member} />
						  ))
						: null}
				</div>
			</div>
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

export default TeamPage;
