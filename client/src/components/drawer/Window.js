import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Modal from "react-modal";
import './window.css';

import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../features/projects/projectSlice';

Modal.setAppElement("body");

const Window = ({ show, onClose }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users/org")
            .then(res => {
                return res.json();
            })
            .then(users => {
                setUsers(users)
            }
            )


    }, [])

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [collabrators, setCollabrators] = useState([]);

    const dispatch = useDispatch()

    const [dateAndtime1, setDateAndTime1] = useState(dayjs());
    const [dateAndtime2, setDateAndTime2] = useState(dayjs().date(30))
    const handleChangeDT1 = (newValue) => {

        if (dayjs(newValue).isBefore(dayjs(dateAndtime2))) {
            setDateAndTime1(newValue);
        }


    };

    const handleChangeDT2 = (newValue) => {

        if (dayjs(newValue).isAfter(dayjs(dateAndtime1))) {
            setDateAndTime2(newValue);
        }
    }


    const onSubmit = e => {
        e.preventDefault()
        dispatch(createProject({ name, description, dateAndtime1, dateAndtime2, collabrators }))
        setName('')
        setDescription('')
        setDateAndTime1(dayjs())
        setDateAndTime2(dayjs().date(30))
        setCollabrators([])
    }



    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <section className="new-project-form">
                <form onSubmit={onSubmit}>
                    <div className={"close-btn-ctn"}>
                        <h1 style={{ flex: "1 90%" }}> Create a new project</h1>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </div>
                    <div className="new-project-form-content">

                        <TextField fullWidth id="fullWidth" label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField fullWidth multiline rows={10} id="fullWidth" label='Description' sx={{ borderRadius: 3 }}
                            value={description} onChange={(e) => setDescription(e.target.value)}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={2}>
                                <DateTimePicker
                                    label="Start Time"
                                    value={dateAndtime1}
                                    onChange={handleChangeDT1}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DateTimePicker
                                    label="End Time"
                                    value={dateAndtime2}
                                    onChange={handleChangeDT2}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <div>
                            <Autocomplete
                                onChange={(event, value) => setCollabrators([...collabrators, { value }])}
                                multiple
                                options={[]}
                                renderInput={(params) => <TextField {...params} label='Collabrators' placeholder="Select team mates for your project" sx={{ borderRadius: 3 }}
                                />}
                            />
                        </div>

                        <button type="submit" className='btn btn-block center'>Submit</button>

                    </div>


                </form>
            </section>
        </Modal>
    );
};

export default Window;