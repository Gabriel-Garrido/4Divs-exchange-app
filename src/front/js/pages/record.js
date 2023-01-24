import React, { useContext , useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { RecordItem } from "../component/recordItem.js";
import "../../styles/home.css";

export const Record = (props) => {
	useEffect(()=>{recordItemFetch()},[])
	const [recordItems, setRecordItems] = useState([])
	const recordItemFetch = async () => {
		try{
			const response = await fetch(`${props.URL_API}/api/get_all_transactions`,{
				method: ['GET'],
				headers: {
					"Content-type": "application/json",
				}});
			const data = await response.json();
			return setRecordItems(data)
		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
		}
		}

		console.log(recordItems)

	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-header fs-1">
					Historial
				</div>
				<div className="card-body row">
					<div className="container col-12 col-md-10 offset-md-1">
						<ul className="list-group">
						{recordItems.map(item => {
							return <RecordItem key={item.id} date={item.date_time} change={item.change} status={item.status} />
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
