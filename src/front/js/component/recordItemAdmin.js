import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"

export const RecordItemAdmin = (props) => {

    const navigate = useNavigate()
	useEffect(()=>{changeFetch(), bankAccountFetch(), userFetch()},[])
    let transaction = props.transactions

    const [change, setChange] = useState([])
    const [bank_account, setBank_account] = useState([])
    const [recordUser, setRecordUser] = useState([])
    const [status, setStatus] = useState(transaction.status)
    const [transferId, setTransferId] = useState ("")

    let transform = transaction.transaction_amount / change.exchange_rate

//---------------------------------All fetch GET----------------------------------------
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

    const userFetch = async () => {
        try{
            const response = await fetch(`${props.URL_API}/api/get_user/${transaction.user_id}`,{
                method: ['GET'],
                headers: {
                    "Content-type": "application/json",
                }});
            const data = await response.json();
            return setRecordUser(data)
        }catch (error) {
            console.log('there is a problem with fetch:' + error.message);
        }
        }
//---------------------------------/All fetch----------------------------------------


//-----------------------------Change status Fetch------------------------------------
    const changeStatus = async(newStatus, id) => {
        let data = {
            "status": newStatus
          } 
          try {
            await fetch (`${props.URL_API}/api/edit_transaction/${id}`, {
                method: ["PUT"],
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(data)
                    
            })
            .then(
                data => {console.log(data.status)
                setStatus(newStatus)
                console.log("se cambio el estado a " + newStatus + id)}
            )

          }catch (error) {
          console.error(error)
        }  
    }    
//-----------------------------/Change status Fetch------------------------------------

        
	return (
		<div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 fs-4">{recordUser.first_name} {recordUser.last_name}</h5>

                {status === 'Pendiente' ? <span className="badge rounded-pill bg-warning">{status}</span>:<></>}
                {status === 'Finalizado' ? <span className="badge rounded-pill bg-success">{status}</span>:<></>}
                {status === 'Rechazado' ? <span className="badge rounded-pill bg-danger">{status}</span>:<></>}

            </div>
            <p className="mb-1 text-start fs-5">{transaction.transaction_amount} CLP a {transform} USD a la cuenta N° {bank_account.account_number} del banco {bank_account.bank}</p>
            <p className="mb-1 text-start fs-6">Solicitado el {transaction.date_time}</p>
            <button className="btn btn-warning" data-bs-toggle="modal" onClick={() => changeStatus("Pendiente", props.transactions.id)}>Pendiente</button>

<p>ID: {transaction.id}</p>
            {status === 'Pendiente' ?<div className="input-group mb-3">
                
                    <input type="text" className="form-control" placeholder="ID de transferencia" aria-label="ID de transferencia" aria-describedby="button-addon2"></input>

                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target={"#successModal"+transaction.id+""} >Finalizar</button>
                    
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#rejectModal"+transaction.id+""} >Rechazar</button>                
                
            </div>:<></>}

            <div className="modal" tabIndex="-1" id={"successModal"+transaction.id+""} >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>El estado va a cambiar a:</p>
                    <span className="badge rounded-pill bg-success">Finalizado</span>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar {props.transactions.id}</button> 

                    <button className="btn btn-dark" onClick={() => changeStatus("Finalizado", props.transactions.id)} data-bs-dismiss="modal">Confirmar el cambio</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal" tabIndex="-1" id={"rejectModal"+transaction.id+""}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>El estado va a cambiar a:</p>
                    <span className="badge rounded-pill bg-danger">Rechazado</span>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button className="btn btn-dark" onClick={() => changeStatus("Rechazado", props.transactions.id)} data-bs-dismiss="modal">Confirmar el cambio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
	);
};
