import React from 'react';
import './projectItem.css';

function ProjectItem({ project }) {
    return (

        <div className='projectItem'>
            <h1>{project.name}</h1>

        </div>

    )
}

export default ProjectItem