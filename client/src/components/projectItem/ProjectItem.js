import React, { useEffect, useState } from "react";

const ProjectItem = ({ project, users }) => {
  const editProject = () => {};

  const deleteProject = () => {};

  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{project.start_time}</td>
      <td>{project.end_time}</td>

      <td>
        {users.map((user) => (
          <div>{user}</div>
        ))}
      </td>

      <td>
        <button className="btn-edit">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button className="btn-delete" onClick={deleteProject}>
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
    </>
  );
};

export default ProjectItem;
