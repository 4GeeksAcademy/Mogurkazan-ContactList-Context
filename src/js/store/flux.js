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
					setStore({ contacts: data.contacts });
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			},

			deleteContact: async (contactId) => {
				try {
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/Mogurkazan/contacts/${contactId}`, {
					method: 'DELETE',
					headers: {
					  'Content-Type': 'application/json',
					},
				  });
				  if (response.ok) { // Verifica si la respuesta es exitosa
					if (response.status === 204) { // Sin contenido
					  // Si es 204, solo necesitas eliminar el contacto del estado
					  const updatedContacts = getStore().contacts.filter(contact => contact.id !== contactId);
					  setStore({ contacts: updatedContacts });
					} else {
					  // Si la respuesta tiene contenido, conviértela a JSON
					  const data = await response.json();
					  setStore({ contacts: data.contacts });
					}
				  } else {
					console.error(`Error: ${response.status} - ${response.statusText}`);
				  }
				} catch (error) {
				  console.error('Error:', error);
				}
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