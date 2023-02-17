import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React,{ useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";
import AddUser from '../components/AddUser'
import SendRecovery from './SendRecovery'

export default function Header({ data }) {
   const router = useRouter()
   const { email, role } = data
   const logout = _ => {
      Cookies.remove("token")
      router.push("/")
   }
   const [modalToShow, setModalToShow] = useState(null);

   const handleModalOpen = (modal) => {
      setModalToShow(modal);
   };

   const handleModalClose = () => {
      setModalToShow(null);
   };
   return (
      <header>
         <Image src="/img/logo.png" alt="logo" width={60} height={60} />
         <h1 className='titulo-name'>¡Bienvenido, {role}!</h1>
         <nav>
            <div>{email} <MdArrowDropDown size={20} /></div>
            <ul>
               {role === "admin" && <><li onClick={() => handleModalOpen('modalUser')}>Crear usuario</li>
                  <li onClick={() => handleModalOpen('modalPassword')}>Cambiar contraseñas</li></>}
               <li onClick={logout}>Cerrar sesión</li>
            </ul>
            {modalToShow === 'modalUser' && (
               <AddUser isOpen={true} onRequestClose={handleModalClose} />
            )}
            {modalToShow === 'modalPassword' && (
               <SendRecovery isOpen={true} onRequestClose={handleModalClose} />
            )}
         </nav>
      </header>
   )
}
