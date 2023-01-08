import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Record = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-header fs-1">
					Historial
				</div>
				<div className="card-body row">
					<div className="container col-12 col-md-10 offset-md-1">
						<ul className="list-group">
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
								<div className="fw-bold">30-12-2022 14:00</div>
								X CLP a X USD en cuenta bancaria 1
								</div>
								<span className="badge bg-success rounded-pill">Finalizado</span>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
								<div className="fw-bold">28-12-2022 17:30</div>
								X CLP a X USD en cuenta bancaria 3
								</div>
								<span className="badge bg-danger rounded-pill">Rechazado</span>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
								<div className="fw-bold">27-12-2022 11:15</div>
								X CLP a X USD en cuenta bancaria 1
								</div>
								<span className="badge bg-warning rounded-pill">Pendiente</span>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
								<div className="fw-bold">25-12-2022 18:00</div>
								X CLP a X USD en cuenta bancaria 2
								</div>
								<span className="badge bg-success rounded-pill">Finalizado</span>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
								<div className="fw-bold">22-12-2022 13:15</div>
								X CLP a X USD en cuenta bancaria 3
								</div>
								<span className="badge bg-warning rounded-pill">Pendiente</span>
							</li>
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
