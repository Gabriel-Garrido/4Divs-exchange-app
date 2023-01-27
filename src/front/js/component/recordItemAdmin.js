import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"

export const RecordItemAdmin = (props) => {

    const navigate = useNavigate()
	useEffect(()=>{changeFetch(), bankAccountFetch(), userFetch()},[])
    let transaction = props.transactions
    console.log(transaction.id)

    const [change, setChange] = useState([])
    const [bank_account, setBank_account] = useState([])
    const [recordUser, setRecordUser] = useState([])
    const [status, setStatus] = useState(transaction.status)
    const [transferId, setTransferId] = useState ("")

    let transform = transaction.transaction_amount / change.exchange_rate

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

    const changeStatus = async(newStatus) => {
        let data = {
            "status": newStatus
          } 
          try {
            await fetch (`${props.URL_API}/api/edit_transaction/${transaction.id}`, {
                method: ["PUT"],
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(data)
                    
            })
            setStatus(newStatus)
            console.log("se cambio el estado a " + newStatus + transaction.id)

          }catch (error) {
          console.error(error)
        }  
    }    
        
	return (
		<div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 fs-4">{recordUser.first_name} {recordUser.last_name}</h5>

                {status === 'Pendiente' ? <span className="badge rounded-pill bg-warning">{status}</span>:<></>}
                {status === 'Finalizado' ? <span className="badge rounded-pill bg-success">{status}</span>:<></>}
                {status === 'Rechazado' ? <span className="badge rounded-pill bg-danger">{status}</span>:<></>}

            </div>
            <p className="mb-1 text-start fs-5">{transaction.transaction_amount} CLP a {transform} USD a la cuenta N° {bank_account.account_number} del banco {bank_account.bank}</p>
            <p className="mb-1 text-start fs-6">Solicitado el 24-12-2022 14:30</p>

            {status === 'Pendiente' ?<div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="ID de transferencia" aria-label="ID de transferencia" aria-describedby="button-addon2"></input>

                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#successModal" >Finalizar</button>
                
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#rejectModal" >Rechazar</button>
                   
            </div>:<></>}

            <div className="modal" tabIndex="-1" id="successModal">
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
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                    <button className="btn btn-dark" onClick={() => changeStatus("Finalizado")} data-bs-dismiss="modal">Confirmar el cambio</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal" tabIndex="-1" id="rejectModal">
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
                    <button className="btn btn-dark" onClick={() => changeStatus("Rechazado")} data-bs-dismiss="modal">Confirmar el cambio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
	);
};
