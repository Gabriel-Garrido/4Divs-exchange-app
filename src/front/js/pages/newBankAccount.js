import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const NewBankAccount = () => {
	const { store, actions } = useContext(Context);
	

//-----------------------Validations--------------------------------
	const LetrasRegex = /[a-zA-Z]+/;
	const NumerosRegex = /^\d{1,14}$/;
	const IdentidadRegex = /^[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9Kk]$/;

	const [bankName, setBankName] = useState("");
	const [bankNameError, setBankNameError] = useState("");	
	const [accountType, setAccountType] = useState("");
	const [accountTypeError, setAccountTypeError] = useState("");
	const [holderName, setHolderName] = useState("");
	const [holderNameError, setHolderNameError] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [accountNumberError, setAccountNumberError] = useState("");
	const [identity, setIdentity] = useState("");
	const [identityError, setIdentityError] = useState("");

	const handleBankNameChange = (e) => {
		if (!LetrasRegex.test(e.target.value)) {
			setBankNameError("Sólo letras son válidas.");
		} else {
			setBankNameError("");
		}
		setBankName(e.target.value);
	  };

	const handleAccountTypeChange = (e) => {
		if (!LetrasRegex.test(e.target.value)) {
			setAccountTypeError("Sólo letras son válidas.");
		} else {
			setAccountTypeError("");
		}
		setAccountType(e.target.value);
	  };

	const handleHolderNameChange = (e) => {
		if (!LetrasRegex.test(e.target.value)) {
		  setHolderNameError("Sólo letras son válidas.");
		} else {
		  setHolderNameError("");
		}
		setHolderName(e.target.value);
	  };

	  const handleAccountNumberChange = (e) => {
		if (!NumerosRegex.test(e.target.value)) {
		  setAccountNumberError("Sólo numeros son válidas,maximo 14 digitos.");
		} else {
		  setAccountNumberError("");
		}
		setAccountNumber(e.target.value);
	  };

	  const handleIdentityChange = (e) => {
		if (!IdentidadRegex.test(e.target.value)) {
			setIdentityError("Formato valido ej. 1.111.111-1");
		} else {
			setIdentityError("");
		}
		setIdentity(e.target.value);
	  }
//-----------------------/Validations--------------------------------


	return (
		<div className="container">
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

						<label htmlFor="accountType">Tipo de Cuenta</label>
						<div>
							<input type="text" id="accountType" name="accountType" requiredminLength="4" maxLength="17" size="35" onChange={handleAccountTypeChange}/>
							{accountTypeError && <p className="text-danger">{accountTypeError}</p>}
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

						<label htmlFor="identity">Documento de Identidad</label>
						<div>
							<input type="text" id="identity" name="identity" required minLength="4" maxLength="17" size="35" onChange={handleIdentityChange}/>
							{identityError && <p className="text-danger">{identityError}</p>}
						</div>
					</div>
        			<a href="#" className="btn btn-dark col-8 offset-2 col-md-2 offset-md-5 mt-4">Guardar</a>
				</div>
				<div className="card-footer text-muted"></div>
			</div>
		</div>

	);
};