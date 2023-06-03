import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Modal from "react-modal";

import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import {
  createProject,
  getProjects,
  reset,
} from "../../features/projects/projectSlice";
import { getUsers } from "../../features/users/userSlice";
import "./projectform.css";
import { bold } from "colors";
const ProjectForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, isError, message } = useSelector((state) => state.users);
  const { projects, isSuccess, isLoading } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUsers());

    if (isSuccess) {
      dispatch(reset());
      navigate("/projects");
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, navigate, isSuccess]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [collabrators, setCollabrators] = useState([]);

  const [start_time, setStartTime] = useState(dayjs().toDate());
  const [end_time, setEndTime] = useState(dayjs().date(30).toDate());
  const handleChangeDT1 = (newValue) => {
    if (dayjs(newValue).isBefore(dayjs(end_time))) {
      setStartTime(newValue);
    }
  };

  const handleChangeDT2 = (newValue) => {
    if (dayjs(newValue).isAfter(dayjs(start_time))) {
      setEndTime(newValue);
    }
  };

  const moveBack = () => {
    navigate("/projects");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let collabs_info = collabrators[0];
    let user_stuff = Object.values(collabs_info);
    let collabs = user_stuff[0];
    dispatch(
      createProject({ name, description, start_time, end_time, collabs })
    );
    setName("");
    setDescription("");
    setStartTime(dayjs());
    setEndTime(dayjs().date(30));
    setCollabrators([]);
    collabs = [];
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
              Create a new project
            </h1>
          </div>
          <div className="new-project-form-content">
            <TextField
              fullWidth
              inputProps={{ style: { color: "white" } }}
              id="fullWidth"
              label="Name"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              sx={{ backgroundColor: "#282A2A", borderRadius: 3 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              multiline
              rows={10}
              fullWidth
              inputProps={{ style: { color: "white" } }}
              id="fullWidth"
              label="Description"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              variant="outlined"
              sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={2}>
                <DateTimePicker
                  label="Start Time"
                  value={start_time}
                  onChange={handleChangeDT1}
                  renderInput={(params) => (
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontSize: 20,
                          fontWeight: bold,
                          color: "white",
                        },
                      }}
                      sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                      {...params}
                    />
                  )}
                />
                <DateTimePicker
                  label="End Time"
                  value={end_time}
                  onChange={handleChangeDT2}
                  renderInput={(params) => (
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontSize: 20,
                          fontWeight: bold,
                          color: "white",
                        },
                      }}
                      sx={{
                        borderRadius: 3,
                        backgroundColor: "#282A2A",
                      }}
                      {...params}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
            <div>
              <Autocomplete
                onChange={(event, value) => setCollabrators([{ value }])}
                multiple
                options={users.map((user) => ({
                  id: user._id,
                  label: user.name,
                }))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Collabrators"
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    placeholder="Select collabrators for this project"
                    sx={{ borderRadius: 3, backgroundColor: "#282A2A" }}
                  />
                )}
              />
            </div>
            <div className="btn-new-project-group">
              <button type="submit" className="btn btn-block ">
                Submit
              </button>

              <button
                onClick={moveBack}
                className="btn btn-block btn-new-project-back"
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

export default ProjectForm;
