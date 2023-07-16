import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";

import { createEpic, reset } from "../../features/epics/epicSlice";

import { getUsers } from "../../features/users/userSlice";
import "./EpicEditForm.css";
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

const EditEpicForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  let projectID = JSON.parse(localStorage.getItem("activeProject"));

  const [currentStatus, setCurrentStatus] = useState(location.state.status);
  const [title, setTitle] = useState(location.state.title);
  const [content, setContent] = useState(location.state.content);
  const [features, setFeatures] = useState("");

  const moveBack = () => {
    navigate("/epics");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createEpic({
        currentStatus,
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
            <h1 style={{ flex: "1 90%", color: "white" }}> Edit this epic</h1>
          </div>
          <div className="new-project-form-content">
            <TextField
              fullWidth
              inputProps={{ style: { color: "white" } }}
              id="fullWidth"
              label="Title"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              sx={{ backgroundColor: "#282A2A", borderRadius: 3 }}
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
                options={features}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Features"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    placeholder="Select features for this epic"
                    sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                  />
                )}
              />
            </div>
            <Autocomplete
              onChange={(event, value) => setCurrentStatus([{ value }])}
              options={["Ready For Development", "In Progress", "Complete"]}
              value={currentStatus}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Epic status"
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  placeholder="Select the status"
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#282A2A",
                    borderColor: "white",
                  }}
                />
              )}
            />

            <div className=" btn-epic-form">
              <button type="submit" className="btn btn-block">
                Submit
              </button>

              <button
                onClick={moveBack}
                className="btn btn-block btn-epic-delete"
              >
                Back
              </button>
            </div>
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

export default EditEpicForm;
