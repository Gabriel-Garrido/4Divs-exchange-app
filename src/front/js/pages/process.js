import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

export const Process = (props) => {
    let { transaction_id } = useParams()
    console.log(transaction_id)

    useEffect(() => {transactionDataFetch()},[])

    if (!localStorage.getItem("jwt-token"))
    return <></>
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState("")
    const { store, actions } = useContext(Context);
    const [timeLeft, setTimeLeft] = useState(900);
    useEffect(() => {
        if (timeLeft === 0) {
        //   navigate('/home');
        } else {
          setTimeout(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);
        }
      }, [timeLeft, navigate]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // ----------------------GET transaction data---------------------------------
    async function transactionDataFetch() {

        const response = await fetch(`${props.URL_API}/api/get_transaction/${transaction_id}`, {
        method: ["GET"],
        headers: {
            "Content-type": "application/json",
        }});
        const data = await response.json()
        console.log(data)
        setTransaction(data)
        
    }
  // ----------------------/GET transaction data--------------------------------

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
                        <p className="fs-5"> {transaction.transaction_amount}CLP a  USD</p>


                        <div className="card">
                            <p className="fs-4">Transferir a:<br></br>
                                Empresa<br></br>
                                Rut<br></br>
                                Tipo de Cuenta <br></br>
                                Numero de Cuenta</p>
                        </div>
                        <div className="container">
                            <Link to="/home" className="btn btn-danger m-2 col-3">Realizar nueva transacción</Link>
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
