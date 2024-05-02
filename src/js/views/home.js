import React, { useEffect, useState, useContext } from "react";
import {Context} from '../store/appContext'

import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const [formName, setFormName] = useState({name: ''})
	useEffect(() =>  {

		actions.loadSomeData()
	},[]);
	return (
		<div className="caja container d-flex flex-column justify-content-center text-center">
			<h1>To Do List</h1>
			<div className="carta card">			
				<ul className="m-0 p-0" >
					{store.contacts?.map((contact) => (
					<div key={contact.id}>
						<p>Nombre: {contact.name}</p>
						<p>Teléfono: {contact.phone}</p>
						<p>Correo electrónico: {contact.email}</p>
						<p>Dirección: {contact.address}</p>
					</div>
					))}
				</ul>
				<p className="pie text-start p-2"> items left</p>
			</div>
	
		</div>
	// <div className="text-center mt-5">
	// 	<p>{store.demo[1].title}</p>
	// 	<h2>Lista contactos</h2>
	// 	 	{store.contacts?.map((contact) => (
	// 	 		<div key={contact.id}>
	// 	 			<p>Nombre: {contact.name}</p>
    //        			<p>Teléfono: {contact.phone}</p>
    //        			<p>Correo electrónico: {contact.email}</p>
    //        			<p>Dirección: {contact.address}</p>
    //      		</div>
	// 	 	))}
	// 	<button>Crear</button>
	// 	<button>Editar</button>
	// 	<button>Borrar</button>
	// </div>
)};

		// FORM//////////////////////////
		// const [showForm, setShowForm] = useState(false);
		// const toggleForm = () => {
		// 	setShowForm(!showForm);
		// };

		// return (
		// 	<div>
		// 		<button onClick={toggleForm}>Mostrar Formulario</button>
		// 		{showForm && <ContactForm />}
		// 	</div>
		// );