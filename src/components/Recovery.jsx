import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Recovery({ isOpen, onRequestClose }) {
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

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pss">
            {/* <label htmlFor="password"> Nueva contraseña</label> */}
            <input
              type="password"
              id="password"
              placeholder=" Nueva Contraseña"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && errors.password.type === "required" && (
              <span>Este campo es obligatorio</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span>La contraseña debe tener al menos 8 caracteres</span>
            )}
          </div>

          <div className="pss">
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

          <div className="bpss">
            <button type="submit">Cambiar</button>
            <button type="submit" onClick={onRequestClose}>
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
