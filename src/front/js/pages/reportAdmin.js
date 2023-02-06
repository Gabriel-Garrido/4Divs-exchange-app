import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import jsPDF from "jspdf";

export const ReportAdmin = (props) => {

  useEffect(() => {
		if (localStorage.getItem("email") == null) {
		navigate("/")
		return "no user logged"
	}},[])

  const { store, actions } = useContext(Context);
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState("")

    const handleDownloadReport = async () => {

      try {
        const responseUser = await fetch(`${props.URL_API}/api/get_user_by_email/${mail}`, {
          method: ["GET"],
          headers: {
            "Content-type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + localStorage.getItem("jwt-token")
          }});
        const responseTransaction = await fetch(`${props.URL_API}/api/get_user_report_by_email/${mail}`, {
          method: ["GET"],
          headers: {
            "Content-type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + localStorage.getItem("jwt-token")
          }});
        const dataUser = await responseUser.json();
          console.log(dataUser);
        const dataTransaction = await responseTransaction.json();
          console.log(dataTransaction);
          const doc = new jsPDF();
          doc.text(`Reporte transacciones usuario: ${mail}`, 20, 20);
          let y = 40;
          for (let transaction in dataTransaction) {
            if (y > 280) {
             doc.addPage();
            y = 20;
            }
            doc.text(`Id transacción: ${dataTransaction[transaction].id}`, 20, y);
            doc.text(`Monto transacción: ${dataTransaction[transaction].transaction_amount}`, 90, y)
            doc.line(20, y + 2, 190, y + 2);
            y += 10;
            } 
            doc.save("reporte.pdf");
            setMailError("")
      } catch (error) {
        console.error(error);
        setMailError("Error en la solicitud de reporte de usuario")
      }
    };

  return (
    <div className="container col-10 offset-1 col-xl-6 offset-xl-3">
      <div className="text-center mt-5">

          <div className="card text-center">
            <div className="card-header">
              <h1>Reporte</h1>
            </div>
            <div className="card-body">
              <button className="btn btn-dark mb-4 mt-1">Descargar Reporte general</button>
              <div className="input-group mb-3">
              <input
                type="text"
                className="form-control col-12 col-md-8"
                placeholder="Mail usuario"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button
                className="btn btn-dark col-12 col-md-4"
                type="button"
                id="button-addon2"
                onClick={handleDownloadReport}
              >
                Descargar reporte usuario
              </button>
              {mailError!=""?<p className="col-12 text-danger">{mailError}</p>:<></>}
            </div>


            </div>
            <div className="card-footer text-muted">
            </div>
          </div>
    </div>


      
	  
      
        
      
    </div>
  );
};
