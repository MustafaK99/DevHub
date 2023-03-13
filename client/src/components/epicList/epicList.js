import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, reset } from "../../features/projects/projectSlice";
import ProjectItem from "../projectItem/ProjectItem";
import Pagination from "../Pagination/Pagination";
import { getUsers } from "../../features/users/userSlice";
import EpicItem from "../epicItem/epicItem";

const EpicList = () => {
  const navigate = useNavigate();

  /**const dispatch = useDispatch();

  const { projects, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.projects
  );

  const { users } = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  */
  const onOpen = () => {
    navigate("/NewEpic");
  };
  /** 

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      dispatch(reset());
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
  */
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Active <b>Epics</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-success" onClick={onOpen}>
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Epic</span>
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
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <EpicItem />
          </tr>
        </tbody>
      </table>
      {/**<Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} /> */}
    </>
  );
};

export default EpicList;
