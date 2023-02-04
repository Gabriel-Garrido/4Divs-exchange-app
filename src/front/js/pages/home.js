import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { BankAccountItem } from "../component/bankAccountItem.js";
import { NumericFormat } from 'react-number-format';

import "../../styles/home.css";


export const Home = (props) => {
	const navigate = useNavigate()
	
	const { store, actions } = useContext(Context);
	useEffect(() => {bankAccountFetch()},[])
	const [mount, setMount] = useState("");
	const [mountError, setMountError] = useState("");
	const [conversion, setConversion] = useState("");
	const [selectedBankAccount, setSelectedBankAccount] = useState("")

	console.log("Change rate is = " + props.rate)



	const handleChange = (e) => {
		const value = e.floatValue;
		setMount(value);
		setConversion(Math.round((value / props.rate) * 100) / 100)
		};

//-------------fetch GET bank account-------------------------
	const bankAccountFetch = async () => {
		try{
			const response = await fetch(`${props.URL_API}/api/get_bank_account_by_user_id/${store.user.id}`,{
				method: ['GET'],
				headers: {
					"Content-type": "application/json",
				}});
			const data = await response.json();
			props.setBankAccount(data)
			setSelectedBankAccount(data[0].id)
		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
		}
		}
//-------------/fetch GET bank account-------------------------


//-------------fetch POST transaction ok -------------------------
	async function processTransaction() {
		await actions.newTransaction(store.user.id,1,selectedBankAccount,mount,conversion)
		console.log(store.transaction);
		navigate ("/process");
	}
//-------------/fetch POST transaction-------------------------------

const handleChangeBank = e => {
    setSelectedBankAccount(e.target.value);
  };

  if (!localStorage.getItem("jwt-token"))
  	return <></>

	return (
		<div className="text-center container mb-2 mt-3 col-10 offset-1 col-md-6 offset-md-3">

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
						<NumericFormat
							className="form-control"
							id="basic-url"
							aria-describedby="basic-addon3"
							placeholder="Ingrese el monto a enviar"
							onValueChange={handleChange}
							decimalScale={2}
							thousandSeparator={true}
							value={mount}
						/>
							<span className="input-group-text" id="basic-addon3">CLP</span>
						</div>
						{mountError && <p className="text-danger">{mountError}</p>}
						<div className="form-text fs-5">Usted va a cambiar:</div>
						<p className="fs-1">
							<NumericFormat value={mount} displayType={'text'} thousandSeparator={true} prefix={'CLP '} /> to <NumericFormat value={conversion} displayType={'text'} thousandSeparator={true} prefix={'USD '} />
						</p>

						{/* Selección de cuenta bancaria */}
							<div className="container text-center">
				
							<select 
								value={selectedBankAccount} 
								onChange={handleChangeBank}
								className="form-select" 
								aria-label="Default select example"

							>

								{props.bankAccount.map(item => {
									return <BankAccountItem 
										key={item.id} 
										item={item} 
										URL_API={props.URL_API}
									/>
								})}
										
							</select>
								


							</div>
					</div>
							
						{/* /Selección de cuenta bancaria */}


						<button onClick={() => processTransaction()} className="btn btn-dark col-8 offset-2 col-md-4 offset-md-4 fs-4">Procesar cambio</button>
				</div>
			</div>
			

			
		</div>
	);
};