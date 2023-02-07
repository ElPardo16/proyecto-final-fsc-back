import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

export default function Header() {
  return (
    <header>
        <div className='header-logo'>
            <img src="./img/logo.png" alt="logo" />
            <h2 className='titulo-name'>¡Bienvenido, Admin!</h2>
        </div>
        <nav>
            <ul className='nav'>
                <li><a href="#">admin@fun.com <MdArrowDropDown /></a>
                     <ul>
                        <li><a href="#">Crear usuario</a></li>
                        <li><a href="#">Cambiar contraseñas</a></li>
                        <li><a href="#">Cerrar sesión</a></li>
                     </ul>
                </li>
            </ul>

        </nav>

    </header>
  )
}
