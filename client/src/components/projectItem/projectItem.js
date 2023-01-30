import React from 'react'

function ProjectItem({ project }) {
    return (

        <div className='col'>
            <div className='item'>
                <h1>{project.name}</h1>

            </div>

        </div>
    )
}

export default ProjectItem