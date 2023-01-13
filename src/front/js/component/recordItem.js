import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const RecordItem = (props) => {
    let statusPill = null

    if (props.status == "Finalizado") {
        statusPill = "badge bg-success rounded-pill"
    }else if (props.status == "Rechazado"){
        statusPill = "badge bg-danger rounded-pill"
    }else if (props.status == "Pendiente"){
        statusPill = "badge bg-warning rounded-pill"
    }else {
        return console.log("status not found")
    }

	return (
		<li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold">{props.date}</div>
            {props.change}
            </div>
            <span className={statusPill}>{props.status}</span>
		</li>
	);
};
