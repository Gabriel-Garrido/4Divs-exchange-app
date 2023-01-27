import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Navbar = (props) => {
	// pendiente crear funcionalidad de boton Logout
	
	// crear funcion que cambie el stado de admin
	const navigate = useNavigate()

	const token = localStorage.getItem("jwt-token")

	console.log(token)

	function logOut() {
		localStorage.clear()
		navigate("/")
}
	return (
		<div>
		<nav className="navbar navbar-light bg-light mb-4">
			<div className="container">
				{/* boton opciones */}
				
				{token?<button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="pe-none fas fa-bars"></i></button>
				:
				<></>}
				{token?
				<div className="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div className="offcanvas-header">
						<p><i className="pe-none fas fa-bars"></i></p>
						<h1 className="offcanvas-title" id="offcanvasScrollingLabel">Opciones</h1>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div className="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
						
							{!props.user.admin?<Link className="btn btn-dark" to="/home" type="button">  <i className="pe-none fas fa-home"></i> Home</Link> : <></>}
							{!props.user.admin?<Link className="btn btn-dark" to="/record" type="button"> <i className="pe-none fas fa-history"></i> Historial</Link> : <></>}
							{!props.user.admin?<Link className="btn btn-dark" to="/newbankaccount" type="button"><i className="pe-none fas fa-university"></i> Nueva cuenta bancaria</Link> : <></>}

							{props.user.admin?<Link className="btn btn-dark" to="/homeadmin" type="button"><i className="pe-none fas fa-user-check"></i> Ver transacciones</Link> : <></>}
							{props.user.admin?<Link className="btn btn-dark" to="/rateadmin" type="button"><i className="pe-none fas fa-sync"></i> Cambiar Tasa</Link> : <></>}
							{props.user.admin?<Link className="btn btn-dark" to="/reportadmin" type="button"><i className="pe-none fas fa-download"></i> Reportes</Link> : <></>}

							<Link className="btn btn-dark" to="/changepassword" type="button"><i className="pe-none fas fa-unlock-alt"></i> Cambiar contraseña</Link>
							<button className="btn btn-danger" onClick={() => logOut()} type="button" ><i className="pe-none fas fa-sign-out-alt"></i> Cerrar sesión</button>
						
					</div>
				</div>

				:<></>
			}

				<Link className="btn btn-dark" to="/" type="button">4Divs</Link>

				{/* boton opciones usuario */}
				<button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="pe-none fas fa-user"></i></button>

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
