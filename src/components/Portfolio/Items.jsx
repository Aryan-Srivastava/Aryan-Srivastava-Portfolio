import { FaGithub, FaLink } from "react-icons/fa";
import shape2 from "../../assets/assets/shape-2.png";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
	return (
		<>
			{projectItems.map((project) => {
				const { id, img, category, title, description, github, live } =
					project;
				return (
					<motion.div
						layout
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0.8, scale: 0.6 }}
						exit={{ opacity: 0.8, scale: 0.6 }}
						key={id}
						className="portfolio__items card card-two"
					>
						<div className="portfolio__img-wrapper">
							<img
								src={img}
								alt="project image"
								className="portfolio__img"
							/>
						</div>
						<span className="portfolio__category text-cs">
							{category}
						</span>
						<h3 className="portfolio__title">{title}</h3>
						<p className="portfolio__description">{description}</p>
						<a href={live} target="_blank" className="link">
							<FaLink />
						</a>
						<a href={github} target="_blank" className="link">
							<FaGithub />
						</a>
						<img
							src={shape2}
							alt="shape"
							className="shape c__shape"
						/>
					</motion.div>
				);
			})}
		</>
	);
};

export default Items;
