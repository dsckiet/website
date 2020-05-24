import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";
import {
	AiOutlineCode,
	AiOutlineRocket,
	AiOutlineCustomerService,
	AiOutlineTrophy
} from "react-icons/ai";

const SubHeading = styled.h3`
	font-family: Sen !important;
	font-weight: 700;
	color: #424242;
	margin-top: 40px;
`;

const Title = styled.h4`
	font-family: Sen !important;
	font-weight: 700;
	color: #424242;
	margin-top: 12px;
`;

const Paragraph = styled.p`
	font-family: Sen !important;
	font-size: 16px;
	color: #707070;
	margin-top: 16px;
`;

const TextBody = styled.p`
	font-family: Sen !important;
	font-size: 14px;
	color: #707070;
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

const SocialMedia = styled.div`
	border-radius: 50%;
`;

const Icon = styled.div`
	font-size: 48px;
	color: ${props => {
		switch (props.type) {
			case "red":
				return "#DB4437";
			case "blue":
				return "#1A73E8";
			case "green":
				return "#0F9D58";
			case "yellow":
				return "#F4B400";
			default:
				return "#565859";
		}
	}};
`;

const ExtLink = styled.a`
	text-decoration: none;
	font-family: Sen !important;
	margin-right: 12px;
	color: #0f9d58;
	font-weight: 700;
	font-size: 16px;
	transition: 0.2s all ease;
	&:hover {
		transition: 0.2s all ease;
		color: #4285f4;
		text-decoration: underline;
	}
`;

const Slider = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Stack = styled.div`
	font-size: 60px;
	width: 200px;
