import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Dist from "webpack-merge";
import { Link, useNavigate } from "react-router-dom"


const rateRegex = /^\d*$/;

export const RateAdmin = (props) => {
	const navigate = useNavigate()

	if (!localStorage.getItem("jwt-token"))
  	return <></>

	useEffect(()=>{apiExternal()},[])

//-------------------------validations-----------------------------
	const { store, actions } = useContext(Context);
	const [rate, setRate] = useState("");
	const [rateError, setRateError] = useState("");
	const [dolarActual, setDolarActual] = useState("");
	const [activeButton, setActiveButton] = useState(false);
	
	const handleChange = (e) => {
		if (!rateRegex.test(e.target.value)) {
			setRateError("Debe ingresar valor en números");
		  } else {
			setRateError("");
		}
		setRate(e.target.value);
		activateButton()
		};

	function activateButton() {
		if (rateError=="") {
			setActiveButton(true)
		}else{
			setActiveButton(false)
		}
 }	
 function redirect() {
	if (store.user.admin) {
	  navigate("/homeadmin")
	  } else {
	  navigate("/home");
	  }
  }
//-------------------------/validations-----------------------------


//-------------------------external API-----------------------------
		async function apiExternal() {
			try{
				const response = await fetch('https://mindicador.cl/api/dolar')
				const data = await response.json()
				return setDolarActual(data.serie[0].valor)
			}catch (error) {
				console.log('there is a problem with fetch:' + error.message);
			}
		}
//-------------------------/external API-----------------------------


//-------------------------Change PUT fetch-----------------------------
	async function changeRateFetch() {
		let data = {
			"origin_exchange": "CLP",
    		"destination_exchange": "USD",
			"exchange_rate": rate
		}
		try {
			await fetch (`${props.URL_API}/api/edit_change/1`, {
			  method: ["PUT"],
					headers: {
					 "Content-type": "application/json; charset=utf-8",
					 'Access-Control-Allow-Origin':"*"
					},
					body: JSON.stringify(data)
			})
		  }catch (error) {
		  console.error(error)
		}
		props.setRate(rate)
		//navigate("/homeadmin")
	}
//-------------------------/Change PUT fetch-----------------------------


		
	return (
		
		<div className="text-center container mb-2 mt-3 col-10 offset-1 col-xl-6 offset-xl-3">
			<div className="card text-center">
					<h5>Hoy el valor del dolar observado es: {dolarActual}</h5>
				<div className="card-header">
				<h1>Cambio de Tasa</h1>
					<h2>Tasa Actual: {props.rate} CLP = 1 USD</h2>
					
					<div className="dropdown mb-3">
						<button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Seleccione divisa
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">CLP a USD</a></li>
							<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
							<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
						</ul>
					</div>
					
				</div>
				<div className="card-body row">
					<div className="mb-3 d-flex flex-column align-items-center col-8 offset-2 col-md-4 offset-md-4 ">
						<h2>Tasa Nueva</h2>					
						<p className="fs-1">1 USD / {rate} CLP</p>

						<label className="fs-4">1 USD to</label>
						<div className="input-group">
							<input
								type="form-floating"
								className="form-control"
								id="basic-url"
								aria-describedby="basic-addon3"
								placeholder="Nuevo Precio"
								onChange={handleChange}
								></input>
							<span className="input-group-text" id="basic-url">CLP</span>
						</div>
					</div>
					{rateError && <p className="text-danger">{rateError}</p>}
					{activeButton?<button onClick={changeRateFetch} className="btn btn-dark col-4 offset-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Cambiar
					</button>:<button className="btn btn-secondary col-4 offset-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Cambiar
					</button>}
			<div className="modal" tabIndex="-1" id="exampleModal">
            		<div className="modal-dialog">
              		<div className="modal-content">
                	<div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                	</div>
                	<div className="modal-body">
                    <p>La Tasa ha sido cambiada ha {props.rate} CLP  x USD</p>
                	</div>
                	<div className="modal-footer">
                  <button className="btn btn-dark" onClick={redirect} data-bs-dismiss="modal">Aceptar</button>
                	</div>
              		</div>
            		</div>
          </div>
				</div>
			</div>
		</div>
	);
};
