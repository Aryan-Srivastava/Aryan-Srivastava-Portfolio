import "./Home.modules.css";
import shape1 from "../../assets/assets/shape-1.png";
import CV from "../../assets/assets/Aryan_CV.pdf";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className="home"
			id="home"
		>
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="home__container container"
			>
				<p className="home__subtitle text-cs">
					Hello, <span>my name is</span>
				</p>
				<h1 className="home__title text-cs">
					<span>Aryan</span> Srivastava
				</h1>
				<p className="home__job">
					<span className="text-cs">I Am a</span> <b>Web Developer</b>
				</p>

				<p className="home__text">
					From India. I've been working as a web developer for a year
					now. I love working with React and Node.js.
				</p>

				<div className="home__socials">
					<a
						href="https://www.linkedin.com/in/aryan-sri"
						className="home__social-link"
						aria-label="LinkedIn"
						title="LinkedIn"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-linkedin"></use>
						</svg>
					</a>
					<a
						href="https://github.com/Aryan-Srivastava"
						className="home__social-link"
						aria-label="Github"
						title="Github"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-github"></use>
						</svg>
					</a>
					<a
						href="https://twitter.com/Aryan_Sri_"
						className="home__social-link"
						aria-label="Twitter"
						title="Twitter"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-twitter"></use>
						</svg>
					</a>
					<a
						href="https://aryansri.hashnode.dev/"
						className="home__social-link"
						aria-label="Hashnode"
						title="Hashnode"
					>
						<svg className="svg__icons">
							<use href="sprite.svg#icon-hashnode"></use>
						</svg>
					</a>
				</div>

				<div className="home__btns">
					<a download href={CV} className="download-cv btn text-cs">
						Download CV
					</a>
					<a href="#skills" className="hero__link text-cs">
						My Skills
					</a>
				</div>
			</motion.div>
			<img className="shape shape-1" src={shape1} alt="shape 1" />
			<img className="shape shape-2" src={shape1} alt="shape 2" />
			<img className="shape shape-3" src={shape1} alt="shape 3" />
		</motion.div>
	);
};

export default Home;
