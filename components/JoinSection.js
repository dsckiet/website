import React from "react";
import { FaTelegramPlane, FaSlack } from "react-icons/fa";

// const Card = styled.div`
// 	margin-bottom: 40px;
// 	padding: 40px;
// 	color: #ffffff;
// 	align-items: center;
// 	background: ${props => {
// 		switch (props.type) {
// 			case "red":
// 				return "#DB4437";
// 			case "blue":
// 				return "#1A73E8";
// 			case "green":
// 				return "#0F9D58";
// 			case "yellow":
// 				return "#F4B400";
// 			default:
// 				return "#565859";
// 		}
// 	}};
// 	border-radius: 8px;
// 	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
// `;

// const CardOutline = styled.div`
// 	margin-bottom: 40px;
// 	padding: 40px;
// 	color: #424242;
// 	align-items: center;
// 	border: 1.2px solid #db4437;
// 	box-sizing: border-box;
// 	border-bottom-width: 4px;
// 	border-radius: 8px;
// 	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
// `;

// const Input = styled.input`
// 	border: 0.8px solid #424242;
// 	box-sizing: border-box;
// 	border-bottom-width: 2.4px;
// 	font-family: Sen;
// 	font-weight: 700;
// 	&:active,
// 	&:focus {
// 		border-color: #db4437;
// 		border-right-width: 2.4px;
// 		border-bottom-width: 3.6px;
// 		box-shadow: 0 0 0 0.2rem rgba(219, 68, 55, 0.25);
// 	}
// `;

// const InputWrapper = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	/* flex-wrap: wrap; */
// 	margin-top: 20px;
// 	align-items: center;
// 	@media (max-width: 768px) {
// 		flex-wrap: wrap;
// 		input {
// 			margin-bottom: 8px;
// 		}
// 	}
// `;

const JoinSection = () => {
	return (
		<section className="cntr py-10 mt-4 mb-8">
			<div className="flex">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="card p-10 md:p-8 lg:p-10 bg-red-dsc text-white rounded-lg">
						<h3 className="text-2xl font-bold">
							Join the workspace
						</h3>
						<p className="text-base mt-2 md:mt-6 lg:mt-2">
							Join our Slack and Telegram Channels get instant
							updates about our{" "}
							<span className="font-extrabold">#activities</span>,{" "}
							<span className="font-extrabold">#sessions</span>{" "}
							and other fun stuff.
						</p>
						<div className="flex mini:flex-col mini:space-y-4 xxs:flex-col xxs:space-y-4 xs:items-center xs:space-x-4 sm:space-x-4 md:space-x-4 mt-6 md:mt-10 lg:mt-6">
							<button
								onClick={() =>
									window.open(
										"https://join.slack.com/t/dsckiet/shared_invite/zt-ef1q4txj-D77khvaZVgBP2CyH2MQHLA",
										"_blank"
									)
								}
								className="btn flex items-center space-x-1 xxs:self-start"
							>
								<FaSlack />
								<span>Slack</span>
							</button>{" "}
							<button
								onClick={() =>
									window.open(
										"https://t.me/dsckiet",
										"_blank"
									)
								}
								className="btn flex items-center space-x-1 xxs:self-start"
							>
								<FaTelegramPlane />
								<span>Telegram</span>
							</button>
						</div>
					</div>
					<div className="p-10 md:p-8 lg:p-10 border border-solid border-red-dsc border-b-4 rounded-lg">
						<h3 className="text-2xl font-bold">
							Subscribe to our newsletter
						</h3>
						<p className="text-base mt-2">
							Subscribe to our newsletter to get the latest
							updates about our events and hacks right in your
							inbox.
						</p>
						<form
							action="https://buttondown.email/api/emails/embed-subscribe/dsckiet"
							method="post"
							target="popupwindow"
							onSubmit={() =>
								window.open(
									"https://buttondown.email/dsckiet",
									"popupwindow"
								)
							}
							className="embeddable-buttondown-form mt-6"
						>
							<div className="flex flex-col lg:flex-row lg:space-x-2">
								<input
									placeholder="email address"
									className="p-2 my-2 border border-solid border-gray-800 focus:border-red-dsc border-b-4 rounded-lg"
									type="email"
									name="email"
									id="bd-email"
									required
								/>
								<input type="hidden" value="1" name="embed" />
								<button
									type="submit"
									className="btn self-start lg:self-center"
									value="Subscribe"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoinSection;
