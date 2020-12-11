import React, { useState, useEffect, Suspense } from "react";

const Lottie = React.lazy(() => import("react-lottie"));

const Header = () => {
	const [options, setOptions] = useState({
		loop: true,
		autoplay: true,
		animationData: null,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	});

	useEffect(() => {
		import("../public/static/images/lf30_editor_qQ1FOd.json").then(data =>
			setOptions({ ...options, animationData: data })
		);
	}, []);

	return (
		<section className="cntr">
			<div className="flex flex-col lg:flex-row">
				<div className="flex flex-col space-y-4 md:px-16 lg:py-16">
					<h2 className="text-3xl font-bold text-gray-700">
						Developer Student Clubs KIET Group of Institutions
					</h2>
					<p className="text-base">
						powered by <b>Google Developers</b>
					</p>
					<a
						className="btn self-start hover:bg-blue-dsc transition-all duration-200 ease-in"
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
					{options.animationData ? (
						<Suspense fallback={<div></div>}>
							<Lottie
								options={options}
								height={400}
								width={400}
							/>
						</Suspense>
					) : null}
				</div>
				<div className=""></div>
			</div>
		</section>
	);
};

export default Header;
