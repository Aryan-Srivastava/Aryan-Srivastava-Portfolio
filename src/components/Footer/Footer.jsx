import "./Footer.modules.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container social">
				<div className="footer__socials">
					<a
						href="https://www.linkedin.com/in/aryan-sri"
						className="footer__social-link"
						aria-label="LinkedIn"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-linkedin"></use>
						</svg>
					</a>
					<a
						href="https://github.com/Aryan-Srivastava"
						className="footer__social-link"
						aria-label="Github"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-github"></use>
						</svg>
					</a>
					<a
						href="https://twitter.com/Aryan_Sri_"
						className="footer__social-link"
						aria-label="Twitter"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-twitter"></use>
						</svg>
					</a>
				</div>
			</div>

			<p className="footer__copyright text-cs">
				&copy; 2023 Developed with ❤️ by{" "}
				<a
					href="https://github.com/Aryan-Srivastava"
					className="footer__link"
				>
					Aryan Srivastava
				</a>
			</p>
		</footer>
	);
};

export default Footer;
