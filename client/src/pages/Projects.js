import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProjectItem from "../components/projectItem";
import { getProjects, reset } from '../features/projects/projectSlice';

const Projects = () => {

    const dispatch = useDispatch()

    const { projects, isLoading, isError, message } = useSelector((state) => state.projects)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getProjects())

        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])

    return (

        <>
            <h1>Active Projects</h1>

            <section>
                {projects.length > 0 ? (
                    <div>
                        {projects.map((project) => (
                            <ProjectItem key={project._id} project={project} />
                        ))}
                    </div>
                ) : (<h3>No Active Projects Currently </h3>)}

            </section>
        </>

    )

}

export default Projects