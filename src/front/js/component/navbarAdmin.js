import React from "react";
import {Link} from "react-router-dom"
 

export const NavbarAdmin = () => {

    return (
        <div>
        <nav className="navbar  navbar-light bg-light mb-4">
			<div className="container ">
				{/* boton opciones */}
				<button className="btn btn-dark text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling1" aria-controls="offcanvasScrolling1"><i className="fas fa-bars"></i></button>

				<div className="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabndex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
					<div className="offcanvas-header">
						<p><i className="fas fa-bars"></i></p>
						<h1 className="offcanvas-title" id="offcanvasScrollingLabel">Opciones</h1>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
                    <div className="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
                    <Link className="btn btn-dark" to="/homeadmin" type="button"><i className="fas fa-home"></i> Home</Link>
							<Link className="btn btn-dark" to="/rateadmin" type="button"><i className="fas fa-sync"></i> Cambiar Tasa</Link>
							<Link className="btn btn-dark" to="/reportadmin" type="button"><i className="fas fa-download"></i> Reportes</Link>
							<Link className="btn btn-dark" to="/verificationadmin" type="button"><i className="fas fa-user-check"></i> Verificar Perfiles</Link>
							<Link className="btn btn-danger" to="/" type="button"><i className="fas fa-sign-out-alt"></i> Cerrar sesión</Link>
                    </div>
                  

                </div>
                <Link className="btn btn-dark" to="/homeadmin" type="button">4Divs</Link>

                <button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas1" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1"><i className="fas fa-user"></i></button>
            </div>
           
         </nav>


        </div>
    );

}