import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function App({isOpen, onRequestClose}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="password" placeholder="Nueva Contraseña" {...register("Nueva Contraseña", { required: true, pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i })} />
            <input type="password" placeholder="Confirmar Contraseña" {...register("Confirmar Contraseña", { required: true, pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i })} />

            <button className="btn submit">Agregar</button>
            <button className="btn submit" onClick={onRequestClose}>Cancelar</button>
        </form>
        </Modal>
    );
}