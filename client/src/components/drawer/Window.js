import React from "react";
import Modal from "react-modal";
import './window.css';

Modal.setAppElement("body");

const Window = ({ show, onClose}) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>imagine this is a form</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <h2>Status</h2>
                <h2>Priority</h2>
                <h2>Issue type</h2>
    
                <h2>Estimate</h2>
       
            </div>
        </Modal>
    );
};

export default Window;