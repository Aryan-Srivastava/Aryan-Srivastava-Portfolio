import Items from "./Items";
import List from "./List";
import { projects } from "../../assets/Data";
import { useState } from "react";
import "./Portfolio.modules.css";

const allNavList = [
	"All",
	...new Set(projects.map((project) => project.category)),
];
console.log(allNavList);

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
			<h2 className="section__title text-cs">Portfolio</h2>
			<p className="section__subtitle">
				My <span>Projects</span>
			</p>
			<List list={navList} filterItems={filterItems} />
			<div className="portfolio__container container grid">
				<Items projectItems={projectItems} />
			</div>
		</section>
	);
};

export default Portfolio;
