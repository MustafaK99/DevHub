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

  const editEpic = () => {
    dispatch(reset());
    navigate("/EditEpic", {
      state: {
        epicId: epic._id,
        status: epic.status,
        title: epic.title,
        content: epic.content,
      },
    });
  };

  const deleteCurrentEpic = () => {
    dispatch(deleteEpic(epic._id));
  };

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
      <td
        style={{
          whiteSpace: "nowrap",
          maxWidth: "200px",
          maxHeight: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {epic.title}
      </td>
      <td
        style={{
          whiteSpace: "nowrap",
          maxWidth: "200px",
          maxHeight: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: epic.content }}
          style={{
            overflow: "hidden",
            maxHeight: "40px",
            maxWidth: "200px",
            textOverflow: "ellipsis",
          }}
        />
      </td>
      <td>{epic.status}</td>

      <td className="actions">
        <button className="btn-edit" /**onClick={viewProject}*/>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xe8f4;
          </i>
        </button>

        <button className="btn-edit" onClick={editEpic}>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>

        <button className="btn-delete" onClick={deleteCurrentEpic}>
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
    </>
  );
};

export default EpicItem;
