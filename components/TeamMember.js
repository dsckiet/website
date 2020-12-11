import React from "react";
import Image from "next/image";
import { AiOutlineLink, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const TeamMember = ({ member }) => {
	return (
		<div className="flex p-2 items-center mini:space-x-4 space-x-8">
			<div className="flex p-0.5 border-2 border-gray-300 rounded-full transition-all duration-200 ease-in hover:border-3 hover:border-blue-dsc">
				<Image
					loading="lazy"
					className="rounded-full transition-all duration-200 ease-in transform hover:scale-95"
					width={84}
					height={84}
					layout="intrinsic"
					src={`/${member.image}`}
					alt={member.name}
				/>
			</div>
			<div className="flex flex-col flex-1 space-y-2 self-start">
				<h3 className="font-bold text-blue-dsc">{member.name}</h3>
				<p className="text-base">
					{member.role ? member.role : "Volunteer"}
				</p>
				<div className="flex space-x-4">
					<a
						className="hover:text-blue-dsc"
						href={member.other_url}
						target="_blank"
					>
						<AiOutlineLink className="h-5 w-5" />
					</a>
					<a
						className="hover:text-blue-dsc"
						href={member.github}
						target="_blank"
					>
						<AiFillGithub className="h-5 w-5" />
					</a>
					<a
						className="hover:text-blue-dsc"
						href={member.linkedin}
						target="_blank"
					>
						<AiFillLinkedin className="h-5 w-5" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
