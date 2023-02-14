import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, reset } from "../../features/projects/projectSlice";
import ProjectItem from "../projectItem/ProjectItem";
import Pagination from "../Pagination/Pagination";
import { getUsers } from "../../features/users/userSlice";

import Window from "./Window";

const ProjectList = () => {
  const dispatch = useDispatch();

  const { projects, isLoading, isError, message } = useSelector(
    (state) => state.projects
  );

  const { users } = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUsers());

    dispatch(getProjects());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  //Get current posts
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPagesNum = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Active <b>Projects</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-success" onClick={onOpen}>
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Project</span>
            </button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Collaborators</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project) => (
            <tr key={project._id}>
              <ProjectItem
                project={project}
                users={users.map((user) => user.name)}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />

      <Window
        onClose={onClose}
        show={show}
        users={users.map((user) => ({ id: user._id, label: user.name }))}
      />
    </>
  );
};

export default ProjectList;
