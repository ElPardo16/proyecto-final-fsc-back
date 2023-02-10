import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import { read } from "xlsx";

export default function AddColaborator() {
  const [drag, setDrag] = useState(false)
  const toggleDrag = e => {
    e.preventDefault()
    e.stopPropagation()
    setDrag(!drag)
  }
  const readFile = async e => {
    const file = e.target.files[0]
    const data = await file.arrayBuffer()
    const workbook = read(data)
    console.log(workbook)
  }
  const dropFile = async e => {
    e.stopPropagation()
    e.preventDefault()    
    console.log("sadsa")
    
    /* const file = e.dataTransfer.files[0]
    const data = await file.arrayBuffer()
    const workbook = read(data)
    console.log({drag: true,...workbook}) */
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = data => console.log(data);
  //console.log(errors);

  const onSubmit = async data => {
    console.log(data)
    try {
      const res = await fetch("http://localhost:5000/api/collaborator",{
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      console.log(json)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="add-c">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="Documento"
          {...register("Documento", {
            required: true,
            max: 20,
            min: 6,
            maxLength: 20,
            pattern: /[0-9]/i,
          })}
        />
        <input
          type="text"
          placeholder="Primer Nombre "
          {...register("Primer Nombre ", {
            required: true,
            max: 50,
            min: 2,
            maxLength: 50,
            pattern: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
          })}
        />
        <input
          type="text"
          placeholder="Segundo Nombre "
          {...register("Segundo Nombre ", {
            required: true,
            max: 50,
            min: 2,
            maxLength: 49,
            pattern: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
          })}
        />
        <input
          type="text"
          placeholder="Primer Apellido"
          {...register("Primer Apellido", {
            required: true,
            max: 20,
            min: 2,
            maxLength: 50,
            pattern: /^[a-zA-Z] + [a-zA-Z] + $ /i,
          })}
        />
        <input
          type="text"
          placeholder="Segundo Apellido"
          {...register("Segundo Apellido", {
            required: true,
            max: 20,
            min: 10,
            maxLength: 49,
            pattern: /^[a-zA-Z] + [a-zA-Z] + $ /i,
          })}
        />
        <input
          type="number"
          placeholder="Edad"
          {...register("Edad", {
            max: 3,
            min: 1,
            maxLength: 3,
            pattern: /^[0-9]+$/i,
          })}
        />
        <input
          type="text"
          placeholder="Tipo de Contrato "
          {...register("Tipo de Contrato ", {
            required: true,
            max: 20,
            min: 4,
            maxLength: 50,
            pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
          })}
        />
        <input
          type="text"
          placeholder="Sede"
          {...register("Sede", {
            required: true,
            max: 20,
            min: 4,
            maxLength: 50,
            pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
          })}
        />
        <input
          type="number"
          placeholder="Fecha de Nacimiento"
          {...register("Fecha de Nacimiento", {
            required: true,
            max: 20,
            min: 4,
            maxLength: 48,
            pattern: /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
          })}
        />
        <input
          type="text"
          placeholder="Cargo"
          {...register("Cargo", {
            required: true,
            max: 20,
            min: 5,
            maxLength: 50,
            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
          })}
        />
        <select {...register("Estado")}>
          <option value="Activo">Activo</option>
          <option value=" Retirado"> Retirado</option>
          <option value=" Incapacidad"> Incapacidad</option>
          <option value=" Licencia de Maternidad"> Licencia de Maternidad</option>
          <option value=" Licencia No Remunerada"> Licencia No Remunerada</option>
        </select>
        <input
          type="email"
          placeholder="Correo"
          {...register("Correo", {
            required: true,
            max: 50,
            min: 6,
            maxLength: 50,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <select {...register("Transito")}>
          <option value="No ">No </option>
          <option value=" Retirado"> Retirado</option>
          <option value=" Si"> Si</option>
        </select>
        <input
          type="number"
          placeholder="Consecutivo PS"
          {...register("Consecutivo PS", { required: true, max: 4, min: 0 })}
        />
        <input
          type="number"
          placeholder="Consecutivo OYL"
          {...register("Consecutivo OYL", { required: true, max: 4, min: 0 })}
        />
        <input
          type="number"
          placeholder="Contrato ICBF"
          {...register("Contrato ICBF", {
            required: true,
            max: 10,
            min: 6,
            pattern: /^[0-9]+$/i,
          })}
        />
        <select {...register("Genero")}>
          <option value="Femenino">Femenino</option>
          <option value=" Masculino"> Masculino</option>
        </select>
        <input
          type="number"
          placeholder="Fecha Expedicion Cedula"
          {...register("Fecha Expedicion Cedula", {
            required: true,
            max: 20,
            min: 10,
            pattern:
              /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
          })}
        />
        <input
          type="text"
          placeholder="Localidad"
          {...register("Localidad", { required: true, max: 20, min: 5 })}
        />
        <input
          type="text"
          placeholder="Barrio "
          {...register("Barrio ", { required: true, max: 20, min: 5 })}
        />
        <input
          type="text"
          placeholder="Direccion"
          {...register("Direccion", { required: true, max: 20, min: 5 })}
        />
        <input
          type="text"
          placeholder="Telefono Principal"
          {...register("Telefono Principal", {
            required: true,
            max: 20,
            min: 9,
            pattern: /^\d{10}$/i,
          })}
        />
        <input
          type="number"
          placeholder="Telefono Secundario "
          {...register("Telefono Secundario ", {
            required: true,
            pattern: /^\d{10}$/i,
          })}
        />
        <input
          type="text"
          placeholder="Salario en Letras "
          {...register("Salario en Letras ", {
            required: true,
            max: 20,
            min: 6,
            pattern: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
          })}
        />
        <input
          type="number"
          placeholder="Salario en Numero"
          {...register("Salario en Numero", {
            required: true,
            max: 20,
            min: 10,
            pattern: /^\d*\.\d+$/i,
          })}
        />
        <input
          type="number"
          placeholder="Fecha Inicio ICBF"
          {...register("Fecha Inicio ICBF", {
            required: true,
            pattern:
              /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
          })}
        />
        <input
          type="number"
          placeholder="Fecha Inicio FSC"
          {...register("Fecha Inicio FSC", {
            required: true,
            pattern:
              /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
          })}
        />
        <input
          type="number"
          placeholder=" Nueva Fecha De Inicio"
          {...register(" Nueva Fecha De Inicio", {
            required: true,
            pattern:
              /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
          })}
        />
        <input
          type="number"
          placeholder=" Fecha Retiro"
          {...register(" Fecha Retiro", {
            required: true,
            pattern:
              /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
          })}
        />
        <input
          type="text"
          placeholder="EPS"
          {...register("EPS", {
            required: true,
            max: 20,
            min: 4,
            maxLength: 50,
            pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
          })}
        />
        <input
          type="text"
          placeholder=" Fondo De Pensiones"
          {...register(" Fondo De Pensiones", {
            required: true,
            max: 20,
            min: 4,
            maxLength: 50,
            pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
          })}
        />
        <input
          type="text"
          placeholder="ARL"
          {...register("ARL", {
            required: true,
            max: 20,
            min: 4,
            maxLength: 50,
            pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
          })}
        />
        <textarea {...register("Observaciones ", { required: true })} />
        <input type="submit" />
      </form>
      <div className="file" >
        <div className={`dragzone ${drag ? "drag" : ""} `}>
          <MdOutlineFileUpload size={80}/>
          <span>Sube o arrastra un excel</span>
        </div>
        
        <input id="data" name="data" type="file" hidden onChange={readFile} />
        <label htmlFor="data" onDragEnter={toggleDrag} onDragLeave={toggleDrag} onDrop={dropFile}>
        </label>
      </div>
    </div>
  )
}

