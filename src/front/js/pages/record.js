import React, { useContext , useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { RecordItem } from "../component/recordItem.js";
import "../../styles/home.css";

export const Record = (props) => {
	const { store, actions } = useContext(Context);
	console.log(store.user.id)
	if (!localStorage.getItem("jwt-token"))
  	return <></>
	
	useEffect(()=>{recordItemFetch()},[])
	const [recordItems, setRecordItems] = useState([])

	const recordItemFetch = async () => {
		try{
			const response = await fetch(`${props.URL_API}/api/get_transaction_by_user_id/${store.user.id}`,{
				method: ['GET'],
				headers: {
					"Content-type": "application/json",
				}});
			const data = await response.json();
			return setRecordItems(data.reverse())

		}catch (error) {
			console.log('there is a problem with fetch:' + error.message);
		}
		}

	return (
		<div className="container col-10 offset-1 col-md-6 offset-md-3">
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
		</div>
	);
};
