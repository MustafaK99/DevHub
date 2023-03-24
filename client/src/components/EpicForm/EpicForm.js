import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

import { createEpic, reset } from "../../features/epics/epicSlice";

import { getUsers } from "../../features/users/userSlice";
import "./projectform.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const features_val = [
  {
    created_by_user: "63b710ff18c6d8bcd2b3771f",
    title: "Dev-123 Make a website",
  },

  {
    created_by_user: "63b710ff18c6d8bcd4b5117x",
    title: "Dev-168 Make website work",
  },
];

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }
}

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
  const [currentStatus, setCurrentStatus] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [features, setFeatures] = useState("");

  const moveBack = () => {
    navigate("/epics");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createdBy = JSON.parse(localStorage.getItem("user"));
    setCurrentStatus("in progress");
    projectID = JSON.parse(localStorage.getItem("activeProject"));

    console.log(title);
    console.log(content);
    console.log(features);
    console.log(projectID);

    dispatch(
      createEpic({
        created_by_user: createdBy,
        project: projectID,
        status: currentStatus,
        title,
        content,
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
              sx={{ backgroundColor: "white", borderRadius: 2 }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <ReactQuill
              value={content}
              theme="snow"
              className="ql-container"
              onChange={setContent}
              modules={Editor.modules}
              formats={Editor.formats}
            />

            <div className="feature-new-epic">
              <Autocomplete
                onChange={(event, value) => setFeatures([{ value }])}
                multiple
                options={features_val}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select features for this epic"
                    sx={{ backgroundColor: "white", borderRadius: 2 }}
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

Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
};

export default EpicForm;
