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
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
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
		<div className="container pt-5 pb-5">
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
							<Button className="mr-4" type="dark">
								<FaSlack /> Slack
							</Button>{" "}
							<Button type="dark">
								<FaTelegramPlane /> Telegram
							</Button>
						</ButtonGroup>
					</Card>
				</div>

				<div className="col-12 col-sm-12 col-md-6">
					<CardOutline>
						<CardTitle>Subscribe to our newsletter</CardTitle>
						<Paragraph>
							Join our Slack Channel to know more about the
							Activities, Sessions and other fun stuff.
						</Paragraph>
						<InputWrapper>
							<Input
								placeholder="EMAIL ADDRESS"
								className="form-control mr-4"
							/>
							<Button type="dark">Subscribe</Button>
						</InputWrapper>
					</CardOutline>
				</div>
			</div>
			{/* <Card className="p-5 mb-5">
                
				<div className="notice-info">
					<NoticeTitle>May 25th, 2020</NoticeTitle>
					<Paragraph>07:00 PM, E-Block, CSE Dept.</Paragraph>
				</div>
				<div className="notice-head">
					<NoticeHeading>Lorem ipsum dolor sit amet.</NoticeHeading>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quam magnam incidunt facere odit nesciunt. Sapiente
						eligendi cupiditate rem cum debitis corrupti ratione.
					</Paragraph>
				</div>
				<div>
					<Button>Register</Button>
				</div>
			</Card> */}
		</div>
	);
};

export default JoinSection;
