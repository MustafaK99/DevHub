import React from "react";
import './filterButton.css';

function FilterButton({ button, filter }) {
    return (
        <div className={"filterButtons"}>
            {
                button.map((status, i) => {
                    return <button className={"filterBtn"} onClick={() => filter(status)} >{status}</button>
                })
            }
        </div>
    )
}
export default FilterButton