import React from 'react';
import './dropdown.css';

function NavItem(props) {
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button'>
                {props.icon}
            </a>
        </li>
    )
}

export default NavItem