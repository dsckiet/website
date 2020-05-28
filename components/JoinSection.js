import React, { useState, useEffect } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";
import { FaTelegramPlane, FaSlack } from "react-icons/fa";

const CardTitle = styled.h4`
	font-family: Sen;
	font-weight: 700;
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 14px;
	opacity: 0.8;
	margin-bottom: 0;
`;

const Button = styled.button`
	font-family: Sen;
	font-weight: 700;
	padding: 8px 32px;
	border-radius: 4px;
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
			case "dark":
				return "#222222";
			default:
				return "#565859";
		}
	}};
	border: none;
	font-size: 16px;
	color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
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
	padding: 40px;
	color: #424242;
	align-items: center;
	border: 1.2px solid #db4437;
	box-sizing: border-box;
	border-bottom-width: 4px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
`;

const Input = styled.input`
	border: 0.8px solid #424242;
	box-sizing: border-box;
	border-bottom-width: 2.4px;
	font-family: Sen;
	font-weight: 700;
	&:active,
	&:focus {
		border-color: #db4437;
		border-right-width: 2.4px;
		border-bottom-width: 3.6px;
		box-shadow: 0 0 0 0.2rem rgba(219, 68, 55, 0.25);
	}
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 20px;
	align-items: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	align-items: center;
`;

const Hashtag = styled.span`
	font-weight: 900;
	opacity: 1 !important;
	color: #ffffff;
`;

const JoinSection = () => {
	return (
		<div className="pt-5 pb-5">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-6">
					<Card type="red">
						<CardTitle>Join the workspace</CardTitle>
						<Paragraph>
							Join our Slack and Telegram Channels get instant
							updates about our <Hashtag>#activities</Hashtag>,{" "}
							<Hashtag>#sessions</Hashtag> and other fun stuff.
						</Paragraph>
						<ButtonGroup>
							<Button
								onClick={() =>
									window.open(
										"https://join.slack.com/t/dsckiet/shared_invite/zt-ef1q4txj-D77khvaZVgBP2CyH2MQHLA",
										"_blank"
									)
								}
								className="mr-4"
								type="dark"
							>
								<FaSlack /> Slack
							</Button>{" "}
							<Button
								onClick={() =>
									window.open(
										"https://t.me/dsckiet",
										"_blank"
									)
								}
								type="dark"
							>
								<FaTelegramPlane /> Telegram
							</Button>
						</ButtonGroup>
					</Card>
				</div>

				<div className="col-12 col-sm-12 col-md-6">
					<CardOutline>
						<CardTitle>Subscribe to our newsletter</CardTitle>
						<Paragraph>
							Subscribe to our newsletter to get the latest
							updates about our events and hacks right in your
							inbox.
						</Paragraph>
						<form
							action="https://buttondown.email/api/emails/embed-subscribe/goelaakash79"
							method="post"
							target="popupwindow"
							onSubmit="window.open('https://buttondown.email/goelaakash79', 'popupwindow')"
							className="embeddable-buttondown-form"
						>
							<InputWrapper>
								<Input
									placeholder="email address"
									className="form-control mr-4"
									type="email"
									name="email"
									id="bd-email"
								/>
								<Input type="hidden" value="1" name="embed" />
								<Button
									type="submit"
									type="dark"
									value="Subscribe"
								>
									Subscribe
								</Button>
							</InputWrapper>
						</form>
					</CardOutline>
				</div>
			</div>
		</div>
	);
};

export default JoinSection;
