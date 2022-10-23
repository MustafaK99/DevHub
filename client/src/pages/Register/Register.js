import './Register.css'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../../features/auth/authSlice'
import { FaUser } from 'react-icons/fa';
import Spinner from '../../components/Spinner'
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

    const navigate = useNavigate()
    const dispatch  = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)

    useEffect(() => { 

        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
           navigate('/') 
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }) )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== password2){
            toast.error('Password do not match')
        } else {
            const UserData = {
                organisation,
                organisationEmail,
                name,
                email,
                password
            }

            dispatch(register(UserData))
        }

    }
    
    if(isLoading){
        return <Spinner/>
    }

    return(
        <section className='form-group'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create Account</p>
                <form className='form-container' onSubmit={onSubmit}>
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
                     <button type="submit" className='btn btn-block'>Submit</button>
                </form>    
        </section>
  );
}

export default Register