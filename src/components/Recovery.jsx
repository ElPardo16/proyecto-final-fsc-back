import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="add-pssn">
        <label htmlFor="pssn">Nueva Contraseña</label>
        <input
          id="pssn"
          name="password"
          type="password"
          placeholder="Nueva Contraseña"
          {...register("password", {
            required: true,
            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div className="add-pssn">
        <label htmlFor="pssn">Confirmar Contraseña</label>
        <input
          id="pssn"
          name="passwordv"
          type="password"
          placeholder="Confirmar Contraseña"
          {...register("passwordv", {
            required: true,
            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />
        {errors.passwordv && <span>{errors.passwordv.message}</span>}
      </div>

      <button className="btn submit">Agregar</button>
      <button className="btn submit">Cancelar</button>
    </form>
  );
}
