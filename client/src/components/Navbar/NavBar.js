import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
                   <li>
                     <Link to='/login'>
                        <FaSignInAlt /> Login
                     </Link>
                   </li> 
                   <li>
                     <Link to='/register'>
                        <FaUser /> Register
                     </Link>
                   </li> 
                </ul>      
            </header>
     )
}

export default NavBar;