`;

const About = () => {
	return (
		<div className="container  mt-5">
			<SubHeading>What we do?</SubHeading>
			<div className="row">
				<div className="col-lg-6">
					<Paragraph>
						Google collaborates with university students who are
						passionate about growing developer communities.
						<br />
						<br />
						Developer Student Clubs powered by Google Developers is
						an initiative to help students to grow their knowledge
						on developer technologies and more through peer to peer
						workshops and events, and gain relevant industry
						experience.
					</Paragraph>
					<Button>SIGN UP</Button>
					<br />
					<br />
					<ExtLink
						href="https://developers.google.com/programs/dsc/"
						target="_blank"
					>
						Learn more about the Program
					</ExtLink>
					{/* <div>
						<SocialMedia></SocialMedia>
					</div> */}
				</div>
				<div className="col-lg-6">
					<div className="row">
						<div className="col-12 col-sm-6">
							<Icon type="red">
								<AiOutlineRocket />
							</Icon>
							<Title>Projects</Title>
							<TextBody>
								Projects with a social impact that help a lot of
								people.
							</TextBody>
						</div>

						<div className="col-12 col-sm-6">
							<Icon type="blue">
								<AiOutlineTrophy />
							</Icon>
							<Title>Hackathons</Title>
							<TextBody>
								Dream. Explore. Wonder. Build it Together.
							</TextBody>
						</div>

						<div className="col-12 col-sm-6">
							<Icon type="yellow">
								<AiOutlineCustomerService />
							</Icon>
							<Title>Webinars</Title>
							<TextBody>
								Join live coding sessions and AMAs to explore.
							</TextBody>
						</div>

						<div className="col-12 col-sm-6">
							<Icon type="green">
								<AiOutlineCode />
							</Icon>
							<Title>Bootcamps</Title>
							<TextBody>
								Learn & Implement with us in detailed bootcamps.
							</TextBody>
						</div>
					</div>
				</div>
			</div>

			<SubHeading className="mt-5">What DSC KIET does?</SubHeading>
			<div className="row">
				<div className="col-lg-6">
					<Paragraph>
						Developer Student Club KIET is inspired by Google
						Developers' Family.
						<br />
						<br />
						The motive is to create a ecosystem of programmers &
						developers in the campus by helping them to learn and
						build projects.
					</Paragraph>
					<Button>SIGN UP</Button>
					<br />
					<br />
					<ExtLink
						href="https://developers.google.com/programs/dsc/"
						target="_blank"
					>
						Learn more about the Program
					</ExtLink>
					{/* <div>
						<SocialMedia></SocialMedia>
					</div> */}
				</div>
				<div className="col-lg-6">
					<marquee scrolldelay="15" behaviour="slide" truespeed="1">
						<Slider>
							<Stack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 100 100"
									width="2em"
									height="2em"
									fill="currentColor"
									focusable="false"
									aria-hidden="true"
								>
									<g>
										<g>
											<path d="M34.3,14.3H31V8.5h-5.3v5.7h-3.3V0h3.3v6H31V0h3.3V14.3z"></path>
											<path d="M47.6,2.6h-3.8v11.7h-3.3V2.6h-3.7V0h10.8V2.6z"></path>
											<path d="M54.1,0l3.2,10h0.1l3.2-10H65v14.3h-3.3v-3.5L62,4.2l-0.1,0l-3.4,10.1h-2.2l-3.4-10l-0.1,0 l0.3,6.4v3.5h-3.3V0H54.1z"></path>
											<path d="M72.2,11.7h6.2v2.6h-9.5V0h3.3V11.7z"></path>
										</g>
										<path d="M85.6,20c-0.1,1.4-0.2,2.5-0.4,3.7c-0.4,4-0.8,8-1.1,12c-0.5,5-0.9,9.9-1.4,14.9 c-0.3,3.8-0.7,7.6-1,11.4c-0.5,5-0.9,10-1.4,15c-0.4,4.6-0.8,9.2-1.2,13.9c-0.1,0.9-0.4,1.3-1.2,1.6c-9,2.4-17.9,4.9-26.9,7.3 c-0.8,0.2-1.7,0.2-2.4,0C39.8,97.4,31,95,22.1,92.5c-0.9-0.2-1.3-0.7-1.4-1.6c-0.2-3.2-0.5-6.4-0.8-9.5c-0.4-4.9-0.9-9.7-1.3-14.6 c-0.4-3.9-0.7-7.8-1-11.6c-0.4-4.9-0.9-9.9-1.3-14.8c-0.4-4.7-0.8-9.5-1.3-14.2c-0.2-1.7-0.3-3.4-0.5-5.2c-0.1-0.7,0.1-1,0.9-1 c0.3,0,0.6,0,0.8,0c22.6,0,45.2,0,67.7,0C84.3,20,84.8,20,85.6,20z M37.3,43.5c0.7,0,1.2,0,1.7,0c10.3,0,20.6,0,30.8,0 c1,0,1.4-0.2,1.4-1.3c0-1.3,0.2-2.5,0.4-3.8c0.1-1.1,0.2-2.2,0.2-3.4c-0.6,0-1,0-1.4,0c-13.6,0-27.3,0-40.9,0c-0.2,0-0.5,0-0.7,0 c-0.6,0-0.9,0.2-0.8,0.8c0,0.4,0,0.8,0.1,1.2c0.3,3.4,0.6,6.7,0.9,10.1c0.4,4.4,0.8,8.9,1.2,13.3c0,0.3,0.5,0.6,0.8,0.8 c0.3,0.1,0.7,0,1.1,0c9.1,0,18.3,0,27.4,0c1.5,0,1.6,0,1.4,1.5c-0.3,3.1-0.6,6.2-0.9,9.3c-0.1,0.8-0.4,1.1-1.1,1.3 c-2.8,0.7-5.6,1.5-8.4,2.2c-0.4,0.1-0.8,0.1-1.1,0c-2.8-0.7-5.6-1.5-8.4-2.2c-0.8-0.2-1.1-0.7-1.2-1.5c-0.1-1.8-0.3-3.5-0.5-5.3 c0-0.3-0.4-0.8-0.6-0.8c-2.6-0.1-5.2,0-7.8,0c0,0.4,0,0.7,0,1c0.3,3.8,0.7,7.7,1,11.5c0.1,0.9,0.3,1.3,1.2,1.5 c5.2,1.4,10.4,2.9,15.6,4.3c0.8,0.2,1.7,0.2,2.5,0c5.1-1.3,10.2-2.8,15.3-4.1c1.3-0.3,1.6-1,1.7-2.2c0.2-2.4,0.4-4.8,0.6-7.2 c0.5-5.6,1-11.1,1.5-16.7c0.1-0.9-0.2-1.2-1.1-1.2c-1.4,0.1-2.8,0-4.1,0c-8.5,0-17.1,0-25.6,0c-0.6,0-1.3,0.1-1.4-0.8 C37.8,49.3,37.5,46.5,37.3,43.5z"></path>
									</g>
								</svg>
							</Stack>
							<Stack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 362.73401 511.99998"
									width="2em"
									height="2em"
									focusable="false"
									aria-hidden="true"
								>
									<g transform="translate(-74.633)">
										<path
											d="m437.367 100.62-33.046 370.199-148.543 41.181-148.134-41.123-33.011-370.257z"
											fill="currentColor"
										></path>
										<path
											d="m376.03 447.246 28.24-316.352h-148.27v349.629z"
											fill="currentColor"
										></path>
										<g fill="#ebebeb">
											<path d="m150.31 268.217 4.07 45.41h101.62v-45.41z"></path>
											<path d="m256 176.305h-.157-113.711l4.128 45.411h109.74z"></path>
											<path d="m256 433.399v-47.246l-.199.053-50.574-13.656-3.233-36.217h-24.575-21.01l6.362 71.301 93.02 25.823z"></path>
										</g>
										<path
											fill="currentColor"
											d="m160 0h55v23h-32v23h32v23h-55z"
										></path>
										<path
											fill="currentColor"
											d="m226 0h55v20h-32v4h32v46h-55v-21h32v-4h-32z"
										></path>
										<path
											fill="currentColor"
											d="m292 0h55v20h-32v4h32v46h-55v-21h32v-4h-32z"
										></path>
										<path
											d="m311.761 313.627-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194 8.198-91.912h-113.754v45.411h63.988l-4.132 46.501h-59.856v45.41z"
											fill="#fff"
										></path>
									</g>
								</svg>
							</Stack>
							<Stack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 197 170"
									width="2em"
									height="2em"
									fill="currentColor"
									focusable="false"
									aria-hidden="true"
								>
									<polygon
										fill="currentColor"
										points="98.16 102.01 42.1757011 5.09911711 39.23 0 0 0 2.94507611 5.10107823 98.16 170.02 196.32 0 157.06 0"
									></polygon>
									<polygon
										fill="currentColor"
										points="98.16 29.0371525 81.35 2.009956e-14 75.5 2.009956e-14 -6.81139173e-16 2.009956e-14 2.94 5.1 78.4487095 5.1 98.16 39.26 117.879366 5.1 193.38 5.1 196.325 0 120.82 7.80656356e-15 114.973219 2.009956e-14"
									></polygon>
								</svg>
							</Stack>
							<Stack>
								<svg
									viewBox="0 0 774 875.7"
									width="2em"
									height="2em"
									fill="#fff"
									focusable="false"
									aria-hidden="true"
								>
									<path
										fill="#f6f6f6"
										d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z"
									></path>
									<path
										fill="currentColor"
										d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"
									></path>
									<path
										fill="currentColor"
										d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"
									></path>
								</svg>
							</Stack>
							<Stack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									width="2em"
									height="2em"
									fill="currentColor"
									focusable="false"
									aria-hidden="true"
								>
									<path d="M25 10.6l2.7-2.4c.7-1.1 1.1-2.4 1.1-3.8v-.3c0-.3-.1-.6-.2-.8-.5-1-1.4-1.7-2.5-2.1-1-.7-2.8-1-5.4-1.1-2.9.4-5.7 1.1-8.3 2.2-1 .7-2.1 1.4-3.2 2v.2c.1 0 .2-.1.3-.1.1 0 .2 0 .2.1l.2-.1h.1v.1s-.1.2-.5.4-1 .7-1.8 1.3l.3.2-.2-.1c0 .1-.1.1-.3.1v.1l.2.3c-.1 0-.2 0-.3-.1-.6.1-1.1.5-1.4 1v.4c.2-.2.4-.4.7-.6V7.8h-.1l-.2.1V8l.2.3v.1c.1-.2.2-.3.3-.4l.3-.3.2-.2.2-.2.1-.1.5-.3c.3.1.4.2.4.3h.2c1.5-1.1 3.1-2 4.8-2.6v.2c-.1.2-.3.4-.4.5-.1.1-.1.1-.2.1 0 .1.1.3.2.4-.6 1.9-1.3 3.7-2.2 5.4-2.3 6-5 11.8-8.1 17.4 0 .1.1.2.1.3l.3-.1c.3-.1.5-.2.7-.3h.1v.2h.2l.2-.1h.2v.4c-.1.2-.2.5-.3.7-.3.5-.6 1-.7 1.6v.1H4l.3-.4c.7-.8 1.3-1.6 1.7-2.5l1-.3c.7-.2 1.3-.4 1.8-.6l.2-.1c1-.4 2-.8 3-1.3 1.1 0 2.3-.4 3.2-1.1V25l-.5.2h-.1V25c.8-.1 1.5-.3 2.1-.7 2-1.5 3.5-2.6 4.5-3.3 3.1-2.3 4.6-4.5 4.5-6.6-.5-.8-1.1-1.6-1.8-2.2l-.3-.4c0-.2.4-.6 1.4-1.2zm-4.8 7.6l-2.8 2.2c-1.1.7-2.2 1.4-3.3 2-1.8 1.1-3.7 2-5.7 2.7-.1 0-.3.1-.4.1h-.1c.1-.4 1.6-3.3 4.4-8.9 2-.3 4-.9 5.8-1.7l.7-.1c1.1-.2 2.2.1 3 .8v.4c-.5 1.4-1 2.2-1.6 2.5zm1.7-9.1c-.7.7-1.5 1.3-2.4 1.8-1.6.5-3.2 1.1-4.7 1.9-.1 0-.1 0-.2-.1h-.3v-.2c0-.5.2-1.1.5-1.5.2-1.1.4-1.8.7-1.9L17.8 4c0-.3.5-.6 1.5-.7h.3v.3c1-.2 1.6-.2 1.8-.2 1.7-.2 2.6.2 2.8.9v.2h.2v-.7h.2c.4.2.7.5.8.9v.2c0 .4-.2.8-.5 1.1-.1 0-.2-.1-.2-.3h-.2v.6c-.9 1.4-1.6 2.1-2 2.1-.3.4-.5.6-.6.7z"></path>
								</svg>
							</Stack>
							<Stack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 100 100"
									width="2em"
									height="2em"
									fill="currentColor"
									focusable="false"
									aria-hidden="true"
								>
									<path d="M0,100C0,66.7,0,33.3,0,0c33.3,0,66.7,0,100,0c0,33.3,0,66.7,0,100C66.7,100,33.3,100,0,100z M59.5,82.4c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.2,0.1,0.3c1.4,2.5,3.3,4.6,5.7,6.2c2.6,1.7,5.5,2.6,8.6,2.9c3.2,0.3,6.3,0.1,9.3-0.9 c3-1,5.6-2.8,7.2-5.6c1.3-2.2,1.7-4.7,1.6-7.2c-0.1-3.9-1.6-7.1-4.7-9.6c-2.2-1.8-4.7-3-7.3-4.1c-1.8-0.8-3.6-1.5-5.3-2.4 c-0.8-0.4-1.5-0.9-2.1-1.5c-1.7-1.6-1.7-5.7,1.8-6.7c2.3-0.6,4.4-0.2,6.1,1.6c0.5,0.5,0.9,1.2,1.3,1.8c0.1,0.1,0.2,0.2,0.3,0.4 c2.4-1.6,4.8-3.1,7.2-4.6c0-0.1,0-0.1,0-0.1c-1.6-2.7-3.6-5-6.6-6.2c-3.6-1.5-7.3-1.6-11.1-0.6c-5.7,1.4-9.2,5.9-9.3,11.7 c-0.1,4.9,1.8,8.7,5.9,11.4c1.6,1,3.3,1.9,5,2.7c2,1,4.1,1.8,6.1,2.8c0.8,0.4,1.5,0.9,2.2,1.5c1.2,1.1,1.4,2.5,1.1,4 c-0.4,1.7-1.6,2.7-3.1,3.2c-2.3,0.8-4.6,0.7-6.8-0.1c-2.3-0.8-3.9-2.5-5.2-4.5c-0.1-0.2-0.2-0.3-0.4-0.5 C64.5,79.5,62,80.9,59.5,82.4z M45,45.9c0,0.3,0,0.5,0,0.8c0,10.2,0,20.5,0,30.7c0,0.8,0,1.6-0.2,2.5c-0.3,1.6-0.9,3-2.7,3.5 c-2.9,0.8-5,0.1-6.6-2c-0.5-0.6-0.9-1.3-1.3-2c-0.1-0.1-0.2-0.3-0.3-0.5c-2.5,1.5-5.1,3.1-7.6,4.6c0,0.1,0.1,0.2,0.1,0.3 c1.5,3.1,3.8,5.5,7,6.9c4.2,1.8,8.5,1.9,12.8,0.5c3.6-1.2,6-3.7,7.3-7.3c0.7-2,0.9-4.2,0.9-6.3c0-10.3,0-20.7,0-31 c0-0.2,0-0.4,0-0.6C51.2,45.9,48.1,45.9,45,45.9z"></path>
								</svg>
							</Stack>
							<Stack>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="85.9 187.8 432.9 385.7"
									width="2em"
									height="2em"
									focusable="false"
									aria-hidden="true"
								>
									<ellipse
										fill="none"
										stroke="currentColor"
										stroke-width="20"
										stroke-miterlimit="10"
										cx="302.3"
										cy="380.6"
										rx="208.4"
										ry="79.4"
									></ellipse>
									<circle
										fill="currentColor"
										cx="301.7"
										cy="380.3"
										r="38.2"
									></circle>
									<ellipse
										transform="matrix(-0.866 0.5 -0.5 -0.866 754.3541 559.2014)"
										fill="none"
										stroke="currentColor"
										stroke-width="20"
										stroke-miterlimit="10"
										cx="302.3"
										cy="380.7"
										rx="79.4"
										ry="208.4"
									></ellipse>
									<ellipse
										transform="matrix(0.866 0.5 -0.5 0.866 230.8506 -100.1878)"
										fill="none"
										stroke="currentColor"
										stroke-width="20"
										stroke-miterlimit="10"
										cx="302.4"
										cy="380.7"
										rx="79.4"
										ry="208.4"
									></ellipse>
								</svg>
							</Stack>
						</Slider>
					</marquee>
				</div>
			</div>
		</div>
	);
};

export default About;
