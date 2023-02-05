import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const RecordItem = (props) => {
	useEffect(()=>{changeFetch(), bankAccountFetch()},[])
    let transaction = props.transactions

    const [change, setChange] = useState([])
    const [bank_account, setBank_account] = useState([])


//------------------------------------All Fetch----------------------------------------
    const changeFetch = async () => {
        try{
            const response = await fetch(`${props.URL_API}/api/get_change/${transaction.change_id}`,{
                method: ['GET'],
                headers: {
                    "Content-type": "application/json",
                }});
            const data = await response.json();
            return setChange(data)
        }catch (error) {
            console.log('there is a problem with fetch:' + error.message);
        }
        }

    const bankAccountFetch = async () => {
        try{
            const response = await fetch(`${props.URL_API}/api/get_bank_account/${transaction.bank_account_id}`,{
                method: ['GET'],
                headers: {
                    "Content-type": "application/json",
                }});
            const data = await response.json();
            return setBank_account(data)
        }catch (error) {
            console.log('there is a problem with fetch:' + error.message);
        }
        }
//------------------------------------/All Fetch----------------------------------------


    let statusPill = null
    let transform = transaction.transaction_amount / change.exchange_rate

    if (transaction.status == "Finalizado") {
        statusPill = "badge bg-success rounded-pill"
    }else if (transaction.status == "Rechazado"){
        statusPill = "badge bg-danger rounded-pill"
    }else if (transaction.status == "Pendiente"){
        statusPill = "badge bg-warning rounded-pill"
    }else {
        return console.log("status not found")
    }

	return (
		<li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{transaction.date_time}</div>
                <p>{transaction.transaction_amount} CLP a {transform.toFixed(2)} USD en la cuenta N° {bank_account.account_number} del banco {bank_account.bank}</p>
                <p>Id transacción: {transaction.id} </p>
            </div>
            <span className={statusPill}>{transaction.status}</span>
		</li>
	);
};
