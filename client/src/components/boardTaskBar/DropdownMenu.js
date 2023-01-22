import React from "react";

import './dropdown.css';

function DropdownMenu() {

    function DropdownItem(props) {
        return (
            <a href='#' className="menu-item">

                <span className="icon-left">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>

            </a>
        )
    }

    return (
        <div className='dropdown'>
            <DropdownItem leftIcon="🦘">Board 1</DropdownItem>
            <DropdownItem leftIcon="🐸">Board 2</DropdownItem>
        </div>
    )

}
export default DropdownMenu