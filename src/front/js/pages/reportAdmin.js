import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ReportAdmin = () => {
  const { store, actions } = useContext(Context);

  if (!localStorage.getItem("jwt-token"))
  	return <></>

  return (
    <div className="container col-10 offset-1 col-md-6 offset-md-3">
      <div className="text-center mt-5">

          <div className="card text-center">
            <div className="card-header">
              <h1>Reporte</h1>
            </div>
            <div className="card-body">
              <button className="btn btn-dark mb-4 mt-1">Descargar Reporte general</button>
              <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Rut usuario" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
              <button className="btn btn-dark" type="button" id="button-addon2">Descargar reporte usuario</button>
            </div>


            </div>
            <div className="card-footer text-muted">
            </div>
          </div>
    </div>


      
	  
      
        
      
    </div>
  );
};
