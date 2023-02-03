import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getProjects, reset } from '../features/projects/projectSlice';


const Project = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [name, setProjectName] = useState();

    const { projects, isLoading, isError, message } = useSelector((state) => state.projects)



    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getProjects())
        const current_prj = projects.filter(project => project._id === id)
        const proj_obj = current_prj[0]
        const name = proj_obj.name
        setProjectName(name)

        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])


    return (
        <div>
            <h1>Project Name: {id}</h1>
            <h1>{name}</h1>
            <p></p>
        </div>
    )
}

export default Project;