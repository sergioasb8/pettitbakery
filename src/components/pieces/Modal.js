import React from 'react';
import '../../assets/styles/Modal.css';

export const Modal = ({showModal, closeModal}) => {
    return (
        <div>
            {showModal ? 
                <div className="modalContainer">
                    <button className="closeButton" onClick={closeModal}>X</button>
                </div>
                : 
                null}
        </div>
    )
}