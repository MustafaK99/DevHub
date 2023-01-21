import React from "react";
import './filterButton.css';

function FilterButton({ button, filter }) {
    return (
        <div className="filterButtons">
            {
                button.map((status, i) => {
                    return <button type="button" onClick={() => filter(status)} className="filterBtn">{status}</button>
                })
            }
        </div>
    )
}
export default FilterButton