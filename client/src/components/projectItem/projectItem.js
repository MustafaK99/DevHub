import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projectItem.css';

function ProjectItem({ project }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/project", {
            state: {
                id: project._id, name: project.name, description: project.description,
                start_time: project.start_time, end_time: project.end_time, organisation: project.organisation,
                collaborators: project.collaborators, epics: project.epics, sprints: project.sprints, backlog: project.backlog
            }
        })
    }

    return (

        <div className='projectItem' onClick={handleClick}>
            <h1>{project.name}</h1>
        </div>

    )

}
export default ProjectItem