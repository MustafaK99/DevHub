import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Epics.css";
import EpicList from "../../components/epicList/epicList";

const Epics = () => {
  const { activeProject } = useSelector((state) => state.projects);

  return (
    <>
      {activeProject ? (
        <div className="container-xml">
          <div className="table-responsive">
            <div className="table-wrapper">
              <EpicList />
            </div>
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
