import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
// const Container = styled.nav`
// 	color: ${({ theme }) => theme.text} !important;
// 	background-color: ${({ theme }) => theme.body};
// 	margin-bottom: 1.45rem;
// `;

const Nav = styled.nav`
	font-family: Sen !important;
`;

const Navbar = () => {
	return (
		<div className="container">
			<Nav className="navbar navbar-expand-lg navbar-light">
				<Link href="/">
					<a
						to="/"
						style={{ fontWeight: "700", color: "#424242" }}
						className="nav-link navbar-brand"
					>
						<img
							className="img-fluid mb-1"
							src="static/images/logo.png"
							alt="logo"
							width="45"
						/>{" "}
						DSC KIET
					</a>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul
						className="navbar-nav mr-auto nav justify-content-end"
						style={{ width: "100%" }}
					>
						<li
							className="nav-item m-1 "
							style={{ fontWeight: "600" }}
						>
							<Link href="/">
								<a
									to="/"
									style={{ fontWeight: "600" }}
									className="nav-link"
									exact="true"
									// activeClassName="active"
								>
									Home
								</a>
							</Link>
						</li>

						<li
							className="nav-item m-1"
							style={{ fontWeight: "600" }}
						>
							<Link href="/about">
								<a
									to="/about"
									style={{ fontWeight: "600" }}
									className="nav-link"
									// activeClassName="active"
								>
									About
								</a>
							</Link>
						</li>

						<li
							className="nav-item m-1"
							style={{ fontWeight: "600" }}
						>
							<Link href="/team">
								<a
									to="/team"
									style={{ fontWeight: "600" }}
									className="nav-link"
									// activeClassName="active"
								>
									Team
								</a>
							</Link>
						</li>
						<li
							className="nav-item m-1"
							style={{ fontWeight: "600" }}
						>
							<Link href="/contact">
								<a
									to="/contact"
									style={{ fontWeight: "600" }}
									className="nav-link"
									// activeClassName="active"
								>
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</Nav>
		</div>
	);
};

// Navbar.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };

export default Navbar;
