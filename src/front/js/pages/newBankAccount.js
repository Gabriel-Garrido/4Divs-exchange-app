import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const NewBankAccount = () => {
	const { store, actions } = useContext(Context);

	const LetrasRegex = /[a-zA-Z]+/;
	const NumerosRegex = /	^[0-9]{9}$/;
	const IdentidadRegex = /^[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9Kk]$/;

	const [Letras, setLetras] = useState("");
	const [Numeros, setNumeros] = useState("");
	const [Identidad, setIdentidad] = useState("");
	const [LetrasError, setLetrasError] = useState("");
	const [NumerosError, setNumerosError] = useState("");
	const [IdentidadError, setIdentidadError] = useState("");

	const handleLetrasChange = (e) => {
		if (!LetrasRegex.test(e.target.value)) {
		  setLetrasError("Sólo letras son válidas.");
		} else {
		  setLetrasError("");
		}
		setLetras(e.target.value);
	  };

	  const handleNumerosChange = (e) => {
		if (!LetrasRegex.test(e.target.value)) {
		  setNumerosError("Sólo numeros son válidas.");
		} else {
		  setNumerosError("");
		}
		setNumeros(e.target.value);
	  };

	  const handleIdentidadChange = (e) => {
		if (!LetrasRegex.test(e.target.value)) {
		  setIdentidadError("Formato no válido.");
		} else {
		  setIdentidadError("");
		}
		setIdentidad(e.target.value);
	  };

	return (

		<div className="container">
		
<div className="card text-center row">
                 <div className="card-header fs-1">
                    Nueva Cuenta Bancariaaaaa
                </div>
  <div className="card-body d-flex flex-column aling-items-center ">
  <div className="container">
		 <div>
           <label for="name">Nombre de Banco</label>
        </div>

          <div>
              <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35" onChange={handleLetrasChange}  />
	      </div>
		  {LetrasError && <p className="text-danger">{LetrasError}</p>}
		  <div>
		  <label for="name">Tipo de Cuenta</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35" onChange={handleLetrasChange}/>
		  </div>
		  {LetrasError && <p className="text-danger">{LetrasError}</p>}
		  <div>
		  <label for="name">Numero de Cuenta</label>
		  </div>

		  <div>
		  <input type="text" id="accountnum" name="name" required
       minlength="4" maxlength="22" size="35"  onChange={handleNumerosChange}/  >
		  </div>
		  {NumerosError && <p className="text-danger">{NumerosError}</p>}
		  <div>
		  <label for="name">Nombre del Titular</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35" onChange={handleLetrasChange}/>
		  </div>
		  {LetrasError && <p className="text-danger">{LetrasError}</p>}
		  <div>
		  <label for="name">Documento de Identidad</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35" onChange={handleIdentidadChange}/>
		  </div>
		  {IdentidadError && <p className="text-danger">{IdentidadError}</p>}
			</div>

        <a href="#" className="btn btn-dark col-8 offset-2 col-md-2 offset-md-5 mt-4">Guardar</a>
    
  </div>
  
  <div className="card-footer text-muted">
  </div>
  
</div>
</div>

	);
};