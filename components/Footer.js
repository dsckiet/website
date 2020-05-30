import React, { useState, useEffect } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import {
	AiOutlineMedium,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineSlack
} from "react-icons/ai";
import { FaTelegramPlane, FaSlack } from "react-icons/fa";

const FooterHead = styled.h5`
	font-family: Sen;
	font-weight: 700;
	color: #222222;
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #626262;
	margin-bottom: 0;
`;

const CopyrightWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const FooterWrapper = styled.div`
	font-family: Sen;
	ul,
	li {
		list-style: none;
		padding-left: 0;
	}

	li {
		color: #626262;
	}
`;

const SocialWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const SocialMedia = styled.a`
	text-decoration: none;
	cursor: pointer;
	svg {
		&:hover {
			transition: 0.2s all ease;
			color: #424242;
		}
		color: #4285f4;
		font-size: 28px;
		transition: 0.2s all ease;
	}
`;

const CardOutline = styled.div`
	margin-bottom: 40px;
	border: 1.2px solid #0f9d58;
	box-sizing: border-box;
	border-bottom-width: 4px;
	border-radius: 8px;
	z-index: 99;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
`;

const Iframe = styled.iframe`
	z-index: -99;
	height: 240px;
	border-radius: 8px;
	border: 0;
	width: 100% !important;
`;

const Atag = styled.a`
	text-decoration: none !important;
	color: inherit !important;
	cursor: pointer;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container pt-4 pb-4">
				<FooterHead className="mb-2">Explore</FooterHead>
				<div className="row">
					<div className="col-lg-4">
						<ul>
							<li>
								<Atag
									href="https://www.kiet.edu/"
									target="_blank"
								>
									KIET Group of Institutions
								</Atag>
							</li>
							<li>
								<Link href="/about">
									<Atag>About us</Atag>
								</Link>
							</li>
							<li>
								<Atag
									href="https://forms.gle/YFTsmarHBrW57k5N8"
									target="_blank"
									rel="noopener"
								>
									Become a member
								</Atag>
							</li>
						</ul>
					</div>
					<div className="col-lg-4">
						<ul>
							<li>
								<Link href="/guidelines">
									<Atag>Community Guidelines</Atag>
								</Link>
							</li>
							<li>
								<Link href="/team">
									<Atag>Meet the team</Atag>
								</Link>
							</li>
							<li>
								<Link href="/faqs">
									<Atag to="/faqs">FAQs</Atag>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-lg-4">
						<SocialWrapper>
							<SocialMedia
								href="https://instagram.com/dsckiet"
								target="_blank"
							>
								<AiOutlineInstagram />
							</SocialMedia>{" "}
							<SocialMedia
								href="https://twitter.com/dsckiet"
								target="_blank"
							>
								<AiOutlineTwitter />
							</SocialMedia>
							<SocialMedia
								href="https://github.com/dsckiet"
								target="_blank"
							>
								<AiOutlineGithub />
							</SocialMedia>{" "}
							<SocialMedia
								href="https://medium.com/dsckiet"
								target="_blank"
							>
								<AiOutlineMedium />
							</SocialMedia>
							<SocialMedia
								href="https://t.me/dsckiet"
								target="_blank"
							>
								<FaTelegramPlane />
							</SocialMedia>{" "}
							<SocialMedia
								href="https://app.slack.com/client/TGC5E7ZLG"
								target="_blank"
							>
								<AiOutlineSlack />
							</SocialMedia>
						</SocialWrapper>
						<Paragraph className="mt-3">
							Write to us at:{" "}
							<Atag
								href="mailto:dsckiet@gmail.com"
								target="_blank"
							>
								<b>dsckiet@gmail.com</b>
							</Atag>
						</Paragraph>
					</div>
				</div>

				<CardOutline className="mt-4">
					<Iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890271.5846846282!2d76.92588757287956!3d29.35203146035557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xf5c6d6eefa89a5df!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1590538552130!5m2!1sen!2sin&zoom=15"
						allowfullscreen=""
						aria-hidden="false"
						tabindex="0"
						title="DSC KIET"
					></Iframe>
				</CardOutline>

				<CopyrightWrapper className="mt-4">
					<div>
						<img src="static/images/dsc_main.png" alt="dsckiet" width="240px" />
					</div>
					<div>
						<Paragraph>
							&copy; copyright 2020 DSC KIET - Developed by
							<Atag href="https://dsckiet.com">
								<b>DSC KIET</b>
							</Atag>
						</Paragraph>
					</div>
				</CopyrightWrapper>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
