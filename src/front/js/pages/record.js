import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { RecordItem } from "../component/recordItem.js";
import "../../styles/home.css";

export const Record = () => {
	const { store, actions } = useContext(Context);
	let recorItemList = [
		{date: "30-12-2022 13:00", change: "X CLP a X USD en cuenta bancaria 2", status: "Pendiente"},
		{date: "29-12-2022 16:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Pendiente"},
		{date: "28-12-2022 11:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Finalizado"},
		{date: "27-12-2022 22:00", change: "X CLP a X USD en cuenta bancaria 2", status: "Rechazado"},
		{date: "26-12-2022 03:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Finalizado"},
		{date: "25-12-2022 08:00", change: "X CLP a X USD en cuenta bancaria 3", status: "Finalizado"},
		{date: "24-12-2022 14:00", change: "X CLP a X USD en cuenta bancaria 1", status: "Finalizado"}
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
							return <RecordItem date={item.date} change={item.change} status={item.status} />
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
