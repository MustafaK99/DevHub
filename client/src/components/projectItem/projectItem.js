import React, { useState } from 'react';
import Project from '../../pages/Project/Project';
import './projectItem.css';

function ProjectItem({ project }) {

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);


    return (

        <div className='projectItem' onClick={handleClick}>
            <h1>{project.name}</h1>

            <Project
                onClose={onClose}
                show={show}
                project={project}
            />

        </div>



    )

}
export default ProjectItem