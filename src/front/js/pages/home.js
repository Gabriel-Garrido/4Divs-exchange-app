import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [monto, setMonto] = useState("");
	const [conversion, setConversion] = useState("");

	const [rate, setRate] = useState(890);

const handleConversion = () => {
    setConversion(monto / rate) ;
};
const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
        handleConversion();
    }
};

const handleChange = e => {
	const regex = /^\d*$/;
	if (!regex.test(e.target.value)) {
	  alert("Ingresa solo números");
	  setMonto("");
	} else {
	  setMonto(e.target.value);
	}
  };
  

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
								<li><a className="dropdown-item" href="#">1 USD / 890 CLP</a></li>
								<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
								<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
							</ul>
						</div>
					
					<p className="fs-1">1 USD / 890 CLP</p>
				</div>
				<div className="card-body row">
					<div className="mb-3 d-flex flex-column align-items-center col-8 offset-2 col-md-4 offset-md-4 ">
						
						<div className="input-group">
						<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Ingrese el monto a enviar" onChange={handleChange} value={monto} onBlur={handleConversion} onKeyDown={handleKeyPress}></input>
							<span className="input-group-text" id="basic-addon3">CLP</span>
						</div>
						<div className="form-text fs-5">Usted va a cambiar:</div>
						<p className="fs-1"> to {conversion} USD</p>
						{/* Selección de cuenta bancaria */}
							<div classList="container">
					
								<button class="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
									Seleccione cuenta bancaria  <i class="fas fa-caret-down"></i>
								</button>
								
								<div class="collapse" id="collapseExample">
									<div class="card card-body">
										
										<ul class="list-group">
						
											<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"></input>
											<label class="btn btn-outline-dark" for="option1">Cuenta bancaria 1</label>

											<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"></input>
											<label class="btn btn-outline-dark" for="option2">Cuenta bancaria 2</label>

											<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"></input>
											<label class="btn btn-outline-dark" for="option3">Cuenta bancaria 3</label>

											<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"></input>
											<label class="btn btn-outline-dark" for="option4">Cuenta bancaria 4</label>
										
										</ul>
									</div>
								</div>


							</div>
					</div>
							
						{/* /Selección de cuenta bancaria */}


						<Link to="/process" className="btn btn-dark col-8 offset-2 col-md-4 offset-md-4 fs-4">Procesar cambio</Link>
				</div>
			</div>
			

			
		</div>
	);
};
