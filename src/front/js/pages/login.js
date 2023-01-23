import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
//import jwt from 'jsonwebtoken';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//let myToken = localStorage.getItem("token");


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
 

  const handleEmailChange = (e) => {
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Ingrese un correo electrónico válido.");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (!passwordRegex.test(e.target.value)) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres y un número.");
    } else {
      setPasswordError("");
    }
    setPassword(e.target.value);
  };

  const login_user = async (email, password) => {
    console.log("Hello")
    const resp = await fetch(`https://3001-gabrielgarr-4geeksproye-l1xuus0mhao.ws-us82.gitpod.io/api/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "pepito@gmail.com", password: "pepe123" })
    })
    
    if(!resp.ok) throw Error("There was a problem in the login request")
    
    if(resp.status === 401){
    throw("Invalid credentials")
    }
    else if(resp.status === 400){
    throw ("Invalid email or password format")
    }
    const data = await resp.json()
   
   
    
    // save your token in the localStorage
    //also you should set your user into the store using the setStore function
    localStorage.setItem("jwt-token", data.token);
    console.log(localStorage["jwt-token"])
    return data
    }

  return (
    <div className=" container text-center">
      <div class="card text-center">
        <div class="card-header fs-1">Bienvenido</div>
        <div class="card-body">
          <div class="container row">
            <div class="mb-3 col-12 col-md-6 offset-md-3">
              <div class="form-floating mb-3">
			  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange}></input>
                <label for="floatingInput">Email</label>
              </div>
              {emailError && <p className="text-danger">{emailError}</p>}
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange}></input>
                <label for="floatingPassword">Password</label>
              </div>
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>

            <Link to="/home" class="btn btn-dark mb-4 col-6 offset-3 col-md-4 offset-md-4">Ingresar usuario</Link>
            <Link to="/homeadmin" class="btn btn-dark mb-4 col-6 offset-3 col-md-4 offset-md-4">Ingresar empresa</Link>
            <button class="btn btn-dark mb-4 col-6 offset-3 col-md-4 offset-md-4">Ingresar</button>
            <a href="#" class="btn btn-secondary mb-4 col-6 offset-3 col-md-4 offset-md-4 disable">Crear cuenta</a>
            <Link to="/" >Regresar</Link>
            <Link to="/restorepassword">Recuperar contraseña</Link>
          </div>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </div>
  );
};