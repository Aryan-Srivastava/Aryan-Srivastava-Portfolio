import Project1 from "./assets/project1.webp";
import Project2 from "./assets/project2.webp";
import Project3 from "./assets/project3.webp";
import Project4 from "./assets/project4.webp";

export const links = [
	{
		name: "Home",
		path: "home",
	},
	{
		name: "Works",
		path: "work",
	},
	{
		name: "Skills",
		path: "skills",
	},
	{
		name: "Services",
		path: "services",
	},
	{
		name: "Resume",
		path: "resume",
	},
	{
		name: "Blog",
		path: "blog",
	},
	{
		name: "Contact",
		path: "contact",
	},
];

export const services = [
	{
		id: 1,
		name: "Web Development",
		title: "Full Time Web Developer",
		description:
			"Hire me as a Full time developer, I'll design and develop websites that drive results. Building websites that are fast, secure, and built with best practices in mind.",
	},
	{
		id: 2,
		name: "Freelancer",
		title: "Freelance Developer",
		description:
			" Have something on mind and want someone to develope that, hire me as a Freelance Developer for your project. I am available for full time and part time work.",
	},
	{
		id: 3,
		name: "Part Time Developer",
		title: "Part Time Developer",
		description:
			" Hire me as a Part Time Developer, I'll design and develop websites that drive results. Building websites that are fast, secure, and built with best practices in mind.",
	},
];

export const skills = [
	{
		id: 1,
		name: "HTML",
		icon: "html5",
	},

	{
		id: 2,
		name: "CSS",
		icon: "css3",
	},

	{
		id: 3,
		name: "JavaScript",
		icon: "javascript",
	},

	{
		id: 4,
		name: "React.js",
		icon: "react",
	},

	{
		id: 5,
		name: "Node.js",
		icon: "node-dot-js",
	},

	{
		id: 6,
		name: "MongoDB",
		icon: "mongodb",
	},

	{
		id: 7,
		name: "Express.js",
		icon: "express",
	},

	{
		id: 8,
		name: "Git",
		icon: "git",
	},

	{
		id: 9,
		name: "TailwindCSS",
		icon: "tailwindcss",
	},
];

export const projects = [
	{
		id: 1,
		img: Project1,
		category: "Frontend",
		title: "Admin Dashboard",
		description:
			"Admin Dashboard is a web application that allows you to manage and visualize data. It is a single page application that is built using React.js and Material UI.",
		github: "https://github.com/Aryan-Srivastava/Admin-Dashboard",
		live: "https://aryan-react-admin-dashboard.netlify.app/"
	},
	{
		id: 2,
		img: Project2,
		category: "Full Stack",
		title: "Lyriks",
		description:
			"Lyriks is a music web application that allows users to play favorite songs and get lyrics. It is a single page application that is built using React.js and Tailwind UI.",
		github: "https://github.com/Aryan-Srivastava/lyriks",
		live: "https://lyriks-music-application.netlify.app/"
	},
	{
		id: 3,
		img: Project3,
		category: "Full Stack",
		title: "College Post",
		description:
			"College Post is a blogging web application that allows users to post and share information regarding college. It is a single page full stack application that is built in MERN stack.",
		github: "https://github.com/Aryan-Srivastava/College_Post",
		live: "https://github.com/Aryan-Srivastava/College_Post"
	},
	{
		id: 4,
		img: Project4,
		category: "Frontend",
		title: "Modern Bank UI Clone",
		description:
			"Modern Bank UI Clone is a single page clone web application that is built using React.js and Tailwind CSS.",
		github: "https://github.com/Aryan-Srivastava/Modern-Bank-Website-Clone",
		live: "https://modern-bank-ui-site.netlify.app/"
	},
];

export const cv = [
	{
		id: 1,
		title: "Bachelore of Technology",
		subtitle: "School of Management and Sciences",
		date: "2019 - 2023",
		description:
			"8.19 CGPA",
		category: "education",
	},
	{
		id: 2,
		title: "Intermediate",
		subtitle: "Seventh Day Adventist Inter College",
		date: "2018 - 2019",
		description:
			"69.4%",
		category: "education",
	},
	{
		id: 4,
		title: "QSS Technosoft",
		subtitle: "Software Engineer",
		date: "Apr 2023 - current",
		description: 
			"<p><i>Key Responsibilities and Notable works.</i></p> \
			<ul> \
				<li><b>React & Node.js Development:</b> Contributed to key modules, including report generation, appointments scheduling, and user management. Developed APIs with Node.js and CouchDB.</li> \
				<li><b>DICOM Projects:</b> Delivered healthcare projects using DotNet and C#, meeting tight deadlines, despite initial unfamiliarity with the technology.</li> \
				<li><b>AWS Support:</b> Monitored and maintained AWS services, ensuring system stability.</li> \
			</ul>\
			<p><b>Technologies Used:</b> React, Node.js, CouchDB, DotNet, C#, DCM4CHEE, AWS</p>  ",
		category: "experience",
	}		
];
