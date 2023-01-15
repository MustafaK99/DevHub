import React from 'react';
import './dropdown.css';





export default function Dropdown(props) {
  return (
    <nav className='navbar-board'>
      <ul className='navbar-nav'>
        {props.children}
      </ul>
    </nav>
  )
}
