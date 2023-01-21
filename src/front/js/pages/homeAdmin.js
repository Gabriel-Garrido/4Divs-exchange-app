import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const HomeAdmin = () => {
	const { store, actions } = useContext(Context);
	const [status, setStatus] = useState("pendiente");

	return (
		<div className="container text-center mt-5">
			<div className="card text-center">
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
				<div className="card-body">

					<div className="list-group">

						{/* Pendiente */}
						<div className="list-group-item">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1 fs-4">Juan Perez</h5>
								<span className={`badge rounded-pill ${status === 'pendiente' ? 'bg-warning': status === 'finalizado' ? 'bg-success' : 'bg-danger' }`}>{status}</span>
							</div>
							<p className="mb-1 text-start fs-5">X CLP a X USD</p>
							<p className="mb-1 text-start fs-6">Solicitado el 24-12-2022 14:30</p>
								<div className="input-group mb-3">
									<input type="text" className="form-control" placeholder="ID de transferencia" aria-label="ID de transferencia" aria-describedby="button-addon2"></input>
									<div className="dropdown">
										<button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											Cambiar Estatus
										</button>
										<ul className="dropdown-menu">
											<li><a className="dropdown-item" href="#" onClick={() => setStatus('finalizado')}>Finalizar</a></li>
											<li><a className="dropdown-item" href="#" onClick={() => setStatus('rechazado')}>Rechazar</a></li>
											
										</ul>
									</div>
								</div>
						</div>

						{/* Finalizado */}
						<div className="list-group-item text-muted">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1 fs-4">Carlos Mario</h5>
								<span className="badge bg-success rounded-pill">Finalizado</span>
							</div>
							<p className="mb-1 text-start fs-5">X CLP a X USD</p>
							<p className="mb-1 text-start fs-6">Solicitado el 24-12-2022 14:30</p>
							<p className="mb-1 text-start fs-6">Finalizado el 25-12-2022 13:30</p>
						</div>

						{/* Rechazado */}
						<div className="list-group-item text-muted">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1 fs-4">Luis Miguel</h5>
								<span className="badge bg-danger rounded-pill">Rechazado</span>
							</div>
							<p className="mb-1 text-start fs-5">X CLP a X USD</p>
							<p className="mb-1 text-start fs-6">Solicitado el 23-12-2022 11:00</p>
							<p className="mb-1 text-start fs-6">Rechadao el 24-12-2022 16:15</p>
						</div>

					</div>

					{/* Páginas */}

					<nav className="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
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
				<div className="card-footer text-muted">


				</div>
			</div>
			
		</div>
	);
};
