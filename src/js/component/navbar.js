import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navegador navbar   mb-3">
			<Link to="/">
				<span className="btn btn-primary mb-0 h1">Back to list</span>
			</Link>
			<div className="ml-auto">
				<Link to="/form">
					<button className="btn btn-primary">Form</button>
				</Link>
			</div>
		</nav>
	);
};
