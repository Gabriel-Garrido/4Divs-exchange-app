import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const HomeAdmin = () => {
	const { store, actions } = useContext(Context);
	const [status, setStatus] = useState("pendiente");

	return (
		<div className="container text-center mt-5">
			<div class="card text-center">
				<div class="card-header">
					<h1 class="fs-1">Órdenes</h1>
					<div class="container d-flex justify-content-evenly">
						<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
							<input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"></input>
							<label class="btn btn-outline-success" for="btncheck1">Finalizado</label>

							<input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"></input>
							<label class="btn btn-outline-warning mx-md-4" for="btncheck2">Pendiente</label>

							<input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"></input>
							<label class="btn btn-outline-danger" for="btncheck3">Rechazado</label>
						</div>
						<button type="button" class="btn btn-dark"><i class="fas fa-filter"></i></button>
					</div>
					
				</div>
				<div class="card-body">

					<div class="list-group">

						{/* Pendiente */}
						<div class="list-group-item">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1 fs-4">Juan Perez</h5>
								<span className={`badge rounded-pill ${status === 'pendiente' ? 'bg-warning': status === 'finalizado' ? 'bg-success' : 'bg-danger' }`}>{status}</span>
							</div>
							<p class="mb-1 text-start fs-5">X CLP a X USD</p>
							<p class="mb-1 text-start fs-6">Solicitado el 24-12-2022 14:30</p>
								<div class="input-group mb-3">
									<input type="text" class="form-control" placeholder="ID de transferencia" aria-label="ID de transferencia" aria-describedby="button-addon2"></input>
									<div class="dropdown">
										<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											Dropdown button
										</button>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="#" onClick={() => setStatus('finalizado')}>Finalizar</a></li>
											<li><a class="dropdown-item" href="#" onClick={() => setStatus('rechazado')}>Rechazar</a></li>
											
										</ul>
									</div>
								</div>
						</div>

						{/* Finalizado */}
						<div class="list-group-item text-muted">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1 fs-4">Carlos Mario</h5>
								<span class="badge bg-success rounded-pill">Finalizado</span>
							</div>
							<p class="mb-1 text-start fs-5">X CLP a X USD</p>
							<p class="mb-1 text-start fs-6">Solicitado el 24-12-2022 14:30</p>
							<p class="mb-1 text-start fs-6">Finalizado el 25-12-2022 13:30</p>
						</div>

						{/* Rechazado */}
						<div class="list-group-item text-muted">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1 fs-4">Luis Miguel</h5>
								<span class="badge bg-danger rounded-pill">Rechazado</span>
							</div>
							<p class="mb-1 text-start fs-5">X CLP a X USD</p>
							<p class="mb-1 text-start fs-6">Solicitado el 23-12-2022 11:00</p>
							<p class="mb-1 text-start fs-6">Rechadao el 24-12-2022 16:15</p>
						</div>

					</div>

					{/* Páginas */}

					<nav class="mt-4 d-flex justify-content-center" aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
							</li>
							<li class="page-item"><a class="page-link" href="#">1</a></li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
							</li>
						</ul>
					</nav>

					
				</div>
				<div class="card-footer text-muted">


				</div>
			</div>
			
		</div>
	);
};
