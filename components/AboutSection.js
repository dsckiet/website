import React from "react";

import {
	AiOutlineCode,
	AiOutlineRocket,
	AiOutlineCustomerService,
	AiOutlineTrophy,
	AiOutlineMedium,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineGithub
} from "react-icons/ai";

import {
	HTMLIcon,
	CSSIcon,
	JavaScriptIcon,
	ReactJSIcon,
	NodeJSIcon,
	MongoDBIcon,
	DjangoIcon,
	FlutterIcon,
	AndroidIcon
} from "./icons";

const AboutSection = () => {
	return (
		<>
			<section className="cntr space-y-2 py-4">
				<h3 className="text-3xl font-bold text-gray-700">
					Who are we?
				</h3>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="flex flex-col space-y-4">
						<p className="text-base">
							Google collaborates with university students who are
							passionate about growing developer communities.
						</p>
						<p className="text-base">
							Developer Student Clubs powered by Google Developers
							is an initiative to help students to grow their
							knowledge on developer technologies and more through
							peer to peer workshops and events, and gain relevant
							industry experience.
						</p>
						<button
							className="btn self-start"
							href="https://dsc.community.dev/kiet-group-of-institutions-ghaziabad/"
							target="_blank"
							rel="noopener"
						>
							SIGN UP
						</button>
						<a
							className="text-green-dsc font-bold text-base transition-all duration-200 ease-in hover:text-blue-dsc hover:underline"
							href="https://developers.google.com/programs/dsc/"
							target="_blank"
							rel="noopener"
						>
							Learn more about the Program
						</a>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="flex flex-col space-y-1">
							<div className="text-6xl text-red-dsc">
								<AiOutlineRocket />
							</div>
							<h2 className="text-lg font-semibold">Projects</h2>
							<p className="text-base">
								Projects with a social impact that help a lot of
								people.
							</p>
						</div>

						<div className="flex flex-col space-y-1">
							<div className="text-6xl text-blue-dsc">
								<AiOutlineTrophy />
							</div>
							<h2 className="text-lg font-semibold">
								Hackathons
							</h2>
							<p className="text-base">
								Dream. Explore. Wonder. Build it Together.
							</p>
						</div>

						<div className="flex flex-col space-y-1">
							<div className="text-6xl text-yellow-dsc">
								<AiOutlineCustomerService />
							</div>
							<h2 className="text-lg font-semibold">Webinars</h2>
							<p className="text-base">
								Join live coding sessions and AMAs to explore.
							</p>
						</div>

						<div className="flex flex-col space-y-1">
							<div className="text-6xl text-green-dsc">
								<AiOutlineCode />
							</div>
							<h2 className="text-lg font-semibold">Bootcamps</h2>
							<p className="text-base">
								Learn & Implement with us in detailed bootcamps.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="cntr space-y-2 py-4">
				<h3 className="text-3xl font-bold text-gray-700">
					What we do?
				</h3>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="flex flex-col space-y-4">
						<p className="text-base">
							Developer Student Club KIET is inspired by Google
							Developers' Family.
						</p>
						<p className="text-base">
							The motive is to create a ecosystem of programmers &
							developers in the campus by helping them to learn
							and build projects.
						</p>
						<div className="flex justify-start space-x-2">
							{[
								<AiOutlineMedium />,
								<AiOutlineInstagram />,
								<AiOutlineTwitter />,
								<AiOutlineGithub />
							].map((ele, i) => (
								<a
									key={i}
									className="social h-8 w-8 rounded-full bg-gray-700 hover:bg-blue-dsc text-white flex justify-center items-center"
									href="https://medium.com/dsckiet"
									target="_blank"
									rel="noopener"
								>
									{ele}
								</a>
							))}
						</div>
					</div>
					<div className="grid grid-cols-3 sm:grid-cols-4">
						{[
							<HTMLIcon />,
							<CSSIcon />,
							<JavaScriptIcon />,
							<ReactJSIcon />,
							<NodeJSIcon />,
							<MongoDBIcon />,
							<DjangoIcon />,
							<FlutterIcon />,
							<AndroidIcon />
						].map((ele, i) => {
							if (i == 8)
								return (
									<div
										key={i}
										className="sm:col-start-2 sm:col-span-2 sm:justify-self-center text-2xl opacity-60 p-4 transition-all duration-200 ease-in hover:opacity-100"
									>
										{ele}
									</div>
								);
							return (
								<div
									key={i}
									className="text-3xl opacity-60 p-4 transition-all duration-200 ease-in hover:opacity-100"
								>
									{ele}
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className=""></div>
					<div className=""></div>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
