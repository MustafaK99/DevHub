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
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import {
  createProject,
  getProjects,
  updateProject,
  reset,
} from "../../features/projects/projectSlice";
import { getUsers } from "../../features/users/userSlice";
import "./projectform.css";
import { bold } from "colors";
const ProjectEditForm = ({
  given_name,
  given_description,
  given_start_time,
  given_end_time,
  collabrators_list,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  const projectId = useState(location.state.projectId);
  const [name, setName] = useState(location.state.name);
  const [description, setDescription] = useState(location.state.description);
  const [collabrators, setCollabrators] = useState(
    location.state.collaborators.map((x) => ({
      id: x.id,
      label: x.label,
    }))
  );

  const [otherCollabrators, setOtherCollabrators] = useState([]);

  const [start_time, setStartTime] = useState(location.state.start_time);
  const [end_time, setEndTime] = useState(location.state.end_time);
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
    const final_id = projectId[0];
    let collabs;

    if (otherCollabrators.length != 0) {
      let collabs_info = otherCollabrators[0];
      let user_stuff = Object.values(collabs_info);
      collabs = user_stuff[0];
      console.log(collabs);
    } else {
      let collabs_info = collabrators[0];
      let user_stuff = Object.values(collabs_info);
      collabs = user_stuff[0];
    }

    dispatch(
      updateProject({
        projectData: { name, description, start_time, end_time, collabs },
        projectId: final_id,
      })
    );
    setName("");
    setDescription("");
    setStartTime(dayjs());
    setEndTime(dayjs().date(30));
    setCollabrators([]);
    setOtherCollabrators([]);
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
              Edit project details
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
                onChange={(event, value) => setOtherCollabrators([{ value }])}
                multiple
                defaultValue={location.state.collaborators.map((x) => ({
                  id: x.id,
                  label: x.label,
                }))}
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
              <button type="submit" className="btn btn-block">
                Update
              </button>

              <button
                onClick={moveBack}
                className="btn btn-block btn btn-new-project-back"
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

export default ProjectEditForm;
