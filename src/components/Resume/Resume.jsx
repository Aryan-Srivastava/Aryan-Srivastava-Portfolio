import { cv } from "../../assets/Data";
import Card from "./Card";
import "./Resume.modules.css";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<section className="resume section" id="resume">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="section__title text-cs">Portfolio</h2>
				<p className="section__subtitle">
					My <span>Story</span>
				</p>
			</motion.div>

			<div className="resume__container container grid">
				<div className="resume__group">
					<motion.div
						initial={{ y: 150, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="resume__heading">
							<span>Edu</span>cation
						</h3>
					</motion.div>
					<motion.div
						initial={{ y: 150, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="resume__items"
					>
						{cv.map((val, id) => {
							if (val.category === "education") {
								return <Card key={id} {...val} />;
							}
						})}
					</motion.div>
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
