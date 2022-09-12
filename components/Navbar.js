import React, { useState } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import SideNav from "./SideNav";
import { RiMenu3Line } from "react-icons/ri";

// const Container = styled.nav`
// 	color: ${({ theme }) => theme.text} !important;
// 	background-color: ${({ theme }) => theme.body};
// 	margin-bottom: 1.45rem;
// `;

const Nav = styled.nav`
	font-family: Sen !important;
	justify-content: space-between !important;
`;

const StyledNavLinks = styled.div`
	display: flex;
	align-items: center;
`;

const StyledList = styled.ul`
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0;
	margin: 0;
	list-style: none;
	@media (max-width: 992px) {
		display: none;
	}
`;
const StyledListItem = styled.li`
	position: relative;
	& > a {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const StyledMenu = styled(StyledListItem)`
	margin: 0 0;
	list-style: none;
	height: 32px;
	img {
		width: 32px;
		cursor: pointer;
	}
	display: none;
	@media (max-width: 992px) {
		display: block;
	}
`;

const Navbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	
	return (
		<div style={{ boxShadow: "0 2px 4px rgba(0,0,0,.2)" }}>
			<div className="container"
			style={{color: props.isdark==='light'? "white" : "black"}}>
				<Nav className="navbar navbar-expand-lg navbar-light px-0">
					<Link href="/">
						<a
							to="/"
							style={{color: props.isdark==='light'? "#424242" : "white",
							fontWeight: "700"}}
							className="nav-link navbar-brand px-0"
							
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

					<StyledNavLinks>
						<StyledList
							className="navbar-nav mr-auto nav justify-content-end"
							style={{ width: "100%" ,color: props.isdark==='light'? "#424242" : "white"}}
						>
							<StyledListItem
								className="nav-item m-1 "
								style={{ fontWeight: "600" }}
							>
								<Link href="/">
									<a
										to="/"
										style={{ fontWeight: "600",color: props.isdark==='light'? "#424242" : "white" }}
										className="nav-link"
										exact="true"
										// activeClassName="active"
									>
										Home
									</a>
								</Link>
							</StyledListItem>

							<StyledListItem
								className="nav-item m-1"
								style={{ fontWeight: "600",color: props.isdark==='light'? "#424242" : "white" }}
							>
								<Link href="/about">
									<a
										to="/about"
										style={{ fontWeight: "600" ,color: props.isdark==='light'? "#424242" : "white"}}
										className="nav-link"
										// activeClassName="active"
									>
										About
									</a>
								</Link>
							</StyledListItem>

							<StyledListItem
								className="nav-item m-1"
								style={{ fontWeight: "600",color: props.isdark==='light'? "#424242" : "white" }}
							>
								<Link href="/team">
									<a
										to="/team"
										style={{ fontWeight: "600",color: props.isdark==='light'? "#424242" : "white" }}
										className="nav-link"
										// activeClassName="active"
									>
										Team
									</a>
								</Link>
							</StyledListItem>

							<StyledListItem
								className="nav-item m-1"
								style={{ fontWeight: "600",color: props.isdark==='light'? "#424242" : "white" }}
							>
								<Link href="/faqs">
									<a
										to="/faqs"
										style={{ fontWeight: "600" ,color: props.isdark==='light'? "#424242" : "white"}}
										className="nav-link"
										// activeClassName="active"
									>
										FAQs
									</a>
								</Link>
							</StyledListItem>

							<StyledListItem
								className="nav-item m-1"
								style={{ fontWeight: "600" ,color: props.isdark==='light'? "#424242" : "white"}}
							>
								<Link href="/contact">
									<a
										to="/contact"
										style={{ fontWeight: "600" ,color: props.isdark==='light'? "#424242" : "white"}}
										className="nav-link"
										// activeClassName="active"
									>
										Contact
									</a>
								</Link>
							</StyledListItem>
						</StyledList>
					</StyledNavLinks>
					<StyledMenu>
						<RiMenu3Line
							style={{ fontSize: 32, cursor: "pointer" }}
							alt="menu"
							onClick={toggleMenu}
						/>
						{/* <img
						src={`/static/icons/menu.svg`}
						alt="menu"
						onClick={toggleMenu}
					/> */}
					</StyledMenu>
					<SideNav isOpen={isOpen} openMenu={toggleMenu} />
					<button onClick={props.toggleDark} className={`btn btn-${props.isdark==='light'? "dark" : "light"}`}>Enable {props.isdark==='light'? "Dark" : "Light"} mode</button>
				</Nav>
			</div>
		</div>
	);
};

// Navbar.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };

export default Navbar;
