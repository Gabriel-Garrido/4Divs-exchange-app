import React, { useContext , useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { RecordItem } from "../component/recordItem.js";
import "../../styles/home.css";

export const Record = () => {
	const { store, actions } = useContext(Context);
	const [recordItems, setRecordItems] = useState([])
	useEffect(() => {recordItemFetch()},[])

	async function recordItemFetch() {
		try{
			const response = await fetch("https://3001-gabrielgarr-4geeksproye-i4kluan14jz.ws-us83.gitpod.io/api/get_all_transactions",
			{
				method: ['GET'],
				headers: {
					"Content-type": "application/json; charset=utf-8",
					"Access-Control-Allow-Origin": "*",
				}});
			const data = await response.json()
			setRecordItems(data)
			
		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
		  	}
		  	console.log(recordItems)
		}

	let recorItemList = [

		{id: 1, date: recordItems.date, change: "X CLP a X USD en cuenta bancaria 2", status: "Pendiente"},
		{id: 2, date: "29-12-2022 16:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Pendiente"},
		{id: 3, date: "28-12-2022 11:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Finalizado"},
		{id: 4, date: "27-12-2022 22:00", change: "X CLP a X USD en cuenta bancaria 2", status: "Rechazado"},
		{id: 5, date: "26-12-2022 03:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Finalizado"},
		{id: 6, date: "25-12-2022 08:00", change: "X CLP a X USD en cuenta bancaria 3", status: "Finalizado"},
		{id: 7, date: "24-12-2022 14:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Finalizado"}

	]

	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-header fs-1">
					Historial
				</div>
				<div className="card-body row">
					<div className="container col-12 col-md-10 offset-md-1">
						<ul className="list-group">
						{recorItemList.map(item => {
							return <RecordItem key={item.id} date={item.date} change={item.change} status={item.status} />
						})}
							
						</ul>
					</div>

				</div>
				<div className="card-footer text-muted">
					
					<nav aria-label="Page navigation example" className="d-flex justify-content-center">
						<ul className="pagination">
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
								</a>
							</li>

							<li className="page-item"><a className="page-link" href="#">1</a></li>
							<li className="page-item"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>

							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
								</a>
							</li>
						</ul>
					</nav>

				</div>
			</div>
		</div>
	);
};
