import React from 'react'
import { RiRotateLockFill } from "react-icons/ri";

export default function SendRecovery() {
    return (
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
    )
}
