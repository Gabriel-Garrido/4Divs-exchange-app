import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

			<div class="dropdown">
				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-bars"></i></button>
				<ul class="dropdown-menu">
					<li><Link to="/record"><a class="dropdown-item" href="#">historial</a></Link></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>

				<Link to="/demo"></Link>
				
				<div className="ml-auto">
					<Link to="/">
						<span className="navbar-brand mb-0 h1 fs-40" ><i class="fas fa-user"></i></span>
					</Link>
				</div>
			</div>
		</nav>
	);
}
