import React from 'react'
import { MdClose } from 'react-icons/md';
import { RiRotateLockFill } from "react-icons/ri";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function SendRecovery({ isOpen, onRequestClose }) {
    const style = {

        overlay: {
            backgroundColor: "rgba(0,0,0,.7)"
        },

        content: {
            width: "50vw",
            inset: 0,
            margin: "auto",
            height: "min-content",
            padding: "0 30px 50px",
            backgroundColor: "#d9d9d9"
        }
    }
    return (
        <Modal isOpen={isOpen} style={style} onRequestClose={onRequestClose}>
            <div onClick={onRequestClose}><MdClose size={30} className="close-modal" /></div>
            <div className="modal">
                <header>
                    <h2>Restablecer Contraseña</h2>
                </header>
                <div className='table'>
                    <div>
                        <p>E-mail</p>
                        <p>Enviar LInk</p>

                    </div>
                    <div>
                        <span>exaple@fun.com</span>
                        <button className="btn submit"><RiRotateLockFill /></button>
                    </div>
                    <div>
                        <span>exaple@fun.com</span>
                        <button className="btn submit"><RiRotateLockFill /></button>
                    </div>
                    <div>
                        <span>exaple@fun.com</span>
                        <button className="btn submit"><RiRotateLockFill /></button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
