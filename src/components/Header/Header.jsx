import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BiSun, BiMoon } from "react-icons/bi";
import { links } from "../../assets/Data.jsx";
import "./Header.modules.css";
import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { motion } from "framer-motion";

const getStorageTheme = () => {
	let theme = "light";
	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");
	}
	return theme;
};

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);
	const [theme, setTheme] = useState(getStorageTheme());

	const scrollTop = () => {
		animateScroll.scrollToTop();
	};

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	useEffect(() => {
		document.body.classList.toggle("no-scroll", showMenu);
	}, [showMenu]);

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<header className={`${scrollNav ? "scroll-header" : ""} header`}>
			<nav className="nav">
				<Link
					to="/"
					href=""
					className="nav__logo text-cs"
					onClick={scrollTop}
				>
					<span className="text-cs--primary">A</span>ryan
				</Link>
				<div
					className={`${
						showMenu ? "nav__menu show-menu" : "nav__menu"
					}`}
				>
					<div className="nav__data">
						<ul className="nav__list">
							{links.map(({ name, path }, index) => {
								return (
									<motion.div
										initial={{ x: 150, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.6 }}
									>
										<li className="nav__item" key={index}>
											<Link
												className="nav__link text-cs"
												spy={true}
												smooth={true}
												offset={-50}
												duration={500}
												to={path}
												onClick={() =>
													setShowMenu(!showMenu)
												}
											>
												{name}
											</Link>
										</li>
									</motion.div>
								);
							})}
						</ul>
						<motion.div
							initial={{ y: 150, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="header__socials"
						>
							<a href="" className="header__social-link">
								<FaLinkedin />
							</a>
							<a href="" className="header__social-link">
								<FaGithub />
							</a>
							<a href="" className="header__social-link">
								<FaTwitter />
							</a>
						</motion.div>
					</div>
				</div>
				<div className="nav__btns">
					<div
						className="theme__toggler"
						onClick={() =>
							setTheme(theme === "light" ? "dark" : "light")
						}
					>
						{theme === "light" ? <BiMoon /> : <BiSun />}
					</div>
					<div
						className={`${
							showMenu
								? "nav__toggle animate-toggle"
								: "nav__toggle"
						}`}
						onClick={() => setShowMenu(!showMenu)}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
