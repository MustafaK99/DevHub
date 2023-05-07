import * as React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./issueModal.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { reset, createIssue } from "../../features/issues/issueSlice";

Modal.setAppElement("body");

const IssueModal = ({ show, onClose }) => {
  const [assignee, setAssignee] = useState();
  const [reporter, setReporter] = useState();
  const [status, setStatus] = useState();
  const [summary, setSummary] = useState();
  const [description, setDescription] = useState();
  const [issueType, setIssueType] = useState();
  const [estimate, setEstimate] = useState();
  const [priority, setPriority] = useState();
  const [linkedIssues, setLinkedIssues] = useState();

  const users = [
    "Jane Doe",
    "John Doe",
    "James Doe Jr",
    "James Doe Sr",
    "James Doe III",
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const createdBy = JSON.parse(localStorage.getItem("user"));
    const projectID = JSON.parse(localStorage.getItem("activeProject"));
    /** 
    dispatch(
      createIssue({
        createdBy,
        projectID,
        currentStatus,
        title,
        content,
      })
      
    );
    */
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal-issue"}
      overlayClassName={"overlay"}
    >
      <section className="new-project-form">
        <form onSubmit={onSubmit}>
          <div className={"close-btn-ctn"}>
            <h1 style={{ flex: "1 90%", color: "white" }}>
              {" "}
              Create a new issue
            </h1>
            <button
              className="close-btn"
              onClick={onClose}
              style={{ color: "white" }}
            >
              X
            </button>
          </div>
          <div className="new-project-form-content">
            <TextField
              fullWidth
              multiline
              inputProps={{ style: { color: "white" } }}
              id="fullWidth"
              label="Summary"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              placeholder="Provide a Summary"
              sx={{
                borderRadius: 3,
                backgroundColor: "#282A2A",
              }}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />

            <Autocomplete
              onChange={(event, value) => setIssueType([{ value }])}
              options={["Bugfix", "Task", "SPIKE"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Issue Type"
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  placeholder="Select the Issue Type"
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#282A2A",
                    borderColor: "white",
                  }}
                />
              )}
            />

            <div>
              <Autocomplete
                onChange={(event, value) => setPriority([{ value }])}
                options={["Critical", " High", "Medium", "Low"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Priority"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    placeholder="Set the priority of the issue"
                    sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                  />
                )}
              />
            </div>

            <div>
              <Autocomplete
                onChange={(event, value) => setLinkedIssues([{ value }])}
                options={["Dev-132", "Dev-678", "Dev-869"]}
                multiple
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Linked Issues"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    placeholder="Link other issues to this issue"
                    sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                  />
                )}
              />
            </div>

            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={10}
              id="fullWidth"
              label="Description"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              placeholder=""
              sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
            />

            <div>
              <Autocomplete
                onChange={(event, value) => setAssignee([{ value }])}
                options={users}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Assignee"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    placeholder="Assign this issue"
                    sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                  />
                )}
              />
            </div>

            <div>
              <Autocomplete
                onChange={(event, value) => setReporter([{ value }])}
                options={users}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Reporter"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    placeholder="Assign the reporter"
                    sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                  />
                )}
              />
            </div>

            <button type="submit" className="btn btn-block center">
              Submit
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default IssueModal;
