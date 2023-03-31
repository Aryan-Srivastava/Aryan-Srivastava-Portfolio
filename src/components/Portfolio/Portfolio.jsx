import Items from "./Items";
import List from "./List";
import { projects } from "../../assets/Data";
import { useState } from "react";
import "./Portfolio.modules.css";
import { motion } from "framer-motion";

const allNavList = [
	"All",
	...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
	const [projectItems, setProjectItems] = useState(projects);
	const [navList, setNavList] = useState(allNavList);

	const filterItems = (category) => {
		if (category === "All") {
			setProjectItems(projects);
			return;
		}
		const filteredData = projects.filter(
			(project) => project.category === category
		);
		setProjectItems(filteredData);
	};

	return (
		<section className="portfolio section" id="work">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="section__title text-cs">Portfolio</h2>
				<p className="section__subtitle">
					My <span>Projects</span>
				</p>
			</motion.div>
			<List list={navList} filterItems={filterItems} />
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				className="portfolio__container container grid"
			>
				<Items projectItems={projectItems} />
			</motion.div>
		</section>
	);
};

export default Portfolio;
