import React from "react";

function filterButton({ button, filter }) {
    return (
        <div className="buttons">
            {
                button.map((status, i) => {
                    return <button type="button" onClick={() => filter(status)} className="btn">{status}</button>
                })
            }
        </div>
    )
}