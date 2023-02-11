import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, reset } from '../../features/projects/projectSlice';
import './projects.css';
import ProjectList from '../../components/ProjectList/ProjectList';

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
                        <ProjectList />
                    </div>
                ) : (<h3>No Active Projects Currently </h3>)}

            </section>
        </>

    )

}

export default Projects