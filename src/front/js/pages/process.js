import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Process = () => {
    const { store, actions } = useContext(Context);
    const [timeLeft, setTimeLeft] = useState(900);
    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div class="card text-center">
            <div class="card-header fs-1">
                En Proceso
            </div>
            <div class="card-body">
                <div className="container">
                    <div className="card">
                        <p className="fs-4">{minutes}:{seconds.toString().padStart(2, "0")} Min Para Pagar</p>
                        <p className="fs-5">1CLP x 890 USD</p>

                        <div className="card">
                            <p className="fs-4">Transferir a:<br></br>
                                Empresa<br></br>
                                Rut<br></br>
                                Tipo de Cuenta <br></br>
                                Numero de Cuenta</p>
                        </div>
                        <div className="container">
                            <Link to="/home" className="btn btn-danger m-2 col-3">Cancelar</Link>
                            <Link to="/record" className={`btn btn-dark m-2 col-3 ${timeLeft === 0 ? 'disabled' : ''}`}>Pagado</Link>
                        </div>

                    </div>



                </div>



            </div>
            <div class="card-footer text-muted">
            </div>
        </div>
    );
};
