import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RestorePassword = () => {
	const { store, actions } = useContext(Context);

	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const [email, setEmail] = useState("");
  	const [emailError, setEmailError] = useState("");

	  const handleEmailChange = (e) => {
		if (!emailRegex.test(e.target.value)) {
		  setEmailError("Ingrese un correo electrónico válido.");
		} else {
		  setEmailError("");
		}
		setEmail(e.target.value);
	  };

	return (
		<div className="container">
	<div className="card text-center">

  <div className="card-header fs-1">
    Recuperar Contraseña
  </div>

  	<div className="card-body">
		<div className="container">
             <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
             <input type="email" className="form-control" id="floatingPassword" placeholder="Correo" onChange={handleEmailChange}></input>
             <label htmlFor="floatingPassword">Correo</label>
              </div>
			  {emailError && <p className="text-danger">{emailError}</p>}
    		<a href="#" className="btn btn-dark col-5">Enviar</a>
			</div>
  	</div>
</div>
</div>
	);
};
