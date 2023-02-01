import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom"


export const NewBankAccount = (props) => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	if (!localStorage.getItem("jwt-token"))
  	return <></>

//-----------------------Validations--------------------------------
	const lettersRegex = /^[a-zA-Z]+$/;
	const numbersRegex = /^\d{1,14}$/;
	const identityRegex = /^[0-9]{9}-[0-9Kk]$/;

	const [bankName, setBankName] = useState("");
	const [bankNameError, setBankNameError] = useState("");	
	const [documentType, setDocumentType] = useState("");
	const [documentTypeError, setDocumentTypeError] = useState("");
	const [holderName, setHolderName] = useState("");
	const [holderNameError, setHolderNameError] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [accountNumberError, setAccountNumberError] = useState("");
	const [identity, setIdentity] = useState("");
	const [identityError, setIdentityError] = useState("");
	const [buttonActivate, setButtonActivate] = useState(false);


	const handleBankNameChange = (e) => {
		if (!lettersRegex.test(e.target.value)) {
			setBankNameError("Sólo letras son válidas.");
		} else {
			setBankNameError("");
		}
		setBankName(e.target.value);
	  };

	const handleDocumentTypeChange = (e) => {
		if (!lettersRegex.test(e.target.value)) {
			setDocumentTypeError("Sólo letras son válidas.");
		} else {
			setDocumentTypeError("");
		}
		setDocumentType(e.target.value);
		validatebutton()
	  };

	const handleHolderNameChange = (e) => {
		if (!lettersRegex.test(e.target.value)) {
		  setHolderNameError("Sólo letras son válidas.");
		} else {
		  setHolderNameError("");
		}
		setHolderName(e.target.value);
		validatebutton()
	  };

	  const handleAccountNumberChange = (e) => {
		if (!numbersRegex.test(e.target.value)) {
		  setAccountNumberError("Sólo numeros son válidas,maximo 14 digitos.");
		} else {
		  setAccountNumberError("");
		}
		setAccountNumber(e.target.value);
		validatebutton()
	  };

	  const handleIdentityChange = (e) => {
		if (!identityRegex.test(e.target.value)) {
			setIdentityError("Formato valido sin puntos y con guión ej. 1111111-1");
		} else {
			setIdentityError("");
		}
		setIdentity(e.target.value);
		validatebutton()
	  }

	  function validatebutton() {
		if (bankNameError!="" && documentTypeError!="" && holderNameError!="" && accountNumberError!="" && identityError!="") {
			setButtonActivate(true)
		}
		else{
			setButtonActivate(true)
		}
	  }
//-----------------------/Validations--------------------------------


//-------------------POST new bank account----------------------------
async function createBankAccount() {

	let data = {
		"user_id": store.user.id,
		"country": "Chile",
		"account_number": accountNumber,
		"bank": bankName,
		"account_holder": holderName,
		"document_type": documentType,
		"document_id": identity
		} 

	await fetch(`${props.URL_API}/api/add_bank_account`,{
		method: ["POST"],
		headers: {
		 "Content-type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(data)
	})
	console.log(`Se creó la cuenta bancaria del usuario ${store.user.first_name} del banco ${bankName}`)
	navigate("/home")
}
//-------------------POST new bank account----------------------------

	return (
		<div className="container col-10 offset-1 col-md-6 offset-md-3">
			<div className="card text-center row">
				<div className="card-header fs-1">
					Nueva Cuenta Bancaria
				</div>
				<div className="card-body d-flex flex-column aling-items-center ">
					<div className="container">
						<label htmlFor="bankName">Nombre de Banco</label>
						<div>
							<input type="text" id="bankName" name="bankName" required minLength="4" maxLength="17" size="35" onChange={handleBankNameChange}  />
							{bankNameError && <p className="text-danger">{bankNameError}</p>}
						</div>


						<label htmlFor="accountNumber">Numero de Cuenta</label>
						<div>
							<input type="text" id="accountNumber" name="accountNumber" required	minLength="4" maxLength="22" size="35"  onChange={handleAccountNumberChange}/>
							{accountNumberError && <p className="text-danger">{accountNumberError}</p>}
						</div>

						<label htmlFor="holderName">Nombre del Titular</label>
						<div>
							<input type="text" id="holderName" name="holderName" required minLength="4" maxLength="17" size="35" onChange={handleHolderNameChange}/>
							{holderNameError && <p className="text-danger">{holderNameError}</p>}
						</div>

						<label htmlFor="documentType">Tipo de documento</label>
						<div className="container">
							<ul className="list-group">
								<li className="list-group-item">
									<input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio"></input>
									<label className="form-check-label" htmlFor="firstRadio">Rut</label>
								</li>
								<li className="list-group-item">
									<input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"></input>
									<label className="form-check-label" htmlFor="secondRadio">Pasaporte</label>
								</li>
							</ul>
							<input type="text" id="documentType" name="documentType" requiredminLength="4" maxLength="17" size="35" onChange={handleDocumentTypeChange}/>
							{documentTypeError && <p className="text-danger">{documentTypeError}</p>}
						</div>

						<label htmlFor="identity">Documento de Identidad</label>
						<div>
							<input type="text" id="identity" name="identity" required minLength="4" maxLength="17" size="35" onChange={handleIdentityChange}/>
							{identityError && <p className="text-danger">{identityError}</p>}
						</div>
					</div>
        			{buttonActivate?<a href="#" className="btn btn-dark col-8 offset-2 col-md-2 offset-md-5 mt-4" onClick={createBankAccount}>Guardar</a>:<a className="btn btn-secondary col-8 offset-2 col-md-2 offset-md-5 mt-4" >Guardar</a>}
				</div>
				<div className="card-footer text-muted"></div>
			</div>
		</div>

	);
};