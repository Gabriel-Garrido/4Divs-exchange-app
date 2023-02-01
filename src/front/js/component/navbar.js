import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Navbar = (props) => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate()
	const token = localStorage.getItem("jwt-token")

// --------------------------------logOut-------------------------------------
	function logOut() {
		localStorage.clear()
		navigate("/")
}
// --------------------------------/logOut-------------------------------------

	return (
		<nav className="navbar navbar-light sticky-top bg-light mb-4">
			<div className="container">

 		{/* --------------------------------Options button------------------------------------- */}
				{token && store.user != null?<button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="pe-none fas fa-bars pe-none"></i></button>
				:
				<></>}
				{token && store.user != null?
				<div className="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
					<div className="offcanvas-header">
						<p></p>
						<h1 className="offcanvas-title" id="offcanvasScrollingLabel">Opciones</h1>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>

					<div className="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">

 					{/* --------------------------------User Options------------------------------------- */}
							{!store.user.admin?<Link className="btn btn-dark" to="/home" type="button">  <i className="pe-none fas fa-home"></i> Home</Link> : <></>}
							{!store.user.admin?<Link className="btn btn-dark" to="/record" type="button"> <i className="pe-none fas fa-history"></i> Historial</Link> : <></>}
							{!store.user.admin?<Link className="btn btn-dark" to="/newbankaccount" type="button"><i className="pe-none fas fa-university"></i> Nueva cuenta bancaria</Link> : <></>}

					{/* --------------------------------Admin Options------------------------------------- */}
							{store.user.admin?<Link className="btn btn-dark" to="/homeadmin" type="button"><i className="pe-none fas fa-user-check"></i> Ver transacciones</Link> : <></>}
							{store.user.admin?<Link className="btn btn-dark" to="/rateadmin" type="button"><i className="pe-none fas fa-sync"></i> Cambiar Tasa</Link> : <></>}
							{store.user.admin?<Link className="btn btn-dark" to="/reportadmin" type="button"><i className="pe-none fas fa-download"></i> Reportes</Link> : <></>}

							<Link className="btn btn-dark" to="/changepassword" type="button"><i className="pe-none fas fa-unlock-alt"></i> Cambiar contraseña</Link>
							<button className="btn btn-danger" onClick={() => {actions.logout(); navigate("/") }} type="button" ><i className="pe-none fas fa-sign-out-alt"></i> Cerrar sesión</button>
					</div>
				</div>
				:<></>
			}

				<Link className="btn btn-dark" to="/" type="button"><i className="fas fa-coins"></i> 4Divs <i className="fas fa-coins"></i></Link>

		{/* -----------------------Session options (disble) ------------------------- */}
				<button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="pe-none fas fa-user"></i>{store.user!=null? " " + store.user.email:<></>}</button>
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
		
	);
}
