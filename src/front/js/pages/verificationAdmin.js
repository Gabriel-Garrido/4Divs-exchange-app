import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VerificationAdmin = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-header fs-1">
						Nuevas Verificaciones
				</div>
				<div className="card-body">

				<div className="card">
			<div className="container">
				<ul className="list-group list-group-flush">
					<div className="d-flex flex-column">
					<li className="list-group-item fs-4">Juan Perez
						<button id="eye" type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
							<i className="fas fa-eye"></i>
						</button>
						<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h1 className="modal-title fs-5" id="exampleModalLabel">Juan Perez</h1>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body">
										...
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
										<button type="button" className="btn btn-primary">Verificar</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					</div>
					<li className="list-group-item fs-4">Maria Parra <button id="eye" type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
							<i className="fas fa-eye"></i>
						</button>
						<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h1 className="modal-title fs-5" id="exampleModalLabel">Maria Parra</h1>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body">
										...
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
										<button type="button" className="btn btn-primary">Verificar</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="list-group-item fs-4">Pedro Garrido <button id="eye" type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
							<i className="fas fa-eye"></i>
						</button>
						<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h1 className="modal-title fs-5" id="exampleModalLabel">Pedro Garrido</h1>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body">
										...
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
										<button type="button" className="btn btn-primary">Verificar</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				</div>
		</div>

	<nav aria-label="Page navigation example" className="text-center">
			<ul className="pagination col-12 col-4 offset-4">
				<li className="page-item">
					<a className="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li className="page-item"><a className="page-link" href="#">1</a></li>
				<li className="page-item"><a className="page-link" href="#">2</a></li>
				<li className="page-item"><a className="page-link" href="#">3</a></li>
				<li className="page-item"><a className="page-link" href="#">4</a></li>
				
				<li className="page-item">
				<a className="page-link" href="#" aria-label="Next">
				<span aria-hidden="true">&raquo;</span>
				</a>
				</li>
			</ul>
	</nav>
	</div>


		
 	</div>
	 <div className="card-footer text-muted">
    2 days ago
  </div>
  
</div>
	)
};
