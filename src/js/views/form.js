import React, { useEffect, useState, useContext } from "react";
import {Context} from '../store/appContext'

import "../../styles/home.css";

export const Form = () => {
	const {store, actions} = useContext(Context)
	
	return (
	<div className="caja-form container-flex  justify-content-center align-items-center">       
            <div class="items-form mb-3 ">
                <span className=" input-group-text">First and last name</span>
                <input type="text" aria-label="First name" className="form-control" placeholder="Name"/>
                <input type="text" aria-label="Last name" className="form-control" placeholder="Last Name"/>
            </div>
            <div class="items-form mb-3">
                <label for="exampleFormControlInput1" className="input-group-text">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>  
            <div class="items-form mb-3">
                <label for="validationCustom05" className="input-group-text">Telephone</label>
                <input type="text" className="form-control" id="validationCustom05" required/>
                <div className="invalid-feedback">
                Please provide a valid telephone.
                </div>
            </div>
            <div class="mb-3">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>   
	</div>
)};

	