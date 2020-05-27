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

const Card = styled.div`
	margin-bottom: 40px;
	padding: 40px;
	color: #ffffff;
	align-items: center;
	background: ${props => {
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
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
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

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container pt-4 pb-4">
				<FooterHead className="mb-2">Explore</FooterHead>
				<div className="row">
					<div className="col-lg-4">
						<ul>
							<li>KIET Group of Instiutions</li>
							<li>About us</li>
							<li>Become a member</li>
						</ul>
					</div>
					<div className="col-lg-4">
						<ul>
							<li>Community Guidelines</li>
							<li>Meet the team</li>
							<li>FAQs</li>
						</ul>
					</div>
					<div className="col-lg-4">
						<SocialWrapper>
							<SocialMedia>
								<AiOutlineInstagram />
							</SocialMedia>{" "}
							<SocialMedia>
								<AiOutlineTwitter />
							</SocialMedia>
							<SocialMedia>
								<AiOutlineGithub />
							</SocialMedia>{" "}
							<SocialMedia>
								<AiOutlineMedium />
							</SocialMedia>
							<SocialMedia>
								<FaTelegramPlane />
							</SocialMedia>{" "}
							<SocialMedia>
								<AiOutlineSlack />
							</SocialMedia>
						</SocialWrapper>
						<Paragraph className="mt-3">
							Write to us at: <b>dsckiet@gmail.com</b>
						</Paragraph>
					</div>
				</div>

				<CardOutline className="mt-4">
					<Iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890271.5846846282!2d76.92588757287956!3d29.35203146035557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xf5c6d6eefa89a5df!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1590538552130!5m2!1sen!2sin&zoom=15"
						allowfullscreen=""
						aria-hidden="false"
						tabindex="0"
					></Iframe>
				</CardOutline>

				<CopyrightWrapper className="mt-4">
					<div>
						<img src="static/images/dsc_main.png" width="240px" />
					</div>
					<div>
						<Paragraph>
							&copy; copyright 2020 DSC KIET - Developed by
							DSCKIET
						</Paragraph>
					</div>
				</CopyrightWrapper>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
