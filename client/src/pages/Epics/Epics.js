import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Epics.css";

const Epics = () => {
  const { activeProject } = useSelector((state) => state.projects);

  return (
    <>
      {activeProject ? (
        <div className="container-xml">
          <div className="table-responsive">
            <div className="table-wrapper">display list of epics</div>
          </div>
        </div>
      ) : (
        <div>
          <p>Please select a project</p>
        </div>
      )}
    </>
  );
};

export default Epics;
