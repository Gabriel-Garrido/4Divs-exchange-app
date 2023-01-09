import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	// pendiente crear funcionalidad de boton Logout
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{/* boton opciones */}
				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fas fa-bars"></i></button>

				<div class="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div class="offcanvas-header">
						<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Options</h5>
						<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div class="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
						
							<Link class="btn btn-primary" to="/home" type="button">Home</Link>
							<Link class="btn btn-primary" to="/record" type="button">Record</Link>
							<Link class="btn btn-primary" to="/newbankaccount" type="button">NewBankAccount</Link>
							<Link class="btn btn-primary" to="/changepassword" type="button">ChangePassword</Link>
							<Link class="btn btn-primary" to="/" type="button">Logout</Link>
						
					</div>
				</div>

				<Link class="btn btn-primary" to="/home" type="button">4Divs</Link>

				{/* boton opciones usuario */}
				<button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-user"></i></button>

				<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
					<div class="offcanvas-header">
						<h3 class="offcanvas-title" id="offcanvasRightLabel">Future user function</h3>
						<button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div class="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
						
							<button class="btn btn-outline-secondary" type="button">Future functions</button>
							<button class="btn btn-outline-secondary" type="button">Future functions</button>
							<button class="btn btn-outline-secondary" type="button">Future functions</button>
							<button class="btn btn-outline-secondary" type="button">Future functions</button>
						
					</div>
				</div>

			</div>
		</nav>
	);
}
