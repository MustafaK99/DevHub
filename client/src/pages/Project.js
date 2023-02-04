import React from "react";
import { useLocation } from "react-router-dom";


const Project = () => {

    const location = useLocation();

    return (
        <div>
            <h1>Project id: {location.state.id}</h1>
            <h1>Project Name: {location.state.name}</h1>
        </div>
    )
}

export default Project;