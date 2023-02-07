import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { NumericFormat } from "react-number-format";

import { Link } from "react-router-dom";

export const RecordItem = (props) => {
	useEffect(()=>{changeFetch(), bankAccountFetch()},[])
    let transaction = props.transactions
	const { store, actions } = useContext(Context);
    const [change, setChange] = useState([])
    const [bank_account, setBank_account] = useState([])


//------------------------------------All Fetch----------------------------------------
    const changeFetch = async () => {
        actions.loadingFunction(true)
        try{
            const response = await fetch(`${props.URL_API}/api/get_change/${transaction.change_id}`,{
                method: ['GET'],
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`

                }});
            const data = await response.json();
            actions.loadingFunction(false)

            return setChange(data)
        }catch (error) {
            console.log('there is a problem with fetch:' + error.message);
            actions.loadingFunction(false)
        }
        }

    const bankAccountFetch = async () => {
        try{
            const response = await fetch(`${props.URL_API}/api/get_bank_account/${transaction.bank_account_id}`,{
                method: ['GET'],
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`

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
                <p><NumericFormat value={transaction.transaction_amount} displayType={'text'} thousandSeparator={true} /> CLP a <NumericFormat value={transform.toFixed(2)} displayType={'text'} thousandSeparator={true} /> USD en la cuenta N° {bank_account.account_number} del banco {bank_account.bank}</p>
                <p>Id transacción: {transaction.id} </p>
            </div>
            <span className={statusPill}>{transaction.status}</span>
		</li>
	);
};
