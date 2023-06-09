import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Viewproject.css";
import ProjectViewForm from "../../components/ProjectForm/ProjectViewForm";
const ViewProject = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const name = useState(location.state.name);
  const description = useState(location.state.description);
  const start_time = useState(location.state.start_time);
  const end_time = useState(location.state.end_time);
  const collaborators = useState(location.state.collaborators);

  const moveBack = () => {
    navigate("/projects");
  };

  return (
    <section className="project-details-group">
      <div className="project-view-container">
        <h1 className="view-project-title">Project details</h1>
        <div className="project-details-container">
          <h3>Project Name</h3>
          <p>{location.state.name}</p>
          <h3>Description</h3>
          <p className="project-view-description">
            {location.state.description}
          </p>
          <h3>Start time</h3>
          <p>{location.state.start_time}</p>
          <h3>End time</h3>
          <p>{location.state.end_time}</p>
          <h3>Collaborators</h3>
          <p>{location.state.collaborators.map((x) => x.label + " ")}</p>
        </div>
      </div>
      <button
        className="btn btn-block center btn-project-view-back"
        onClick={moveBack}
      >
        Back
      </button>
    </section>
  );
};

export default ViewProject;
