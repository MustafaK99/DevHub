import {FaSignInAlt, FaSignOutAlt, FaUser, FaUserShield} from 'react-icons/fa'

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

const NavBar = () => {
    const naviagte = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        naviagte('/')
    }

    return (
            <header className='header'>
                <div className='logo'>
                    <Link to='/'>DevHub</Link>
                </div>
                <Link className ="middleLinks" to='/chat'>
                    Chat
                </Link>
                <Link className ="middleLinks" to='/board'>
                    Board
                </Link>
                <Link className ="middleLinks" to='/git'>
                    Git
                </Link>
                <ul>
                  {user ? (
                  <li> 
                       <button className='btn' onClick={onLogout}>
                          <FaSignOutAlt /> Logout
                       </button>
                   </li>) :(
                  <> 
                   <li>
                     <Link to='/register'>
                        <FaUser /> Register
                     </Link>
                   </li>
                   <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                   </li>                    
                  </>

                  )}

                </ul>      
            </header>
     )
}

export default NavBar;