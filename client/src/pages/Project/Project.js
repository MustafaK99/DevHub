import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState } from "react";
import './Project.css';

import { useLocation } from "react-router-dom";
const Project = () => {

    const location = useLocation();

    const [name, setName] = useState(location.state.name);
    const [description, setDescription] = useState(location.state.description);
    const [start_time, setStartTime] = useState(location.state.start_time);
    const [end_time, setEndTime] = useState(location.state.end_time);
    const [collaborators, setCollabrators] = useState(location.state.collaborators)

    const onSubmit = () => { }

    const handleChangeDT1 = () => { }

    const handleChangeDT2 = () => { }


    return (


        <section className='edit-project-form'>
            <form onSubmit={onSubmit}>
                <div>
                    <h1 style={{ flex: "1 90%" }}> Create a new project</h1>
                </div>

                <TextField fullWidth id="fullWidth" label='Name' value={name} onChange={(e) => setName(e.target.value)} sx={{ marginBottom: 2 }} />
                <TextField fullWidth multiline rows={10} id="fullWidth" label='Description' sx={{ borderRadius: 3, backgroundColor: "white", marginBottom: 2 }}
                    value={description} onChange={(e) => setDescription(e.target.value)}
                />


                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={2}>
                        <DateTimePicker
                            label="Start Time"
                            value={start_time}
                            onChange={handleChangeDT1}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DateTimePicker
                            label="End Time"
                            value={end_time}
                            onChange={handleChangeDT2}
                            renderInput={(params) => <TextField {...params} sx={{ marginBottom: 2 }} />}
                        />
                    </Stack>
                </LocalizationProvider>
                <div className='autocomplete-edit-form'>
                    <Autocomplete
                        onChange={(event, value) => setCollabrators([{ value }])}
                        multiple
                        value={collaborators}
                        options={collaborators}
                        renderInput={(params) => <TextField {...params} label='Collabrators' placeholder="Select team mates for your project" sx={{ borderRadius: 3 }}
                        />}
                    />

                </div>

                <button type="submit" className='btn btn-block'>Submit</button>



            </form>
        </section>

    )
}

export default Project;