import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navegador navbar   mb-3">
			<Link to="/">
				<button className="btn-12">List</button>
			</Link>
			<div className="ml-auto">
				<Link to="/form">
					<button className="btn-12">Form</button>
				</Link>
			</div>
		</nav>
	);
};
