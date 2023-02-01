import React from 'react';
import './projectItem.css';


function ProjectItem({ project }) {

    const handleClick = () => {
        console.log('open project')
    }

    return (

        <div className='projectItem' onClick={handleClick}>
            <h1>{project.name}</h1>

            <p>{project.description}</p>

        </div>

    )
}

export default ProjectItem