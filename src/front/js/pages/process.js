import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { NumericFormat } from 'react-number-format';

export const Process = (props) => {

    if (!localStorage.getItem("jwt-token"))
    return <></>

    const { store, actions } = useContext(Context);
    const [timeLeft, setTimeLeft] = useState(900);
    const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();
    const [mount, setMount] = useState("");

    useEffect(() => {
        transactionFetch()
        setMount(store.transaction.transaction_amount)
    },[]);

    useEffect(() => {
        if (timeLeft === 0) {
          navigate('/home');
        } else {
          setTimeout(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);
        }
      }, [timeLeft, navigate]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const transactionFetch = async () => {
		try{
			const response = await fetch(`${props.URL_API}/api/get_transaction_by_user_id/${store.user.id}`,{
				method: ['GET'],
				headers: {
					"Content-type": "application/json",
				}});
			const data = await response.json();
            console.log(data)
			return setTransactionId(data[data.length -1].id)

		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
		}
		}


//-----------------------------Change status Fetch------------------------------------
const changeStatus = async() => {
    console.log(transactionId)
    let data = {
        "status": "Rechazado"
      } 
      try {
        await fetch (`${props.URL_API}/api/edit_transaction/${transactionId}`, {
            method: ["PUT"],
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data)
                
        })
        .then(
            data => {console.log(data.status)
            console.log("se cambio el estado a Rechazado " + transactionId)}
        )

      }catch (error) {
      console.error(error)
    }  
}    

function redirect() {
	if (store.user.admin) {
	  navigate("/homeadmin")
	  } else {
	  navigate("/home");
	  }
  }
//-----------------------------/Change status Fetch------------------------------------



    return (
        <div className="container col-10 offset-1 col-md-6 offset-md-3">
        <div className="card text-center">
            <div className="card-header fs-1">
                En Proceso
            </div>
            <div className="card-body">
                <div className="container">
                    <div className="card">
                        <p className="fs-4">{minutes}:{seconds.toString().padStart(2, "0")} Min Para Pagar</p>
                        <p className="fs-5">
                            <NumericFormat value={mount} displayType={'text'} thousandSeparator={true} /> CLP x  <NumericFormat value={mount / props.rate} displayType={'text'} thousandSeparator={true}  /> USD
                        </p>
                        <div className="card">
                            <span className="text-black">Transferir a:</span>
                            <p className="fs-4 text-left">
                                <span className="d-inline-block key-color">Empresa: </span><span className="d-inline-block value-color">Innovación y Tecnología Empresarial ITEM Ltda</span>
                                <br></br>
                                <span className="d-inline-block key-color">Rut: </span><span className="d-inline-block value-color">78.936.330-7</span>
                                <br></br>
                                <span className="d-inline-block key-color">Banco: </span><span className="d-inline-block value-color">Banco de Chile</span>
                                <br></br>
                                <span className="d-inline-block key-color">Tipo de Cuenta: </span><span className="d-inline-block value-color">Cuenta corriente</span>
                                <br></br>
                                <span className="d-inline-block key-color">Numero de Cuenta: </span><span className="d-inline-block value-color">8000519701</span>
                                <br></br>
                                <span className="d-inline-block key-color">Email: </span><span className="d-inline-block value-color">web@maconline.cl</span>
                            </p>
                        </div>
                        <div className="container">
                            <button type="button" className="btn btn-danger m-2 col-3" onClick={changeStatus} data-bs-toggle="modal" data-bs-target="#exampleModal">Cancelar</button>
                            <div className="modal" tabIndex="-1" id="exampleModal">
            		<div className="modal-dialog">
              		<div className="modal-content">
                	<div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                	</div>
                	<div className="modal-body">
                    <p>Desea Cancelar La Orden</p>
                	</div>
                	<div className="modal-footer">
                  <button className="btn btn-dark" onClick={redirect} data-bs-dismiss="modal">Aceptar</button>
                	</div>
              		</div>
            		</div>
          </div>







                            <Link to="/record" className={`btn btn-dark m-2 col-3 ${timeLeft === 0 ? 'disabled' : ''}`}>Ver historial</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
            </div>
        </div>
        </div>
    );
};
