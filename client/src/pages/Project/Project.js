import React, { useState } from "react";
import './Project.css';

import { useLocation } from "react-router-dom";
const Project = ({ show, onClose, project }) => {

    const location = useLocation();

    const [name, setName] = useState(location.state.name);
    const [description, setDescription] = useState(location.state.description);
    const [start_time, setStartTime] = useState(location.state.start_time);
    const [end_time, setEndTime] = useState(location.state.end_time);
    const [collaborators, setCollabrators] = useState(location.state.collaborators)


    return (

        <div></div>

    )
}

export default Project;