import { motion, useScroll, useSpring } from "framer-motion";
import "./Progressbar.modules.css";

const Progressbar = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<motion.div
			className="progress-bar"
			style={{ scaleX }}
		/>
	);
};

export default Progressbar;
