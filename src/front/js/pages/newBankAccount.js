import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const NewBankAccount = () => {
	const { store, actions } = useContext(Context);

	return (
		
<div className="card text-center row">
                 <div className="card-header fs-1">
                    Nueva Cuenta Bancaria
                </div>
  <div className="card-body d-flex flex-column aling-items-center ">

		 <div>
           <label for="name">Nombre de Banco</label>
        </div>

          <div>
              <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35"/>
	      </div>

		  <div>
		  <label for="name">Tipo de Cuenta</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35"/>
		  </div>

		  <div>
		  <label for="name">Numero de Cuenta</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="22" size="35"/>
		  </div>

		  <div>
		  <label for="name">Nombre del Titular</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35"/>
		  </div>

		  <div>
		  <label for="name">Documento de Identidad</label>
		  </div>

		  <div>
		  <input type="text" id="name" name="name" required
       minlength="4" maxlength="17" size="35"/>
		  </div>


        <a href="#" className="btn btn-primary col-2 offset-5 mt-4">Guardar</a>
    
  </div>
  
  <div className="card-footer text-muted">
    2 days ago
  </div>
  
</div>

		
			

	);
};
