import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";

const Heading = styled.h2`
	font-family: Sen;
	font-weight: 700;
	color: #424242;
	margin-top: 120px;
`;

const SubText = styled.p`
	font-family: Sen;
	font-size: 18px;
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
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-lg-1"></div>
				<div className="col-lg-5">
					<Heading>
						Developer Student Clubs KIET Group of Institutions
					</Heading>
					<SubText>powered by Google Developers</SubText>
					<Button>Become a member</Button>
				</div>
				<div className="col-lg-5">
					<Lottie options={defaultOptions} height={400} width={400} />
				</div>
				<div className="col-lg-1"></div>
			</div>
		</div>
	);
};

export default Team;
