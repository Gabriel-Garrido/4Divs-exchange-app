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


    //reporte general.............................................................


    const handleDownloadReportall = async () => {

      try {
        const responseUser = await fetch(`${props.URL_API}/api/get_all_users/`, {
          method: ["GET"],
          headers: {
            "Content-type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + localStorage.getItem("jwt-token")
          }});
        const dataUser = await responseUser.json();
          console.log(dataUser);
          const doc = new jsPDF();
          doc.text(`Reporte todos los usuario:`, 20, 20);
          let y = 40;
          for (let user in dataUser) {
            if (y > 280) {
             doc.addPage();
            y = 20;
            }
            doc.text(`Rut: ${dataUser[user].rut}`, 20, y);
            doc.text(`Email: ${dataUser[user].email}`, 80, y)
            doc.line(20, y + 2, 190, y + 2);
            y += 10;
            } 
            doc.save("reporte.pdf");
      } catch (error) {
        console.error(error);
      }
    };



    //reporte por usuario.............................................................


    //reporte general.............................................................


    const handleDownloadReportall = async () => {

      try {
        const responseUser = await fetch(`${props.URL_API}/api/get_all_users/`, {
          method: ["GET"],
          headers: {
            "Content-type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + localStorage.getItem("jwt-token")
          }});
        const dataUser = await responseUser.json();
          console.log(dataUser);
          const doc = new jsPDF();
          doc.text(`Reporte todos los usuario:`, 20, 20);
          let y = 40;
          for (let user in dataUser) {
            if (y > 280) {
             doc.addPage();
            y = 20;
            }
            doc.text(`Rut: ${dataUser[user].rut}`, 20, y);
            doc.text(`Email: ${dataUser[user].email}`, 80, y)
            doc.line(20, y + 2, 190, y + 2);
            y += 10;
            } 
            doc.save("reporte.pdf");
      } catch (error) {
        console.error(error);
      }
    };



    //reporte por usuario.............................................................

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
              <button className="btn btn-dark mb-4 mt-1"
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              onClick={handleDownloadReportall}>Descargar Reporte general</button>
              


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
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={handleDownloadReport}
              >
                Descargar reporte usuario
              </button>
              {mailError!=""?<p className="col-12 text-danger">{mailError}</p>:<></>}
              <div className="modal" tabIndex="-1" id="exampleModal">
            		<div className="modal-dialog">
              		<div className="modal-content">
                	<div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                	</div>
                	<div className="modal-body">
                    <p>Su reporte ha sido generado</p>
                	</div>
                	<div className="modal-footer">
                  <button className="btn btn-dark" data-bs-dismiss="modal">Aceptar</button>
                	</div>
              		</div>
            		</div>
              </div>
            </div>


            </div>
            <div className="card-footer text-muted">
            </div>
          </div>
    </div>


      
	  
      
        
      
    </div>
  );
};
