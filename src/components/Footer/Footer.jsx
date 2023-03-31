import "./Footer.modules.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container social">
				<div className="footer__socials">
					<a href="https://www.linkedin.com/in/aryan-sri" className="footer__social-link">
						<FaLinkedin />
					</a>
					<a href="https://github.com/Aryan-Srivastava" className="footer__social-link">
						<FaGithub />
					</a>
					<a href="https://twitter.com/Aryan_Sri_" className="footer__social-link">
						<FaTwitter />
					</a>
				</div>
			</div>

			<p className="footer__copyright text-cs">
				&copy; 2023 Developed with ❤️ by{" "}
				<a href="https://github.com/Aryan-Srivastava" className="footer__link">
					Aryan Srivastava
				</a>
			</p>
		</footer>
	);
};

export default Footer;
