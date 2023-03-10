import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Viewproject.css";

const ViewProject = () => {
  const location = useLocation();

  const name = useState(location.state.name);
  const description = useState(location.state.description);
  const start_time = useState(location.state.start_time);
  const end_time = useState(location.state.end_time);

  return (
    <div>
      <h1>Name</h1>
      <p>{name}</p>
      <h1>description</h1>
      <p>{description}</p>
      <h1>start time</h1>
      <p> {start_time}</p>
      <h1>end time</h1>

      <p>{end_time}</p>

      <h1>collaborators for this project</h1>
      {location.state.collaborators.map((x) => (
        <p> {x.label}</p>
      ))}
    </div>
  );
};

export default ViewProject;
