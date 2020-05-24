import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Name = styled.h4`
	font-family: Sen;
	font-weight: 700;
	color: #4285f4;
	font-size: 16px;
`;

const Role = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #707070;
	/* margin-top: 16px; */
`;

const Image = styled.img`
	width: 100%;
	border-radius: 50%;
	padding: 4px;
	border: 4px solid #424242;
`;

const TeamMember = ({ member }) => {
	return (
		<div className="col-lg-4 mb-5">
			<div className="row">
				<div className="col-4">
					<Image src="https://dsckiet-backend.herokuapp.com/uploads/team/aakash.jpeg" />
				</div>
				<div className="col-8">
					<Name>{member.name}</Name>
					<Role>{member.role ? member.role : "Volunteer"}</Role>
					<div>
						<a href="#">
							<AiOutlineLink />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
