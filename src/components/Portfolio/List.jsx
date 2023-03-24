import { useState } from "react";

const List = ({ list, filterItems }) => {
	const [active, setActive] = useState(0);
	return (
		<div className="portfolio__list">
			{list.map((category, index) => {
				return (
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
				);
			})}
		</div>
	);
};

export default List;
