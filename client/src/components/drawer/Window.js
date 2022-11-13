import * as React from 'react';
import {useState} from "react";
import Modal from "react-modal";
import './window.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import{AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import { white } from 'colors';


Modal.setAppElement("body");

const Window = ({ show, onClose}) => {

    const [dateAndtime1, setDateAndTime1] = React.useState(dayjs());
    const [dateAndtime2, setDateAndTime2] = React.useState(dayjs().date(30))

    const handleChangeDT1 = (newValue) => {

      if( dayjs(newValue).isBefore(dayjs(dateAndtime2))){
          setDateAndTime1(newValue);
      }


    };

    const handleChangeDT2 = (newValue) => {
       
        if(dayjs(newValue).isAfter(dayjs(dateAndtime1))){
            setDateAndTime2(newValue);
        }
    }
  

    const users = ['Jane Doe' , 'John Doe', 'James Doe Jr', 'James Doe Sr' , 'James Doe III' ]
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
        <section className="new-project-form">
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}> Create a new project</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="new-project-form-content">

                
                <TextField fullWidth multiline rows={10}  id="fullWidth"  label='Description' sx={{ borderRadius: 3}}/>
             
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
                    multiple
                    options={users} 
                    renderInput={(params) => <TextField {...params}  label='Collabrators' placeholder="Select team mates for your project" sx={{ borderRadius: 3}}/>}/>
                 </div>

                 <button type="submit" className='btn btn-block center'>Submit</button>

            </div>


            </section>
        </Modal>
    );
};

export default Window;