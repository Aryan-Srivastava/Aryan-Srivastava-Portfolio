import React from "react";
import "./Skills.modules.css";
import { skills } from "../../assets/Data";
import * as ReactIcons from "react-icons/si";

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
			<h2 className="section__title text-cs">Professional Skills</h2>
			<p className="section__subtitle">
				My <span>Skills</span>
			</p>
			<div className="skills__container container grid">
				{skills.map((skill) => (
					<div key={skill.id} className="skills__item">
						<div className="skills__icon">
							{getIconComponent(skill.icon)}
						</div>
						<h3 className="skills__name">{skill.name}</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
