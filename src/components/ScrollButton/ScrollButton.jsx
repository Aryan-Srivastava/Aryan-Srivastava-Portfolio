import { useEffect, useState } from "react";
import "./ScrollButton.modules.css";

const ScrollButton = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.scrollY > 400) {
			setShowScroll(true);
		} else if (showScroll && window.scrollY <= 400) {
			setShowScroll(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, []);
	return (
		<>
			{showScroll && (
				<div className="scroll-btn">
					<svg
						className="scroll-button"
						onClick={() => window.scrollTo({ top: 0 })}
					>
						<use href="sprite.svg#icon-arrow-up"></use>
					</svg>
				</div>
			)}
		</>
	);
};

export default ScrollButton;
