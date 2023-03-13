import React, { useEffect, useState } from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  reset,
  deleteProject,
  active_project,
} from "../../features/projects/projectSlice";

const EpicItem = () => {
  /**const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeProject } = useSelector((state) => state.projects);
  const [active, setActive] = useState();
  const editProject = () => {
    console.log(project.collaborators);

    project.collaborators.forEach((x) =>
      console.log(`the id is ${x.id} the name is ${x.label} ${x}`)
    );

    dispatch(reset());
    navigate("/EditProject", {
      state: {
        projectId: project._id,
        name: project.name,
        description: project.description,
        start_time: project.start_time,
        end_time: project.end_time,
        collaborators: project.collaborators,
      },
    });
  };

  const deleteProj = () => {
    dispatch(deleteProject(project._id));
  };

  const setActiveProject = () => {
    setActive((prevActive) => !prevActive);
    localStorage.setItem("activeProject", JSON.stringify(project._id));
    dispatch(active_project(project._id));

    console.log(project._id);
    console.log(activeProject);
  };

  const viewProject = () => {
    navigate("/ViewProject", {
      state: {
        projectId: project._id,
        name: project.name,
        description: project.description,
        start_time: project.start_time,
        end_time: project.end_time,
        collaborators: project.collaborators,
      },
    });
  };

  */

  return (
    <>
      <td>Epic name</td>
      <td
        style={{
          whiteSpace: "nowrap",
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Epic description
      </td>
      <td>13/03/2023</td>
      <td>13/04/2023</td>

      <td className="actions">
        <button className="btn-edit" /**onClick={viewProject}*/>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xe8f4;
          </i>
        </button>

        <button className="btn-edit" /**onClick={editProject}*/>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button className="btn-delete" /**onClick={deleteProj}*/>
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
    </>
  );
};

export default EpicItem;
