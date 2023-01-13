import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const ChangePassword = () => {
	const { store, actions } = useContext(Context);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState("");

  const handlePasswordChange = (e) => {
    if (!passwordRegex.test(e.target.value)) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres y un número.");
    } else {
      setPasswordError("");
    }
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    if (!passwordRegex.test(e.target.value)) {
      setNewPasswordError("La contraseña debe tener al menos 8 caracteres y un número.");
    } else {
      setNewPasswordError("");
    }
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfirmChange = (e) => {
    if (e.target.value !== newPassword) {
      setNewPasswordConfirmError("Las contraseñas no coinciden");
    } else {
      setNewPasswordConfirmError("");
    }
    setNewPasswordConfirm(e.target.value);
  };

	return (

<div className="container">
	<div className="card text-center">

  <div className="card-header fs-1">
    Cambio de Contraseña
  </div>

  	<div className="card-body">
		<div className="container">
             <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
             <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange}></input>
             <label for="floatingPassword">Contraseña Actual</label>
              </div>
              {passwordError && <p className="text-danger">{passwordError}</p>}
            <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleNewPasswordChange} ></input>
            <label for="floatingPassword">Nueva Contraseña</label>
            </div>
            {newPasswordError && <p className="text-danger">{newPasswordError}</p>}
            <div className="form-floating mb-2 col-12 col-md-6 offset-md-3">
  			<input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleNewPasswordConfirmChange}></input>
  			<label for="floatingPassword">Repetir Contraseña</label>
			</div>
      {newPasswordConfirmError && <p className="text-danger">{newPasswordConfirmError}</p>}
    		<a href="#" className="btn btn-dark fs-4 col-md-5">Cambiar</a>
			</div>
  	</div>
</div>
</div>

	);
};
