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
  
  );
};

export default ViewProject;
