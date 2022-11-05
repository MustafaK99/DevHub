import React from "react";
import Modal from "react-modal";
import './window.css';
import TextField from '@mui/material/TextField';
import DateTimePicker  from 'react-datetime-picker'
import Autocomplete from '@mui/material/Autocomplete';

Modal.setAppElement("body");

const Window = ({ show, onClose}) => {

    const [value, onChange] = React.useState(new Date());
    const users = ['Jane Doe' , 'John Doe','son of doe', 'doe jr', 'Doe sr' , 'Doe III' ]
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

                
                <TextField fullWidth multiline rows={10}  id="fullWidth"  label='Description' sx={{ borderRadius: 3, backgroundColor: 'white'}}/>
                
                <div>
                    <DateTimePicker onChange={onChange} value={value} className='date-picker'/>
                 </div>
           
                <div>
                    <DateTimePicker onChange={onChange} value={value} className='date-picker' />
                </div>

      
                 <div>
                 <Autocomplete 
                    multiple
                    options={users} 
                    renderInput={(params) => <TextField {...params}  label='Collabrators' placeholder="Select team mates for your project" sx={{ borderRadius: 3, backgroundColor: 'White'}}/>}/>
                 </div>

                 <button type="submit" className='btn btn-block center'>Submit</button>

            </div>


            </section>
        </Modal>
    );
};

export default Window;