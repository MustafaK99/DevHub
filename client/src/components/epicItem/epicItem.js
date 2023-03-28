import React, { useEffect, useState } from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

import { deleteEpic, reset } from "../../features/epics/epicSlice";

const EpicItem = ({ epic }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** 
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
  */

  /** 
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
      <td>{epic.title}</td>
      <td
        style={{
          whiteSpace: "nowrap",
          maxWidth: "100px",
          maxHeight: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {parse(epic.content)}
      </td>
      <td>{epic.status}</td>

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
