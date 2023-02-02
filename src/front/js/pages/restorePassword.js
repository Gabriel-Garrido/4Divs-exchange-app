import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { sendEmail } from "../service/emailService.js";

export const RestorePassword = (props) => {
	useEffect(() => {handleEmailChange}, [])
	const { store, actions } = useContext(Context);


//----------------------------Validations--------------------------------	
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const [email, setEmail] = useState("");
  	const [emailError, setEmailError] = useState("");
	const [user, setUser] = useState("");

	  const verify = async (_) => {
		const response = await fetch(`${props.URL_API}/api/get_user_id_by_email/${email}`, {
			method: ["GET"],
			headers: {
			  "Content-type": "application/json; charset=utf-8",
			}}).then(response => {
				response.json().then(data => {
					console.log(data)
					setUser(data)					
				}).then(sendEmailData())
			});	
	  };

	  const sendEmailData = () => {
		let params = {
			to_email: email,
			to_name: user.first_name,
			to_link: `https://3000-gabrielgarr-4geeksproye-cmpn6lz3uud.ws-us85.gitpod.io/changepassword/${user.id}`
		  };
		  sendEmail(params);
	  }

	  const handleEmailChange = (e) => {
		if (!emailRegex.test(e.target.value)) {
		  setEmailError("Ingrese un correo electrónico válido.");
		} else {
		  setEmailError("");
		}
		setEmail(e.target.value);
	  };

//----------------------------/Validations--------------------------------	


	return (
		<div className="container col-10 offset-1 col-md-6 offset-md-3">
	<div className="card text-center">

  <div className="card-header fs-1">
    Recuperar Contraseña
  </div>

  	<div className="card-body">
		<div className="container">
             <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
             <input type="email" className="form-control" id="floatingPassword" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}></input>
             <label htmlFor="floatingPassword">Correo</label>
              </div>
			  {emailError && <p className="text-danger">{emailError}</p>}
    		<button onClick={verify} className="btn btn-dark col-5">Enviar</button>
			</div>
  	</div>
</div>
</div>
	);
};
