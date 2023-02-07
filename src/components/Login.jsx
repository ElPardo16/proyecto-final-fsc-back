import React from 'react'
import {FaUserCircle, FaLock } from "react-icons/fa"

export default function Login() {
  return (
    <div className='container'>
        <img src="./img/logo.png" width='200' alt="logo"/>
        <div className='login'>
            <form className='login-form'>

                <FaUserCircle/> <input type="text" name="usuario" placeholder='Ususario'/>
                <FaLock/> <input type="password" name="password" placeholder='Contraseña'/>

                <a href='#' className='boton-login' target="_blank">Login</a>

            </form>
        </div>
    </div>
  )
}
