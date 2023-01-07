import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RestorePassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>RestorePassword</h1>
			
		</div>
	);
};
