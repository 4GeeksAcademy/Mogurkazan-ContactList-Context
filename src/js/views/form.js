import React, { useContext, useState } from "react";
import {Context} from '../store/appContext';


import "../../styles/home.css";

export const Form = () => {
	const {store, actions} = useContext(Context)
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(formData); 
        setFormData({ 
            name: '',
            address: '',
            email: '',
            phone: ''
        });
    };

	
	return (
	<div className="caja-form container-flex  justify-content-center align-items-center"> 
        <form onSubmit={handleSubmit}>
            <div className="items-form mb-3 ">
                <span className=" input-group-text">Name and Address</span>
                <input type="text" aria-label="First name" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                <input type="text" aria-label="Address" name="address" className="form-control" placeholder="Address" value={formData.address} onChange={handleChange} required/>
            </div>
            <div className="items-form mb-3">
                <label htmlFor="emailAddress" className="input-group-text">Email</label>
                <input type="email" name="email" className="form-control" id="emailAddress" placeholder="name@example.com" value={formData.email} onChange={handleChange} required/>
            </div>  
            <div className="items-form mb-3">
                <label htmlFor="tlf" className="input-group-text">Telephone</label>
                <input type="text" name="phone" className="form-control" id="tlf" placeholder="00000000" value={formData.phone} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Add contact</button>
            </div>             
        </form>     
	</div>
)};

	