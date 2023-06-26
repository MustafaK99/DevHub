import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import EpicItem from "../epicItem/epicItem";
import { getEpics, reset } from "../../features/epics/epicSlice";
import { getProjects } from "../../features/projects/projectSlice";

const EpicList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { epics, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.epics
  );

  const { projects } = useSelector((state) => state.projects);

  const [currentPage, setCurrentPage] = useState(1);
  const [epicsPerPage, setProjectsPerPage] = useState(10);

  const onOpen = () => {
    dispatch(reset());
    navigate("/NewEpic");
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      dispatch(reset());
    }

    dispatch(getEpics(JSON.parse(localStorage.getItem("activeProject"))));

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  //Get current posts
  const indexOfLastEpic = currentPage * epicsPerPage;
  const indexOfFirstEpic = indexOfLastEpic - epicsPerPage;
  const currentEpics = epics.slice(indexOfFirstEpic, indexOfLastEpic);
  const totalPagesNum = Math.ceil(epics.length / epicsPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Active <b>Epics</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-success" onClick={onOpen}>
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Epic</span>
            </button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEpics.map((epic) => (
            <tr key={epic._id}>
              <EpicItem epic={epic} />
            </tr>
          ))}
        </tbody>
      </table>
      {<Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />}
    </>
  );
};

export default EpicList;
