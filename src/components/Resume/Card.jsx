import { useState } from "react";

const Card = (props) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<div className="resume__item">
			<div
				className="resume__header"
				onClick={() => setShowInfo(!showInfo)}
			>
				<h3 className="resume__subtitle">{props.title}</h3>
				<span className="resume__icon">{showInfo ? "-" : "+"}</span>
			</div>
			<div
				className={`${showInfo ? "show__content" : ""} resume__content`}
			>
				<div className="resume__date-title">
					<h3 className="resume__title">{props.subtitle}</h3>
					<span className="resume__date text-cs">{props.date}</span>
				</div>
				{props.category === "education" ? (
					<p className="resume__desciption">{props.description}</p>
				) : (
					<p className="resume__desciption experience__description" dangerouslySetInnerHTML={{ __html: props.description }}></p>
				)}
			</div>
		</div>
	);
};

export default Card;
