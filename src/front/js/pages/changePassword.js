import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ChangePassword = () => {
	const { store, actions } = useContext(Context);

	return (

<div className="container">
	<div className="card text-center">

  <div className="card-header fs-1">
    Cambio de Contraseña
  </div>

  	<div className="card-body">
		<div className="container">
             <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
             <label for="floatingPassword">Contraseña Actual</label>
              </div>

            <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            <label for="floatingPassword">Nueva Contraseña</label>
            </div>

            <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
  			<input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  			<label for="floatingPassword">Repetir Contraseña</label>
			</div>
   
    		<a href="#" className="btn btn-dark fs-4 col-md-5">Cambiar</a>
			</div>
  	</div>
</div>
</div>

	);
};
