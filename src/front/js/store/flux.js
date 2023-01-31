const getState = ({ getStore, getActions, setStore }) => {
	const URL_API = process.env.BACKEND_URL
	return {
		store: {
			user: null
		},
		actions: {
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
					setStore({user: data.user})
			}
			,
			logout: () => {
				setStore({user: null})

			}
		}
	};
};

export default getState;
