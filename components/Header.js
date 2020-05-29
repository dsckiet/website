import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";

const Heading = styled.h2`
	font-family: Sen !important;
	font-weight: 700;
	color: #424242;
	margin-top: 120px;
`;

const SubText = styled.p`
	font-family: Sen !important;
	font-size: 18px;
	color: #707070;
	margin-top: 16px;
`;

const Button = styled.a`
	text-decoration: none !important;
	font-family: Sen;
	cursor: pointer;
	/* margin-top: 40px; */
	font-weight: 700;
	padding: 12px 32px;
	border-radius: 4px;
	background: #4285f4;
	border: none !important;
	font-size: 16px;
	color: #fff !important;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const LottieImage = styled.div`
	@media (max-width: 768px) {
		/* display: none; */
		position: absolute;
		z-index: -99;
		opacity: 0.4;
		/* right: -120px; */
		overflow-x: hidden;
	}
`;

const Header = () => {
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
			<div className="row mt-5 pb-5 mb-5">
				<div className="col-lg-1"></div>
				<div className="col-lg-5">
					<Heading>
						Developer Student Clubs KIET Group of Institutions
					</Heading>
					<SubText className="mb-4">
						powered by <b>Google Developers</b>
					</SubText>
					<Button
						href="https://forms.gle/YFTsmarHBrW57k5N8"
						target="_blank"
					>
						Become a member
					</Button>
				</div>
				<LottieImage className="col-lg-5">
					<Lottie options={defaultOptions} height={400} width={400} />
				</LottieImage>
				<div className="col-lg-1"></div>
			</div>
		</div>
	);
};

export default Header;
