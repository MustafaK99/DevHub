import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from "react";
import './Project.css';

import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Modal from "react-modal";

Modal.setAppElement("body");

const Project = ({ show, onClose, project }) => {




    return (

        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <section className="new-project-form">
                <form >
                    <div className={"close-btn-ctn"}>
                        <h1 style={{ flex: "1 90%", color: 'black' }}> Edit project</h1>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </div>
                    <div className="new-project-form-content">

                        <TextField fullWidth id="fullWidth" label='Name' value={"hello"} />
                        <TextField fullWidth multiline rows={10} id="fullWidth" label='Description' sx={{ borderRadius: 3 }}
                            value={"hello"}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={2}>
                                <DateTimePicker
                                    label="Start Time"
                                    value={""}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DateTimePicker
                                    label="End Time"
                                    value={""}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <div>
                            <Autocomplete
                                multiple
                                options={"whatever"}
                                renderInput={(params) => <TextField {...params} label='Collabrators' placeholder="Select team mates for your project" sx={{ borderRadius: 3 }}
                                />}
                            />

                        </div>

                        <button type="submit" className='btn btn-block center'>Update</button>
                        <button onClick={console.log('delete')} className='btn btn-block center'>Delete</button>


                    </div>


                </form>
            </section>
        </Modal>

    )
}

export default Project;