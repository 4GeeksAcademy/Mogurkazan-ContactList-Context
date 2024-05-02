const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[
				{
					name:"name",
					phone:"1234",
					email:"email@email",
					address:"address"
					
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Mogurkazan/contacts')
				.then((response) => response.json())
				.then((data) => setStore({contacts:data.contacts}));
			},
			addContact: (newContact) => {
				fetch('https://playground.4geeks.com/contact/agendas/Mogurkazan/contacts',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newContact)
				})
				.then((response) => response.json())
				.then((data) => {
					// Aquí manejas la respuesta del servidor si es necesario
					// Por ejemplo, actualizas el estado con los nuevos datos recibidos
					setStore({ contacts: data.contacts });
				})
				.catch((error) => {
					// Aquí manejas los errores si la solicitud falla
					console.error('Error:', error);
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

//entender la api, ser capaz de crear usuarios y elementos
//linkearlo al documento con un fetch
//pasar ese fetch al actions de flux
//que el resultado del fetch se vuelque en el demo
//llamar al demo desde home para ponerlo en el html importando useContext, etc
//hacer un POST a la API
//estilos