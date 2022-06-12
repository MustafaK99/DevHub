import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <nav className="navbar">
                <Link to="/" className="links"> <h1>DevHub </h1></Link>
               
                        <>
                            <Link to="#" id="chatNavButton">Chat</Link>
                            <Link to="/board" id="workNavButton">Board</Link>
                            <Link to="#" id="gitNavButton" >Git</Link>
                        </>
            </nav>
     )
}

export default NavBar;