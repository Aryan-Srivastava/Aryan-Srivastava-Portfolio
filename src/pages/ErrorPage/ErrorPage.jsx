import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.modules.css";

const ErrorPage = () => {
	return (
		<div className="error__container">
			<Link className="error__link" to="/">404</Link>
			<p>Page Not Found.</p>
			<div className="travolta"></div>
		</div>
	);
};

export default ErrorPage;
