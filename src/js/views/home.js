import React, { useContext, useState } from "react";
import { Context } from '../store/appContext';

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [editContactId, setEditContactId] = useState(null); // Para almacenar el ID del contacto que se está editando

	const handleEdit = (contactId) => {
		setEditContactId(contactId); // Al presionar el botón "O", establece el ID del contacto que se está editando
	};

	const handleCancelEdit = () => {
		setEditContactId(null); // Al cancelar la edición, restablece el ID del contacto a null
	};

	const handleUpdate = (contactId) => {
		// Obtiene los datos del contacto que se está editando
		const updatedContact = {
			name: document.getElementById(`name-${contactId}`).value,
			phone: document.getElementById(`phone-${contactId}`).value,
			email: document.getElementById(`email-${contactId}`).value,
			address: document.getElementById(`address-${contactId}`).value
		};
		actions.updateContact(contactId, updatedContact); // Ejecuta la función para actualizar el contacto
		setEditContactId(null); // Restablece el ID del contacto a null después de actualizar
	};

	return (
		<div className="caja container d-flex flex-column justify-content-center text-center">
			<h1>Contact List</h1>
			<div className="carta card text-start">			
				<ul className="m-0 p-0" >
					{store.contacts?.map((contact) => (
					<div className="contacto p-3" key={contact.id}>
						{editContactId === contact.id ? (
							// Muestra campos de entrada para editar los datos del contacto si está en modo edición
							<>
								<input className="edit" type="text" id={`name-${contact.id}`} defaultValue={contact.name} placeholder="Nombre" />
								<input className="edit" type="text" id={`phone-${contact.id}`} defaultValue={contact.phone} placeholder="Teléfono" />
								<input className="edit" type="email" id={`email-${contact.id}`} defaultValue={contact.email} placeholder="Correo electrónico" />
								<input className="edit" type="text" id={`address-${contact.id}`} defaultValue={contact.address} placeholder="Dirección" />
								<button className="edit-button mx-1" onClick={() => handleUpdate(contact.id)}>Save!</button>
								<button className="edit-button " onClick={handleCancelEdit}>Cancel!</button>
							</>
						) : (
							// Muestra los datos del contacto si no está en modo edición
							<>
								<p>Name:<strong> {contact.name}</strong></p>
								<p>Telephone: {contact.phone}</p>
								<p>Email: {contact.email}</p>
								<p>Address: {contact.address}</p>
								<button className="x btn-sm rounded-pill ms-auto text-end" onClick={() => actions.deleteContact(contact.id)}><i class="fa-solid fa-trash"/></button>
								<button className="x btn-sm rounded-pill ms-auto text-end" onClick={() => handleEdit(contact.id)}><i class="fa-solid fa-pen-to-square"></i></button>
							</>
						)}
					</div>
					))}
				</ul>
			</div>
		</div>
	);
};
