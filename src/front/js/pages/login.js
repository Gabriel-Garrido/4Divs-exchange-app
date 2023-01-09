import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className=" container text-center">

			<div class="card text-center">
				<div class="card-header fs-1">
					Bienvenido
				</div>
				<div class="card-body">

					<div class="container row">
						<div class="mb-3 col-12 col-md-6 offset-md-3">
							<div class="form-floating mb-3">
								<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
								<label for="floatingInput">Email</label>
							</div>
							<div class="form-floating">
								<input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
								<label for="floatingPassword">Password</label>
							</div>
						</div>

					<Link to="/home" class="btn btn-dark mb-4 col-6 offset-3 col-md-4 offset-md-4">Ingresar usuario</Link>
					<Link to="/homeadmin" class="btn btn-dark mb-4 col-6 offset-3 col-md-4 offset-md-4">Ingresar empresa</Link>

					<a href="#" class="btn btn-secondary mb-4 col-6 offset-3 col-md-4 offset-md-4 disable">Crear cuenta</a>

					
					<Link to="/restorepassword">Recuperar contraseña</Link>
					</div>
					
				</div>
				<div class="card-footer text-muted">
					
				</div>
			</div>

		</div>
	);
};
