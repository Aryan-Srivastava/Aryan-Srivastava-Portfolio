import React from "react";
import "./Skills.modules.css";
import { skills } from "../../assets/Data";
import { motion } from "framer-motion";

const Skills = () => {
	const getIconComponent = (iconName) => {
		const IconComponent = ReactIcons[iconName];
		if (IconComponent) {
			return <IconComponent />;
		}
		return null;
	};

	return (
		<section className="skills section" id="skills">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="section__title text-cs">Professional Skills</h2>
				<p className="section__subtitle">
					My <span>Skills</span>
				</p>
			</motion.div>
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="skills__container container grid"
			>
				{skills.map((skill) => (
					<div key={skill.id} className="skills__item">
						<svg className="skills__icon">
							<use href={`sprite.svg#icon-${skill.icon}`}></use>
						</svg>
						<h3 className="skills__name">{skill.name}</h3>
					</div>
				))}
			</motion.div>
		</section>
	);
};

export default Skills;
