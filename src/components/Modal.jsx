import { MdPersonAdd } from "react-icons/md";
import AddColaborator from "./addCollaborator";

export default function Modal() {
  return (
    <div className="bg-modal">
      <div className="modal">
        <header>
          <MdPersonAdd size={30}/>
          <h2>Agregar colaborador</h2>
        </header>
        <AddColaborator/>
      </div>
    </div>
  )
}
