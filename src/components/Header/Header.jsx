import { links } from "../../assets/Data.jsx";
import "./Header.modules.css";
import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { motion } from "framer-motion";

const getStorageTheme = () => {
	let theme = "radioactive";
	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");
	}
	return theme;
};

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
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

	useEffect(() => {
		const currentPage = window.location.pathname;
		if (currentPage !== "/") {
			setShowNavbar(false);
		}
	}, []);

	return (
		<header className={`${scrollNav ? "scroll-header" : ""} header`}>
			<div className={`${showMenu ? 'overlay' : ''}`} onClick={() => setShowMenu(false)}></div>
			<nav className="nav">
				<Link
					to="/"
					className="nav__logo text-cs"
					onClick={scrollTop}
					aria-label="Aryan"
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
									<li className="nav__item" key={index}>
										<motion.div
											initial={{ x: 150, opacity: 0 }}
											whileInView={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.6 }}
										>
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
										</motion.div>
									</li>
								);
							})}
						</ul>
						<motion.div
							initial={{ y: 150, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="header__socials"
						>
							<a
								href="https://www.linkedin.com/in/aryan-sri"
								className="header__social-link"
								aria-label="LinkedIn"
								title="LinkedIn"
							>
								<svg className="svg__icons">
									<use href="sprite.svg#icon-linkedin"></use>
								</svg>
							</a>
							<a
								href="https://github.com/Aryan-Srivastava"
								className="header__social-link"
								aria-label="Github"
								title="Github"
							>
								<svg className="svg__icons">
									<use href="sprite.svg#icon-github"></use>
								</svg>
							</a>
							<a
								href="https://twitter.com/Aryan_Sri_"
								className="header__social-link"
								aria-label="Twitter"
								title="Twitter"
							>
								<svg className="svg__icons">
									<use href="sprite.svg#icon-twitter"></use>
								</svg>
							</a>
							<a
								href="https://aryansri.hashnode.dev/"
								className="header__social-link"
								aria-label="Hashnode"
								title="Hashnode"
							>
								<svg className="svg__icons">
									<use href="sprite.svg#icon-hashnode"></use>
								</svg>
							</a>
						</motion.div>
					</div>
				</div>
				<div className="nav__btns">
					<div
						className="theme__toggler"
						onClick={() =>
							setTheme(
								theme === "midday"
									? "radioactive"
									: theme === "radioactive"
									? "light"
									: "midday"
							)
						}
					>
						{theme === "light" ? (
							<svg className="theme__icons">
								<use href="sprite.svg#icon-sun"></use>
							</svg>
						) : theme === "radioactive" ? (
							<svg className="theme__icons">
								<use href="sprite.svg#icon-moon"></use>
							</svg>
						) : (
							<svg className="theme__icons">
								<use href="sprite.svg#icon-dawn"></use>
							</svg>
						)}
					</div>

					{showNavbar && (
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
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
