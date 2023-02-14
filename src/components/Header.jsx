import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

export default function Header({ data }) {
    const router = useRouter()
    const { email, role } = data
    const logout = _ => {
        Cookies.remove("token")
        router.push("/")
    }
    return (
        <header>
            <Image src="/img/logo.png" alt="logo" width={60} height={60} />
            <h1 className='titulo-name'>¡Bienvenido, {role}!</h1>
            <nav>
                <div>{email} <MdArrowDropDown size={20}/></div>
                <ul>
                    {role === "admin" && <><li>Crear usuario</li>
                    <li>Cambiar contraseñas</li></>}
                    <li onClick={logout}>Cerrar sesión</li>
                </ul>
            </nav>
        </header>
    )
}
