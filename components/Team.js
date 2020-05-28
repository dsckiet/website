import React, { useState, useEffect } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";
import Member from "./TeamMember";
import TEAM from "../public/static/data/team.json";
import TeamMember from "./TeamMember";

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

const Button = styled.button`
	font-family: Sen;
	margin-top: 16px;
	font-weight: 700;
	padding: 8px 32px;
	border-radius: 4px;
	background: #4285f4;
	border: none;
	font-size: 16px;
	color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Team = ({ theme, toggleTheme }) => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		setTeam(TEAM);
	}, []);

	return (
		<div>
			<div className="row mt-5">
				<div className="col-lg-1"></div>
				<div className="col-lg-6">
					<Heading>Team</Heading>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Porro modi possimus aspernatur fuga totam impedit
						aut non. Voluptas veritatis explicabo ratione accusamus
						nam saepe maxime laborum illo minus officiis, atque
						suscipit? Odio vero, aspernatur deserunt, voluptatibus
						tempora dicta accusamus voluptatem fugiat doloribus ut
						recusandae eos numquam.
					</Paragraph>
				</div>
				<div className="col-lg-4">
					<img
						className="img-fluid mb-1"
						src="static/images/team.png"
						alt="logo"
						width="100%"
					/>
				</div>
				<div className="col-lg-1"></div>
			</div>
			<div className="row mt-5">
				{team
					? team.map(member => <TeamMember member={member} />)
					: null}
			</div>
		</div>
	);
};

export default Team;
