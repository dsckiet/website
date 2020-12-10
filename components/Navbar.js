import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SideNav from "./SideNav";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
	const router = useRouter();
	const [open, setopen] = useState(false);

	const toggleMenu = () => setopen(!open);

	return (
		<header style={{ boxShadow: "rgba(0,0,0,.2) 0 2px 4px" }}>
			<nav className="cntr py-2 flex justify-between">
				<Link href="/">
					<a
						to="/"
						className="text-xl font-bold flex items-center space-x-2"
					>
						<Image
							className="object-contain"
							src="/static/images/logo.png"
							alt="dsckiet logo"
							width={48}
							height={48}
						/>{" "}
						<span>DSC KIET</span>
					</a>
				</Link>

				<div className="hidden md:flex items-center space-x-8">
					<Link href="/">
						<a
							to="/"
							className={`font-semibold hover:text-gray-900 ${
								router.pathname === "/"
									? "text-gray-900"
									: "text-gray-600"
							}`}
							exact="true"
						>
							Home
						</a>
					</Link>
					<Link href="/about">
						<a
							to="/about"
							className={`font-semibold hover:text-gray-900 ${
								router.pathname === "/about"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							About
						</a>
					</Link>
					<Link href="/team">
						<a
							to="/team"
							className={`font-semibold hover:text-gray-900 ${
								router.pathname === "/team"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							Team
						</a>
					</Link>
					<Link href="/faqs">
						<a
							to="/faqs"
							className={`font-semibold hover:text-gray-900 ${
								router.pathname === "/faqs"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							FAQs
						</a>
					</Link>
					<Link href="/contact">
						<a
							to="/contact"
							className={`font-semibold hover:text-gray-900 ${
								router.pathname === "/contact"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							Contact
						</a>
					</Link>
				</div>
				<button className="text-4xl md:hidden">
					<RiMenu3Line alt="menu" onClick={toggleMenu} />
				</button>
			</nav>
			<SideNav open={open} openMenu={toggleMenu} />
		</header>
	);
};

export default Navbar;
