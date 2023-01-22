import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";


export const Home = (props) => {
	const { store, actions } = useContext(Context);
	const [mount, setMount] = useState("");
	const [mountError, setMountError] = useState("");
	const [conversion, setConversion] = useState("");

	console.log("rate2 = " + props.rate)

	const handleChange = (e) => {
		const regex = /^\d*$/;
		if (!regex.test(e.target.value)) {
			setMountError("Debe ingresar valor en números");
			setMount("");
		} else {
			setMountError("");
			setMount(e.target.value);
			setConversion(Math.round((e.target.value / props.rate) * 100) / 100)
		}
	};

//-------------fetch POST transaction ok -------------------------
	async function processTransaction() {
		let data = {
			"user_id": 3, 
			"status": true, 
			"change_id": props.changeId, 
			"bank_account_id": 6, 
			"date": "21/01/2023", 
			"time": "20:00", 
			"transaction_amount": mount, 
			"transfer_bank_id": "not defined1"
		}  

		await fetch("https://3001-gabrielgarr-4geeksproye-i4kluan14jz.ws-us83.gitpod.io/api/add_transaction",{
			method: ["POST"],
			headers: {
			 "Content-type": "application/json; charset=utf-8",
			 "Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(data)
		})
		console.log(mount)
		console.log(conversion)
	}
//-------------/fetch POST transaction-------------------------------

	return (
		<div className="text-center container mb-2 mt-3">

			<div className="card text-center">
				<div className="card-header">
					<p className="fs-1">Tasa de Cambio</p>
					
						<div className="dropdown mb-3">
							<button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Seleccione divisa
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#"> CLP to USD</a></li>
								<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
								<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
							</ul>
						</div>
					
					<p className="fs-1">1 USD / {props.rate} CLP</p>
				</div>
				<div className="card-body row">
					<div className="mb-3 d-flex flex-column align-items-center col-8 offset-2 col-md-4 offset-md-4 ">
						
						<div className="input-group">
						<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Ingrese el monto a enviar" onChange={handleChange}></input>
							<span className="input-group-text" id="basic-addon3">CLP</span>
						</div>
						{mountError && <p className="text-danger">{mountError}</p>}
						<div className="form-text fs-5">Usted va a cambiar:</div>
						<p className="fs-1"> {mount} CLP to {conversion} USD</p>

						{/* Selección de cuenta bancaria */}
							<div className="container">
					
								<button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
									Seleccione cuenta bancaria  <i className="fas fa-caret-down"></i>
								</button>
								
								<div className="collapse" id="collapseExample">
									<div className="card card-body">
										
										<ul className="list-group">
						
											<input type="radio" className="btn-check" name="options" id="option1" autoComplete="off"></input>
											<label className="btn btn-outline-dark" htmlFor="option1">Cuenta bancaria 1</label>

											<input type="radio" className="btn-check" name="options" id="option2" autoComplete="off"></input>
											<label className="btn btn-outline-dark" htmlFor="option2">Cuenta bancaria 2</label>

											<input type="radio" className="btn-check" name="options" id="option3" autoComplete="off"></input>
											<label className="btn btn-outline-dark" htmlFor="option3">Cuenta bancaria 3</label>

											<input type="radio" className="btn-check" name="options" id="option4" autoComplete="off"></input>
											<label className="btn btn-outline-dark" htmlFor="option4">Cuenta bancaria 4</label>
										
										</ul>
									</div>
								</div>


							</div>
					</div>
							
						{/* /Selección de cuenta bancaria */}


						<Link onClick={() => processTransaction()} to="/process" className="btn btn-dark col-8 offset-2 col-md-4 offset-md-4 fs-4">Procesar cambio</Link>
				</div>
			</div>
			

			
		</div>
	);
};
