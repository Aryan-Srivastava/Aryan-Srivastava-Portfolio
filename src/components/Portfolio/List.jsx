import { motion } from "framer-motion";
import { useState } from "react";

const List = ({ list, filterItems }) => {
	const [active, setActive] = useState(0);
	return (
		<div className="portfolio__list">
			{list.map((category, index) => {
				return (
					<motion.div
						initial={{ y: 150, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
					>
						<button
							key={index}
							className={`${
								active === index ? "active-work" : ""
							} portfolio__list-items text-cs`}
							onClick={() => {
								setActive(index);
								filterItems(category);
							}}
						>
							{category}
						</button>
					</motion.div>
				);
			})}
		</div>
	);
};

export default List;
