import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	// pendiente crear funcionalidad de boton Logout

	const [admin, setAdmin] = useState(false)

	// crear funcion que cambie el stado de admin

	return (
		<body>
		<nav className="navbar navbar-light bg-light mb-4">
			<div className="container">
				{/* boton opciones */}
				<button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fas fa-bars"></i></button>

				<div class="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div class="offcanvas-header">
						<p><i class="fas fa-bars"></i></p>
						<h1 class="offcanvas-title" id="offcanvasScrollingLabel">Opciones</h1>
						<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div class="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
						
							<Link class="btn btn-dark" to="/home" type="button">  <i class="fas fa-home"></i> Home</Link>
							<Link class="btn btn-dark" to="/record" type="button"> <i class="fas fa-history"></i> Historial</Link>
							<Link class="btn btn-dark" to="/newbankaccount" type="button"><i class="fas fa-university"></i> Nueva cuenta bancaria</Link>
							<Link class="btn btn-dark" to="/changepassword" type="button"><i class="fas fa-unlock-alt"></i> Cambiar contraseña</Link>

							{admin? <Link class="btn btn-dark" to="/rateadmin" type="button"><i class="fas fa-sync"></i> Cambiar Tasa</Link> : <></>}
							<Link class="btn btn-dark" to="/reportadmin" type="button"><i class="fas fa-download"></i> Reportes</Link>
							<Link class="btn btn-dark" to="/verificationadmin" type="button"><i class="fas fa-user-check"></i> Verificar Perfiles</Link>
							<Link class="btn btn-danger" to="/" type="button"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</Link>
						
					</div>
				</div>

				<Link class="btn btn-dark" to="/home" type="button">4Divs</Link>

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
							<button class="btn btn-outline-secondary" type="button">Future functions</button>

						
					</div>
				</div>

			</div>
		</nav>
		</body>
	);
}
