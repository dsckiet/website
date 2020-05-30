import React from "react";
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
	margin-bottom: 4px;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 50%;
	padding: 4px;
	border: 2px solid #d5d5d5;
	transition: 0.2s all ease-out;
	&:hover {
		transition: 0.2s all ease-in;
		border: 4px solid #4285f4;
	}
`;

const Social = styled.a`
	text-decoration: none;
	margin-right: 12px;
	color: #565859;
	font-size: 20px;
	&:hover {
		color: #4285f4;
	}
`;

const TeamMember = ({ member }) => {
	return (
		<div className="col-lg-4 mb-5">
			<div className="row mb-2">
				<div className="col-4">
					<Image
						loading="lazy"
						src={member.image}
						alt={member.name}
					/>
				</div>
				<div className="col-8">
					<Name>{member.name}</Name>
					<Role>{member.role ? member.role : "Volunteer"}</Role>
					<div>
						<Social href={member.other_url} target="_blank">
							<AiOutlineLink />
						</Social>
						<Social href={member.github} target="_blank">
							<AiFillGithub />
						</Social>
						<Social href={member.linkedin} target="_blank">
							<AiFillLinkedin />
						</Social>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
