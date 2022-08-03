import React from 'react'

import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import './Register.css'

const Register = ()=> {

    const[formData, setFormData] = useState({
        organisation: '',
        organisationEmail:'',
        name: '',
        email:'',
        password: '',
        password2:'',
    })

    const {organisation, organisationEmail, name, email, password, password2} = formData
    
    const onChange = () => {}

    return(
    <div className='page-container'>
        <section className='form-group'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create Account</p>
                <form className='form-container'>
                    <input type="text" id='organisation' 
                    name='organisation' value={organisation} placeholder='Enter org'
                    onChange={onChange}
                    />

                    <input type="email" id='organisationEmail' 
                    name='organisationEmail' value={organisationEmail} placeholder='Enter org email'
                    onChange={onChange}
                    />
                    <input type="text" id='name' 
                    name='name' value={name} placeholder='Enter your name'
                    onChange={onChange}
                    />
                    <input type="email" id='email' 
                    name='email' value={email} placeholder='Enter your email'
                    onChange={onChange}
                    /> 

                    <input type="password" id='password' 
                    name='password' value={password} placeholder='Enter your password'
                    onChange={onChange}
                    /> 

                    <input type="password" id='password2' 
                    name='password2' value={password2} placeholder='Re-enter password'
                    onChange={onChange}
                    />                        

                </form>    
        </section>
    </div>
  );
}

export default Register