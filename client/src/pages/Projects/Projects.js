import React, { useEffect, useState } from "react";
import ProjectList from "../../components/ProjectList/ProjectList";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
