import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
            <input type="password" placeholder="Contraseña" {...register("Contraseña", { required: true, pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i })} />
            <input type="password" placeholder="Confirmar Contraseña" {...register("Confirmar Contraseña", { required: true, pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i })} />
            <select {...register("Rol", { required: true })}>
                <option value="Usuario, Administrador">Usuario, Administrador</option>
            </select>

            <button className="btn submit">Agregar</button>
            <button className="btn submit">Cancelar</button>
        </form>
    );
}