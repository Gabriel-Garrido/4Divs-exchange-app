import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container mb-2 mt-3">

			<div className="card text-center">
				<div className="card-header">
					<p>Exchange rate</p>
					
						<div className="dropdown mb-3">
							<button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Select exchange
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">1 CLP / 890 USD</a></li>
								<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
								<li><a className="dropdown-item text-secondary" href="#">...future options</a></li>
							</ul>
						</div>
					
					<p className="fs-1">1 CLP / 890 USD</p>
				</div>
				<div className="card-body row">
					<div className="mb-3 d-flex flex-column align-items-center col-8 offset-2 col-md-4 offset-md-4 ">
						
						<div className="input-group">
							<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Enter the amount to change"></input>
							<span className="input-group-text" id="basic-addon3">CLP</span>
						</div>
						<div className="form-text fs-5">you will change:</div>
						<p className="fs-1">x CLP to x USD</p>
					
						
						{/* Selección de cuenta bancaria */}
							<div classList="container">
					
								<button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
									Select bank account  <i class="fas fa-caret-down"></i>
								</button>
								
								<div class="collapse" id="collapseExample">
									<div class="card card-body">
										
										<ul class="list-group">
						
											<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"></input>
											<label class="btn btn-outline-primary" for="option1">Bank account 1</label>

											<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"></input>
											<label class="btn btn-outline-primary" for="option2">Bank account 2</label>

											<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"></input>
											<label class="btn btn-outline-primary" for="option3">Bank account 3</label>

											<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"></input>
											<label class="btn btn-outline-primary" for="option4">Bank account 4</label>
										
										</ul>
									</div>
								</div>


							</div>
					</div>
							
						{/* /Selección de cuenta bancaria */}


						<Link to="/process" className="btn btn-primary col-8 offset-2 col-md-4 offset-md-4">Process change</Link>
				</div>
			</div>
			

			
		</div>
	);
};
