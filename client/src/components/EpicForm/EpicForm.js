import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Modal from "react-modal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

import { createEpic, reset } from "../../features/epics/epicSlice";

import { getUsers } from "../../features/users/userSlice";
import "./projectform.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EpicForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, isError, message } = useSelector((state) => state.users);
  const { epics, isSuccess, isLoading } = useSelector((state) => state.epics);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUsers());

    if (isSuccess) {
      dispatch(reset());
      navigate("/epics");
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, navigate, isSuccess]);

  let createdBy;
  let projectID;
  let currentStatus;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [features, setFeatures] = useState("");

  const moveBack = () => {
    navigate("/projects");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createdBy = JSON.parse(localStorage.getItem("user"));

    dispatch(
      createEpic({
        createdBy,
        projectID,
        currentStatus,
        title,
        content,
        features,
      })
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <section className="new-project-form">
        <form onSubmit={onSubmit}>
          <div className={"close-btn-ctn"}>
            <h1 style={{ flex: "1 90%", color: "white" }}>
              {" "}
              Create a new epic
            </h1>
          </div>
          <div className="new-project-form-content">
            <TextField
              fullWidth
              id="fullWidth"
              placeholder="Title"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <ReactQuill
              value={content}
              theme="snow"
              className="ql-container"
              onChange={setContent}
            />

            <div className="feature-new-epic">
              <Autocomplete
                onChange={(event, value) => setFeatures([{ value }])}
                multiple
                options={[
                  { label: "Dev-192 Create a website", id: 1 },
                  { label: "Dev-186 Make a login page", id: 2 },
                  { label: "Dev-184 Make a search page", id: 3 },
                  { label: "Dev-182 Make a home page", id: 4 },
                  { label: "Dev-188 Make a contact us page", id: 5 },
                  { label: "Dev-113 Make a about us page", id: 6 },
                  { label: "Dev-132 Make a map page", id: 7 },
                  { label: "Dev-178 Make a register page", id: 8 },
                ]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select features for this epic"
                    sx={{ backgroundColor: "white" }}
                  />
                )}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block center btn-project-form"
            >
              Submit
            </button>

            <button
              onClick={moveBack}
              className="btn btn-block center btn-project-form-delete"
            >
              Back
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EpicForm;
