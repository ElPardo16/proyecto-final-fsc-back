import Image from 'next/image';
import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

export default function Header({ data }) {
    const { email, role } = data

    return (
        <header>
            <Image src="/img/logo.png" alt="logo" width={60} height={60} />
            <h1 className='titulo-name'>¡Bienvenido, {role}</h1>
            <nav>
                <div>{email} <MdArrowDropDown size={20}/></div>
                <ul>
                    <li>Crear usuario</li>
                    <li>Cambiar contraseñas</li>
                    <li>Cerrar sesión</li>
                </ul>
            </nav>
        </header>
    )
}