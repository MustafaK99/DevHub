import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Current Active Projects: {id}</h1>
        </div>
    )
}

export default Project;