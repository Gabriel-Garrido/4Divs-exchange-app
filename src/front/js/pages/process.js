import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

export const Process = (props) => {

    if (!localStorage.getItem("jwt-token"))
    return <></>

    const { store, actions } = useContext(Context);
    const [timeLeft, setTimeLeft] = useState(900);
    const navigate = useNavigate();
    const [mount, setMount] = useState("");

    useEffect(() => {
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
                        <p className="fs-5">{mount} CLP x {props.rate} USD</p>
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
