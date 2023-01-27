import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
//import jwt from 'jsonwebtoken';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let myToken = null;

export const Login = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false)

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

// ----------------------Login token-------------------------
  const login_user = async (email, password) => {
    console.log(email + " " + password)
    const resp = await fetch(`${props.URL_API}/api/token`, {
    method: ["POST"],
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "email": email, "password": password })
    })
      if(!resp.ok) {
        setLoginError(true)
        throw Error("There was a problem in the login request")
      }
      if(resp.status === 401){
        setLoginError(true)
        throw("Invalid credentials")
        
      }else if(resp.status === 400){
        setLoginError(true)
        throw ("Invalid email or password format")

        }
        const data = await resp.json()

        localStorage.setItem("jwt-token", data.token);
        loginDataFetch(email)
      }
// ----------------------/Login token-------------------------


// ----------------------GET user data-------------------------
    async function loginDataFetch(email) {

      const response = await fetch(`${props.URL_API}/api/get_user_by_email/${email}`, {
        method: ["GET"],
        headers: {
          "Content-type": "application/json; charset=utf-8",
        }});
      const data = await response.json()
      props.setUser(data)
      localStorage.setItem("admin", data.admin);

      return render(data)
    }
// ----------------------/GET user data-------------------------
    
  function render(loginData) { 
      console.log(loginData)
      if (loginData.admin) {
      navigate("/homeadmin")
      } else {
      navigate("/home");
      }
    }

  return (
    <div className=" container text-center">
      <div className="card text-center">
        <div className="card-header fs-1">Bienvenido</div>
        <div className="card-body">
          <div className="container row">
            <div className="mb-3 col-12 col-md-6 offset-md-3">
              <div className="form-floating mb-3">
			  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange}></input>
                <label htmlFor="floatingInput">Email</label>
              </div>
              {emailError && <p className="text-danger">{emailError}</p>}
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange}></input>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>
            {loginError?<p className="text-danger">Error en login</p>:<></>}
            <button  href='' className="btn btn-dark mb-4 col-6 offset-3 col-md-4 offset-md-4" onClick={()=>login_user(email, password)}>Ingresar</button>
            <a href="#" className="btn btn-secondary mb-4 col-6 offset-3 col-md-4 offset-md-4 disable">Crear cuenta</a>
            <Link to="/restorepassword">Recuperar contraseña</Link>
          </div>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
};