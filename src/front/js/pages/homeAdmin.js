import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { RecordItemAdmin } from "../component/recordItemAdmin.js";


export const HomeAdmin = (props) => {
	if (!localStorage.getItem("jwt-token"))
  	return <></>
	useEffect(()=>{recordItemFetch()},[])

	const { store, actions } = useContext(Context);
	const [recordItems, setRecordItems] = useState([])
	const [isLoading, setIsLoading] = useState(false);

	const recordItemFetch = async () => {
		setIsLoading(true)
		try{
			const response = await fetch(`${props.URL_API}/api/get_all_transactions`,{
				method: ['GET'],
				headers: {
					"Content-type": "application/json",
				}});
			const data = await response.json();
			setRecordItems(data)
			setIsLoading(false)
		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
			setIsLoading(false)
		}
		}

	return (
		<div className="container text-center mt-5">
			<div className="card text-center">

{/* -------------------------------Vista de funcion de filtrar---------------------------------
				<div className="card-header">
					<h1 className="fs-1">Órdenes</h1>
					<div className="container d-flex justify-content-evenly">
						<div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
							<input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"></input>
							<label className="btn btn-outline-success" htmlFor="btncheck1">Finalizado</label>

							<input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"></input>
							<label className="btn btn-outline-warning mx-md-4" htmlFor="btncheck2">Pendiente</label>

							<input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"></input>
							<label className="btn btn-outline-danger" htmlFor="btncheck3">Rechazado</label>
						</div>
						<button type="button" className="btn btn-dark"><i className="fas fa-filter"></i></button>
					</div>
					
				</div> 
-------------------------------Vista de funcion de filtrar---------------------------------*/}
				{isLoading? 
				<div className="container text-center">
					<div class="spinner-border" role="status">
					<span class="sr-only">Cargando...</span>
					</div>
				</div>
				:
				<div className="card-body">
					<div className="list-group">
						{recordItems.map(item => {
							return <RecordItemAdmin key={item.id} transactions={item} URL_API={props.URL_API}/>
						})}
					</div>
				</div>}
				<div className="card-footer text-muted">
				</div>
			</div>
			
		</div>
	);
};
