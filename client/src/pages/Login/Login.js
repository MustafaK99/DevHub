import React from 'react'

import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import './Login.css'
const login = ()=> {

    const[formData, setFormData] = useState({
        email:'',
        password: '',
    })

    const {email, password} = formData
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }) )
    }

    const onSubmit = (e) => {
        e.preventDefault()
    } 

    return(
    <div className='page-container'>
        <section className='form-group'>
                <h1>
                <FaSignInAlt /> Login
                </h1>
                <p>Create Account</p>
                <form className='form-container' onSubmit={onSubmit}>
  
                    <input type="email" id='email' 
                    name='email' value={email} placeholder='Enter your email'
                    onChange={onChange}
                    /> 

                    <input type="password" id='password' 
                    name='password' value={password} placeholder='Enter your password'
                    onChange={onChange}
                    /> 

   
                     <button type="submit" className='btn btn-block'>Submit</button>
                </form>    
        </section>
    </div>
  );
}

export default login