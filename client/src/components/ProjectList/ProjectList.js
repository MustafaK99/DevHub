import React, { useEffect, useState }  from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, reset } from '../../features/projects/projectSlice';

import Pagination from '../Pagination/Pagination';
import './projectList.css';
import projectItem from '../projectItem/projectItem';

const ProjectList = () => {

    const { sortedProjects } = projects.sort((a, b) => (a.name, b.name ? -1 : 1));

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

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


    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedProjects])

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPagesNum = Math.ceil(sortedProjects.length / projectsPerPage);


    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Projects</b></h2>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Emlployee List Updated Succefully!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Collaborators</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        currentProjects.map(project => (
                            <tr key={project._id}>
                                <projectItem project={project} />

                            </tr>
                        ))
                    }


                </tbody>
            </table>

            <Pagination pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentProjects={projects}
                sortedProjects={sortedProjects} />

        </>
    )
}

export default ProjectList;