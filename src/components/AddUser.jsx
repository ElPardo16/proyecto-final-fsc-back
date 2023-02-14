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
      <div className="add-p">
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="add-p">
        <label htmlFor="pss">Contraseña</label>
        <input
          id="pss"
          name="password"
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: true,
            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div className="add-p">
        <label htmlFor="pssc">Confirmar Contraseña</label>
        <input
          id="pssc"
          name="passwordv"
          type="password"
          placeholder="password"
          {...register("passwordv", {
            required: true,
            pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />
        {errors.passwordv && <span>{errors.passwordv.message}</span>}
      </div>

      <div className="add-p">
        <label htmlFor="rol">Rol</label>
        <select
          {...register(" role", { required: true })}
          id="rol"
          name=" role"
        >
          <option value="Usuario, Administrador">Usuario,Administrador</option>
        </select>
      </div>

      <button className="btn submit">Agregar</button>
      <button className="btn submit">Cancelar</button>
    </form>
  );
}
