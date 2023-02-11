import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Pagination from './Pagination';
import './projectList.css';

const projectList = ({ Projects }) => {

    const { sortedProjects } = Projects.sort((a, b) => (a.name, b.name ? -1 : 1));

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
                currentProjects={Projects}
                sortedProjects={sortedProjects} />

        </>
    )
}

export default projectList;