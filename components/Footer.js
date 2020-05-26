import React, { useState, useEffect } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const NoticeTitle = styled.h4`
	font-family: Sen;
	font-weight: 700;
	color: #121212;
`;

const NoticeHeading = styled.h5`
	font-family: Sen;
	font-weight: 700;
	color: #121212;
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #707070;
	margin-bottom: 0;
`;

const Button = styled.button`
	font-family: Sen;
	font-weight: 700;
	padding: 8px 32px;
	border-radius: 4px;
	background: #4285f4;
	border: none;
	font-size: 16px;
	color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
	div {
		align-items: center;
	}
	.notice-head {
		max-width: 600px;
	}
`;

const CopyrightWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Footer = () => {
	return (
		<div className="container pt-5 pb-5">
			<div className="row">
				<div className="col-12 col-sm-6 col-md-3">
					{/* <ul>
						<li>dj</li>
					</ul> */}
				</div>
			</div>
			<hr />
			<CopyrightWrapper>
				<div>
					<img src="static/images/dsc_main.png" width="240px" />
				</div>
				<div>
					<Paragraph>
						&copy; copyright 2020 DSC KIET - Developed by DSCKIET
					</Paragraph>
				</div>
			</CopyrightWrapper>
		</div>
	);
};

export default Footer;
