import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const NoLogged = (props) => {
    const { store, actions } = useContext(Context)
  
    return (
        
        !store.isLoading?<div className=" container text-center col-10 offset-1 col-xl-6 offset-xl-3">
            <div className="card text-center">
                <div className="card-header fs-5">No hay una sesión iniciada
                <div className="fs-1"><i className="fas fa-user-lock"></i></div>
                </div>
                <div className="card-body">
                    <div className="container row">
                        <p>Por favor inicie sesión para acceder a esta ruta</p>
                        <Link className="btn btn-dark mb-4 col-12 offset-0 col-md-4 offset-md-4" to="/">Iniciar sesión</Link>
                    </div>
                </div>
                <div className="card-footer text-muted"></div>
            </div>
        </div>
        :
        <div className=" container text-center col-10 offset-1 col-xl-6 offset-xl-3">
            <div className="card text-center">
                <div className="card-header fs-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="card-body">
                    
                </div>
                <div className="card-footer text-muted"></div>
            </div>
        </div>
    );
};

