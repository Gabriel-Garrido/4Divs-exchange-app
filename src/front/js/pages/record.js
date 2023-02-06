import React, { useContext , useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { RecordItem } from "../component/recordItem.js";
import "../../styles/home.css";

export const Record = (props) => {

	const { store, actions } = useContext(Context);
	console.log(store.user.id)
	
	useEffect(()=>{recordItemFetch()},[])
	const [recordItems, setRecordItems] = useState([])

	const recordItemFetch = async () => {
		actions.loadingFunction(true)

		try{
			const response = await fetch(`${props.URL_API}/api/get_transaction_by_user_id/${store.user.id}`,{
				method: ['GET'],
				headers: {
					"Content-type": "application/json",
				}});
			const data = await response.json();
			actions.loadingFunction(false)
			return setRecordItems(data.reverse())

		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
			actions.loadingFunction(false)

		}
		}

	return (

		!store.isLoading?<div className="container col-10 offset-1 col-xl-6 offset-xl-3">
			<div className="card text-center">
				<div className="card-header fs-1">
					Historial
				</div>
				<div className="card-body row">
					<div className="container col-12 col-md-10 offset-md-1">
						<ul className="list-group">
						{recordItems.map(item => {
							return <RecordItem key={item.id} transactions={item} URL_API={props.URL_API}/>
						})}
						</ul>
					</div>
				</div>
			</div>
		</div>:
		<div className=" container text-center col-10 offset-1 col-xl-6 offset-xl-3">
		<div className="card text-center">
			<div className="card-header fs-5">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
			<div className="card-body">
				
			</div>
			<div className="card-footer text-muted"></div>
		</div>
	</div>
	);
};
