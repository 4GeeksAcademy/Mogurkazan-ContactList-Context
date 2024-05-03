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
			updateContact: async (contactId, updatedContactData) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Mogurkazan/contacts/${contactId}`, {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedContactData) 
                    });
                    if (response.ok) {
                        // Actualizar el contacto en el estado local
                        const updatedContact = await response.json();
                        const updatedContacts = getStore().contacts.map(contact => {
                            if (contact.id === contactId) {
                                return updatedContact;
                            } else {
                                return contact;
                            }
                        });
                        // Actualizar el estado con los contactos actualizados
                        setStore({ contacts: updatedContacts });
                    } else {
                        console.error(`Error: ${response.status} - ${response.statusText}`);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
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

				
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

