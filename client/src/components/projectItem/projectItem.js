import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projectItem.css';

function ProjectItem({ project }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${project._id}`)
    }

    return (

        <div className='projectItem' onClick={handleClick}>
            <h1>{project.name}</h1>
        </div>

    )

}
export default ProjectItem