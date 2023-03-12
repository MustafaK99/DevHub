import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";

import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import "./projectform.css";
import { bold } from "colors";
const ProjectViewForm = ({
  given_name,
  given_description,
  given_start_time,
  given_end_time,
  collabrators_list,
}) => {
  return (
    <div>
      <section className="new-project-form">
        <form>
          <div className={"close-btn-ctn"}>
            <h1 style={{ flex: "1 90%", color: "white" }}>
              {" "}
              Edit project details
            </h1>
          </div>
          <div className="new-project-form-content">
            <TextField
              fullWidth
              id="fullWidth"
              placeholder="Name"
              variant="outlined"
              sx={{ backgroundColor: "white", borderRadius: 3 }}
              value={given_name}
              disabled
            />
            <TextField
              disabled
              fullWidth
              multiline
              rows={10}
              id="fullWidth"
              placeholder="Description"
              variant="outlined"
              sx={{ borderRadius: 3, backgroundColor: "white" }}
              value={given_description}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={2}>
                <DateTimePicker
                  label="Start Time"
                  value={given_start_time}
                  disabled
                  renderInput={(params) => (
                    <TextField
                      disabled
                      InputLabelProps={{
                        style: { fontSize: 20, fontWeight: bold },
                      }}
                      sx={{ backgroundColor: "white", borderRadius: 3 }}
                      {...params}
                    />
                  )}
                />
                <DateTimePicker
                  label="End Time"
                  value={given_end_time}
                  renderInput={(params) => (
                    <TextField
                      disabled
                      InputLabelProps={{
                        style: { fontSize: 20, fontWeight: bold },
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 3,
                      }}
                      {...params}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProjectViewForm;
