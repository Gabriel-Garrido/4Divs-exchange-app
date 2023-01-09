import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RestorePassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
	<div className="card text-center">

  <div className="card-header fs-1">
    Recuperar Contraseña
  </div>

  	<div className="card-body">
		<div className="container">
             <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
             <input type="email" className="form-control" id="floatingPassword" placeholder="Correo"></input>
             <label for="floatingPassword">Correo</label>
              </div>
   
    		<a href="#" className="btn btn-dark col-5">Enviar</a>
			</div>
  	</div>
</div>
</div>
	);
};
