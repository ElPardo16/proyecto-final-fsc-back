import { red } from "@mui/material/colors";
import { height, padding } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { MdPersonAdd, MdClose } from "react-icons/md";

Modal.setAppElement("#__next");

export default function AddUser({ isOpen, onRequestClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  const style = {
    
    overlay:{
      backgroundColor:"rgba(0,0,0,.7)"
    },

    content:{
      width:"min-content",
      inset:0,
      margin:"auto",
      height:"min-content",
      padding: "30px",
      
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      
      <div className="modal">
        <header>
          <MdPersonAdd size={30}/>
          <h2>Nuevo Usuario</h2>
        </header>
        <div onClick={onRequestClose}><MdClose size={30} className="close-modal"  /></div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="usernew">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Este campo es obligatorio</span>}
        </div>

        <div className="usernew">
          {/* <label htmlFor="password">contraseña</label> */}
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span>La contraseña debe tener al menos 8 caracteres</span>
          )}
        </div>

        <div className="usernew">
          {/* <label htmlFor="password2">Confirmar Contraseña:</label> */}
          <input
            type="password"
            id="password2"
            placeholder="Confirmar Contraseña"
            {...register("password2", {
              required: true,
              validate: (value) =>
                value === password.current || "las contraseñas no coinciden",
            })}
          />
          {errors.password2 && errors.password2.type === "required" && (
            <span>Este campo es obligatorio</span>
          )}
          {errors.password2 && errors.password2.type === "validate" && (
            <span>{errors.password2.message}</span>
          )}
        </div>

        <div className="usernew">
          {/* <label htmlFor="role">Rol</label> */}
          <select {...register("role")} id="role" name="role" placeholder="Rol">
            <option value="role">Rol</option>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <div className="buttonnewuser">
          <button type="submit">Agregar</button>
          <button type="submit" onClick={onRequestClose}>
            Cancelar
          </button>
        </div>
      </form>
      </div>
    </Modal>
  );
}
