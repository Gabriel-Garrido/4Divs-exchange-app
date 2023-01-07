import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ReportAdmin = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Reporte</h1>
	  
      
        <button className="btn btn-dark">Descargar Reporte</button>
      
    </div>
  );
};
