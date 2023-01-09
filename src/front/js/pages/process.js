import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom"

export const Process = () => {
	const { store, actions } = useContext(Context);

	return (
<div class="card text-center">
		<div class="card-header fs-1">
   			 En Proceso
  		</div>
  	<div class="card-body">
		<div className="container">
			<div className="card">
				<p className="fs-4">15:00 Min Para Pagar</p>
				<p className="fs-5">1CLP x 890 USD</p>

				<div className="card">
					<p className="fs-4">Transferir a:<br></br>
					Empresa<br></br>
					Rut<br></br>
					Tipo de Cuenta <br></br>
					Numero de Cuenta</p>
				</div>
				<div className="container">
								
					<Link to="/home"className="btn btn-danger m-2">Cancelar</Link>
				<Link to="/record" className="btn btn-dark  m-2">Pagado</Link>
				</div>	

			</div>



		</div>

    

  	</div>
  	<div class="card-footer text-muted">
  	</div>
</div>
	

	);
};
