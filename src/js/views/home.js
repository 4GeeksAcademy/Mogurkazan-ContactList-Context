import React, { useContext, useState, useEffect } from "react";
import { Context } from '../store/appContext';

import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [editContactId, setEditContactId] = useState(null); 
    const [editContactData, setEditContactData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleEdit = (contactId, contactData) => {
        setEditContactId(contactId); 
        setEditContactData(contactData); 
    };

    const handleCancelEdit = () => {
        setEditContactId(null); 
        setEditContactData({ 
            name: '',
            phone: '',
            email: '',
            address: ''
        });
    };

    const handleUpdate = (contactId) => {
        actions.updateContact(contactId, editContactData); 
        setEditContactId(null); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditContactData({ ...editContactData, [name]: value });
    };
    useEffect(() => {
        actions.loadSomeData();
    }, []);

    return (
        <div className="caja container d-flex flex-column justify-content-center text-center">
            <h1>Contact List</h1>
            <div className="carta card text-start">            
                <ul className="m-0 p-0" >
                    {store.contacts?.map((contact) => (
                    <li className="contacto p-3" key={contact.id}>
                        {editContactId === contact.id ? (
                            
                            <>
                                <input className="edit" type="text" name="name" value={editContactData.name} onChange={handleInputChange} placeholder="Nombre" />
                                <input className="edit" type="text" name="phone" value={editContactData.phone} onChange={handleInputChange} placeholder="Teléfono" />
                                <input className="edit" type="email" name="email" value={editContactData.email} onChange={handleInputChange} placeholder="Correo electrónico" />
                                <input className="edit" type="text" name="address" value={editContactData.address} onChange={handleInputChange} placeholder="Dirección" />
                                <button className="edit-button mx-1" onClick={() => handleUpdate(contact.id)}>Save!</button>
                                <button className="edit-button " onClick={handleCancelEdit}>Cancel!</button>
                            </>
                        ) : (
                            
                            <>
                                <p>Name:<strong> {contact.name}</strong></p>
                                <p>Telephone: {contact.phone}</p>
                                <p>Email: {contact.email}</p>
                                <p>Address: {contact.address}</p>
                                <button className="x btn-sm rounded-pill ms-auto text-end" onClick={() => actions.deleteContact(contact.id)}><i className="fa-solid fa-trash"/></button>
                                <button className="x btn-sm rounded-pill ms-auto text-end" onClick={() => handleEdit(contact.id, contact)}><i className="fa-solid fa-pen-to-square"></i></button>
                            </>
                        )}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
