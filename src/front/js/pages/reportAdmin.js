import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ReportAdmin = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>ReportAdmin</h1>
			
		</div>
	);
};
