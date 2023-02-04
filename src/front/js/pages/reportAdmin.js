import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import jsPDF from "jspdf";

export const ReportAdmin = () => {
  const { store, actions } = useContext(Context);
  const [mail, setMail] = useState("");

  if (!localStorage.getItem("jwt-token"))
  	return <></>

    const handleDownloadReport = async () => {
      try {
        const response = await fetch(`${props.URL_API}/api/get_user_by_email/${store.user.email}`, {
          method: ["GET"],
          headers: {
            "Content-type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + localStorage.getItem("jwt-token")
          }});
        const data = await response.json();
  
        const doc = new jsPDF();
        doc.text(JSON.stringify(data), 10, 10);
        doc.save("reporte.pdf");
      } catch (error) {
        console.error(error);
      }
    };

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
              <input
                type="text"
                className="form-control"
                placeholder="Rut usuario"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button
                className="btn btn-dark"
                type="button"
                id="button-addon2"
                onClick={handleDownloadReport}
              >
                Descargar reporte usuario
              </button>
            </div>


            </div>
            <div className="card-footer text-muted">
            </div>
          </div>
    </div>


      
	  
      
        
      
    </div>
  );
};
