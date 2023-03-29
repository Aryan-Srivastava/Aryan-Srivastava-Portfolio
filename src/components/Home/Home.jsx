import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.modules.css";
import shape1 from "../../assets/assets/shape-1.png";
import shape2 from "../../assets/assets/shape-2.png";
import CV from "../../assets/assets/Aryan_CV.pdf";

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home__container container">
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
					>
						<FaLinkedin />
					</a>
					<a
						href="https://www.linkedin.com/in/aryan-sri"
						className="home__social-link"
					>
						<FaGithub />
					</a>
					<a
						href="https://twitter.com/Aryan_Sri_/"
						className="home__social-link"
					>
						<FaTwitter />
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
			</div>
			<img className="shape shape-1" src={shape1} alt="shape 1" />
			<img className="shape shape-2" src={shape2} alt="shape 2" />
			<img className="shape shape-3" src={shape2} alt="shape 3" />
		</section>
	);
};

export default Home;
