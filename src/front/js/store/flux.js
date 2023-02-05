import { Navigate } from "react-router-dom";

	const getState = ({ getStore, getActions, setStore }) => {
	const URL_API = process.env.BACKEND_URL
	return {
		store: {
			user: null,
			transaction: null
		},
		actions: {

			newTransaction: async (user,change_id,bank_account_id,transaction_amount, conversion) => {

				let data = {
					"user_id": user, 
					"status": "", 
					"change_id": change_id, 
					"bank_account_id": bank_account_id, 
					"date": "21/01/2023", 
					"time": "20:00", 
					"transaction_amount": transaction_amount, 
					"transfer_bank_id": "not defined"
				}  
		
				await fetch(`${URL_API}/api/add_transaction`,{
					method: ["POST"],
					headers: {
					 "Content-type": "application/json; charset=utf-8",
					 "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`
					},
					body: JSON.stringify(data)
				})
				.then(res => res.json())
				.then(res=> {
					setStore({transaction:res});
				});
				console.log("Transaction= " + transaction_amount + " CLP to " + conversion + " USD in bank account number " + bank_account_id)
			},

			login: async(email, password) => {
				console.log(email + " " + password)
				const resp = await fetch(`${URL_API}/api/token`, {
				method: ["POST"],
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ "email": email, "password": password })
				})
				if(!resp.ok) {
					setLoginError(true)
					throw Error("There was a problem in the login request")
				}
				if(resp.status === 401){
					setLoginError(true)
					throw("Invalid credentials")
					
				}else if(resp.status === 400){
					setLoginError(true)
					throw ("Invalid email or password format")

					}
					const data = await resp.json()
					console.log(data)
					localStorage.setItem("jwt-token", data.token);
					setStore({user: data.user, token: data.token})
					localStorage.setItem("email", data.user.email)
			}
			,
			logout: () => {
				setStore({user: null})
				localStorage.clear()
				return console.log("No user logged")
			},
			get_user_by_email: async () => {

				if (localStorage.getItem("email") == null) {
					return "there is no user logged"
				}
				try {await fetch(`${URL_API}/api/get_user_by_email/${localStorage.getItem("email")}`, {
					method: ["GET"],
					headers: {
					  "Content-type": "application/json; charset=utf-8",
					  "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`
					}}).then(response => {
						response.json().then(data => {

							if (data.msg == "Token has expired"){
								return localStorage.clear()
							}
							setStore({user: data})
							return console.log(data)
						})
					});
				} catch (error) {
					console.log('there is a problem with fetch:' + error.message);
				}

				}
		}
	};
};

export default getState;
