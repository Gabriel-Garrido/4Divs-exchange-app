import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VerificationAdmin = () => {
	const { store, actions } = useContext(Context);

	return (
<div className="card text-center">
 			 <div className="card-header fs-1">
   					 Nuevas Verificaciones
  			</div>
  	<div className="card-body">

		<div className="container">
			<div className="card">
	  		<ul class="list-group list-group-flush">
				<div className="row">
    			<li class="list-group-item fs-4">Juan Perez <button className="btn btn-dark" id="eye"><i class="fas fa-eye"></i></button><button className="btn btn-dark col-2">Verificar Perfil</button></li>
    			</div>
				<li class="list-group-item fs-4">Maria Parra <button className="btn btn-dark" id="eye"><i class="fas fa-eye"></i></button><button className="btn btn-dark col-2">Verificar Perfil</button></li>
    			<li class="list-group-item fs-4">Pedro Garrido <button className="btn btn-dark" id="eye"><i class="fas fa-eye"></i></button><button className="btn btn-dark col-2">Verificar Perfil</button></li>
 	 		</ul>
	  		</div>
	  </div>

<nav aria-label="Page navigation example">
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
			<li className="page-item"><a className="page-link" href="#">5</a></li>
			<li className="page-item"><a className="page-link" href="#">6</a></li>
			<li className="page-item"><a className="page-link" href="#">7</a></li>
			<li className="page-item"><a className="page-link" href="#">8</a></li>
    		<li className="page-item">
      		<a className="page-link" href="#" aria-label="Next">
        	<span aria-hidden="true">&raquo;</span>
      		</a>
    		</li>
  		</ul>
</nav>

    
 	</div>
	 <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
	)
};
