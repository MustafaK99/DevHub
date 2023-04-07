import * as React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./issueModal.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { white } from "colors";

Modal.setAppElement("body");

const IssueModal = ({ show, onClose }) => {
  const [dateAndtime1, setDateAndTime1] = React.useState(dayjs());
  const [dateAndtime2, setDateAndTime2] = React.useState(dayjs().date(30));

  const handleChangeDT1 = (newValue) => {
    if (dayjs(newValue).isBefore(dayjs(dateAndtime2))) {
      setDateAndTime1(newValue);
    }
  };

  const handleChangeDT2 = (newValue) => {
    if (dayjs(newValue).isAfter(dayjs(dateAndtime1))) {
      setDateAndTime2(newValue);
    }
  };

  const users = [
    "Jane Doe",
    "John Doe",
    "James Doe Jr",
    "James Doe Sr",
    "James Doe III",
  ];
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal-issue"}
      overlayClassName={"overlay"}
    >
      <section className="new-project-form">
        <div className={"close-btn-ctn"}>
          <h1 style={{ flex: "1 90%", color: "white" }}> Create a new issue</h1>
          <button className="close-btn" onClick={onClose}>
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
            placeholder="Provide a Summary"
            sx={{
              borderRadius: 3,
              backgroundColor: "#24292f",
            }}
          />

          <Autocomplete
            options={["Bugfix", "Epic", "Feature", "Issue"]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Issue Type"
                placeholder="Select the Issue Type"
                sx={{ borderRadius: 3, backgroundColor: "#24292f" }}
              />
            )}
          />

          <div>
            <Autocomplete
              options={["Dev-132", "Dev-678", "Dev-869"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Linked Issues"
                  placeholder="Link other issues to this issue"
                  sx={{ borderRadius: 3, backgroundColor: "#24292f" }}
                />
              )}
            />
          </div>

          <TextField
            fullWidth
            multiline
            rows={10}
            id="fullWidth"
            label="Description"
            placeholder=""
            sx={{ borderRadius: 3, backgroundColor: "#24292f" }}
          />

          <div>
            <Autocomplete
              options={users}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Assignee"
                  placeholder="Assign this issue"
                  sx={{ borderRadius: 3, backgroundColor: "#24292f" }}
                />
              )}
            />
          </div>

          <div>
            <Autocomplete
              options={users}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Reporter"
                  placeholder="Assign the reporter"
                  sx={{ borderRadius: 3, backgroundColor: "#24292f" }}
                />
              )}
            />
          </div>

          <button type="submit" className="btn btn-block center">
            Submit
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default IssueModal;
