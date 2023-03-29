import { cv } from "../../assets/Data";
import Card from "./Card";
import "./Resume.modules.css";

const Resume = () => {
	return (
		<section className="resume section" id="resume">
			<h2 className="section__title text-cs">Portfolio</h2>
			<p className="section__subtitle">
				My <span>Story</span>
			</p>

			<div className="resume__container container grid">
				<div className="resume__group">
					<h3 className="resume__heading">
						<span>Edu</span>cation
					</h3>
					<div className="resume__items">
						{cv.map((val, id) => {
							if (val.category === "education") {
								return <Card key={id} {...val} />;
							}
						})}
					</div>
				</div>
				{/* <div className="resume__group">
					<h3 className="resume__heading">
						<span>Exp</span>erience
					</h3>
					<div className="resume__items">
						{cv.map((val, id) => {
							if (val.category === "experience") {
								return <Card key={id} {...val} />;
							}
						})}
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Resume;
