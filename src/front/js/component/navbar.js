import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fas fa-bars"></i></button>

				<div class="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div class="offcanvas-header">
						<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Options</h5>
						<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					
					<div class="offcanvas-body d-flex flex-column mb-6 justify-content-evenly">
						
							<button class="btn btn-primary" type="button">Record</button>
							<button class="btn btn-primary" type="button">NewBankAccount</button>
							<button class="btn btn-primary" type="button">ChangePassword</button>
							<button class="btn btn-primary" type="button">Logout</button>
						
					</div>
				</div>

				<button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-user"></i></button>

				<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
					<div class="offcanvas-header">
						<h3 class="offcanvas-title" id="offcanvasRightLabel">Future user function</h3>
						<button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div class="offcanvas-body d-flex flex-column mb-6 justify-content-evenly">
						
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
