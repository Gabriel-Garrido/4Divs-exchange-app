import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RateAdmin = () => {
	const { store, actions } = useContext(Context);

	const [rate, setRate] = useState("");

	const handleChange = e => {
		setRate(e.target.value);
	  };
	

	return (
		
		<div className="text-center container mb-2 mt-3">

		<div className="card text-center">
			<h1>Cambio de Tasa</h1>
		<div className="card-header">
		<h2>tasa actual</h2>
		
		<div className="dropdown mb-3">
		<button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		Select exchange
		</button>
		<ul className="dropdown-menu">
		<li><a className="dropdown-item" href="#">1 CLP / 890 USD</a></li>
		<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
		<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
		</ul>
		</div>
		
		<p className="fs-1">1 CLP / {rate} USD</p>
		</div>
		<div className="card-body row">
		<div className="mb-3 d-flex flex-column align-items-center col-8 offset-2 col-md-4 offset-md-4 ">
		<label className="fs-1">1 CLP to</label>
		<input
              type="number"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Nuevo Precio"
              onChange={handleChange}
            ></input>
		</div>
		<button className="btn btn-dark col-4 offset-4">
  			Cambiar
		</button>
		</div>
		</div>
		
		</div>
	);
};
