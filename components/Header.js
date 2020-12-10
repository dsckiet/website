import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";

const Header = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	return (
		<div className="cntr">
			<div className="flex flex-col lg:flex-row">
				<div className=""></div>
				<div className="flex flex-col space-y-4 md:px-16 lg:py-16">
					<h2 className="text-3xl font-bold text-gray-700">
						Developer Student Clubs KIET Group of Institutions
					</h2>
					<p className="text-base">
						powered by <b>Google Developers</b>
					</p>
					<a
						className="btn self-start"
						href="https://forms.gle/YFTsmarHBrW57k5N8"
						target="_blank"
						rel="noopener"
					>
						Become a member
					</a>

					<a
						className="text-green-dsc font-bold text-base transition-all duration-200 ease-in hover:text-blue-dsc hover:underline"
						href="https://dsc.community.dev/kiet-group-of-institutions-ghaziabad/"
						target="_blank"
						rel="noopener"
					>
						Join Community Platform by Google Develoeprs
					</a>
				</div>
				<div className="hidden md:block ">
					<Lottie options={defaultOptions} height={400} width={400} />
				</div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default Header;
