import React from "react";
import { useLocation } from "react-router-dom";


const Project = () => {

    const location = useLocation();

    return (
        <div>
            {location.state.id != null ? <h1>Project id: {location.state.id}</h1> : <h1>No id</h1>}
            {location.state.name != null ? <h1>Project Name: {location.state.name}</h1> : <h1>No Name</h1>}
            {location.state.description != null ? <h1>Project Description: {location.state.description}</h1> : <h1>No description</h1>}
            {location.state.start_time != null ? <h1>Project Start Date: {location.state.start_time}</h1> : <h1>No start_time</h1>}
            {location.state.end_time != null ? <h1>Project End Date: {location.state.end_time}</h1> : <h1>No end_time</h1>}
            {location.state.organisation != null ? <h1>{location.state.organisation}</h1> : <h1>no organisation</h1>}



        </div>
    )
}

export default Project;