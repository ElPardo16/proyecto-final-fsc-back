import  {useState} from "react";
import AddUser from "../components/addUser";
import Recovery from "../components/Recovery";
import SendRecovery from "../components/SendRecovery";

export default function pruebas() {
   
   const [modalToShow, setModalToShow] = useState(null);
 
   const handleModalOpen = (modal) => {
     setModalToShow(modal);
   };
 
   const handleModalClose = () => {
     setModalToShow(null);
   };
  return (
   <>
   <li onClick={() => handleModalOpen('modalUser')}>Crear usuario</li>
   <li onClick={() => handleModalOpen('modalPassword')}>Cambiar contraseñas</li>
   {modalToShow === 'modalUser' && (
        <AddUser isOpen={true} onRequestClose={handleModalClose} />
      )}
      {modalToShow === 'modalPassword' && (
        <Recovery isOpen={true} onRequestClose={handleModalClose} />
      )}
</>

  )
}
