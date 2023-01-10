import React from "react";
import {Link} from "react-router-dom"
 

export const NavbarAdmin = () => {

    return (
        <body>
        <nav className="navbar  navbar-light bg-light mb-4">
			<div className="container ">
				{/* boton opciones */}
				<button class="btn btn-dark text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling1" aria-controls="offcanvasScrolling1"><i class="fas fa-bars"></i></button>

				<div class="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
					<div class="offcanvas-header">
						<p><i class="fas fa-bars"></i></p>
						<h1 class="offcanvas-title" id="offcanvasScrollingLabel">Opciones</h1>
						<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
                    <div class="offcanvas-body d-flex flex-column mb-6 justify-content-evenly" data-bs-toggle="offcanvas">
                    <Link class="btn btn-dark" to="/homeadmin" type="button"><i class="fas fa-home"></i> Home</Link>
							<Link class="btn btn-dark" to="/rateadmin" type="button"><i class="fas fa-sync"></i> Cambiar Tasa</Link>
							<Link class="btn btn-dark" to="/reportadmin" type="button"><i class="fas fa-download"></i> Reportes</Link>
							<Link class="btn btn-dark" to="/verificationadmin" type="button"><i class="fas fa-user-check"></i> Verificar Perfiles</Link>
							<Link class="btn btn-danger" to="/" type="button"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</Link>
                    </div>
                  

                </div>
                <Link class="btn btn-dark" to="/homeadmin" type="button">4Divs</Link>

                <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas1" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight1"><i class="fas fa-user"></i></button>
            </div>
           
         </nav>


        </body>
    );

}