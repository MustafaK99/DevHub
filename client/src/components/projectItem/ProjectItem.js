import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, deleteProject } from "../../features/projects/projectSlice";

const ProjectItem = ({ project, users }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editProject = () => {
    dispatch(reset());
    navigate("/EditProject");
  };

  const deleteProj = () => {
    dispatch(deleteProject(project._id));
  };

  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{project.start_time}</td>
      <td>{project.end_time}</td>

      <td>
        {users.map((user, index) => (
          <div>{user}</div>
        ))}
      </td>

      <td>
        <button className="btn-edit" onClick={editProject}>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button className="btn-delete" onClick={deleteProj}>
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
    </>
  );
};

export default ProjectItem;
