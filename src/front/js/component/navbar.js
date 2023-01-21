import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	// pendiente crear funcionalidad de boton Logout

	const [admin, setAdmin] = useState(true)
	
	// crear funcion que cambie el stado de admin

	return (
		<div>
		<nav className="navbar navbar-light bg-light mb-4">
			<div className="container">
				{/* boton opciones */}
				<button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fas fa-bars"></i></button>

				<div className="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div className="offcanvas-header">
						<p><i className="fas fa-bars"></i></p>
						<h1 className="offcanvas-title" id="offcanvasScrollingLabel">Opciones</h1>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div className="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
						
							<Link className="btn btn-dark" to="/home" type="button">  <i className="fas fa-home"></i> Home</Link>
							<Link className="btn btn-dark" to="/record" type="button"> <i className="fas fa-history"></i> Historial</Link>
							<Link className="btn btn-dark" to="/newbankaccount" type="button"><i className="fas fa-university"></i> Nueva cuenta bancaria</Link>
							<Link className="btn btn-dark" to="/changepassword" type="button"><i className="fas fa-unlock-alt"></i> Cambiar contraseña</Link>

							{admin?<Link className="btn btn-dark" to="/rateadmin" type="button"><i className="fas fa-sync"></i> Cambiar Tasa</Link> : <></>}
							<Link className="btn btn-dark" to="/reportadmin" type="button"><i className="fas fa-download"></i> Reportes</Link>
							<Link className="btn btn-dark" to="/verificationadmin" type="button"><i className="fas fa-user-check"></i> Verificar Perfiles</Link>
							<Link className="btn btn-danger" to="/" type="button"><i className="fas fa-sign-out-alt"></i> Cerrar sesión</Link>
						
					</div>
				</div>

				<Link className="btn btn-dark" to="/home" type="button">4Divs</Link>

				{/* boton opciones usuario */}
				<button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fas fa-user"></i></button>

				<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
					<div className="offcanvas-header">
						<h3 className="offcanvas-title" id="offcanvasRightLabel">Future user function</h3>
						<button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div className="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
						
							<button className="btn btn-outline-secondary" type="button">Future functions</button>
							<button className="btn btn-outline-secondary" type="button">Future functions</button>
							<button className="btn btn-outline-secondary" type="button">Future functions</button>
							<button className="btn btn-outline-secondary" type="button">Future functions</button>
							<button className="btn btn-outline-secondary" type="button">Future functions</button>

						
					</div>
				</div>

			</div>
		</nav>
		</div>
	);
}
