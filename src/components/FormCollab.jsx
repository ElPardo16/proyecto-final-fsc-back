import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import { readDB } from "../utils/tools";

export default function FormCollb() {
  const [drag, setDrag] = useState(false);
  const toggleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(!drag);
  };
  const loadFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    readDB(data);
  };
  const dropFile = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const data = await file.arrayBuffer();
    readDB(data);
    setDrag(!drag);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    console.log(data)
    // try {
    //   const res = await fetch("http://localhost:5000/api/collaborator",{
    //     method: 'POST',
    //     headers:{
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   const json = await res.json()
    //   console.log(json)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="add-c">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-i">
          <label htmlFor="doc">Documento</label>
          <input
            id="doc"
            type="number"
            name="document"
            placeholder="Documento"
            {...register("Documento", {
              required: {
                value: true,
                max: 20,
                min: 6,
                maxLength: 20,
                message: "El campo es requerido",
              },
              pattern: {
                value: /[0-9]/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.document && <span>{errors.document.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="dateECedula">Fecha Expedicion Cedula </label>
          <input
            id="dateECedula"
            type="date"
            placeholder="Fecha Expedicion Cedula"
            {...register("Fecha Expedicion Cedula", {
              required: {
                value: true,
                name: "dateECedula",
                max: 20,
                min: 10,
                message: "El campo es requerido",
              },
              pattern: {
                value:
                  /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.dateECedula && <span>{errors.dateECedula.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="nombre1">Primer Nombre</label>
          <input
            id="nombre1"
            type="text"
            name="fName"
            placeholder="Primer Nombre "
            {...register("Primer Nombre ", {
              required: {
                value: true,
                max: 50,
                min: 2,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.fName && <span>{errors.fName.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="nombre2">Segundo Nombre</label>
          <input
            id="nombre2"
            type="text"
            name="sName"
            placeholder="Segundo Nombre"
            {...register("Segundo Nombre ", {
              required: {
                value: true,
                max: 50,
                min: 2,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.sName && <span>{errors.sName.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="Apellido1">Primer Apellido</label>
          <input
            id="Apellido1"
            type="text"
            name="fLastName"
            placeholder="Primer Apellido"
            {...register("Primer Apellido", {
              required: {
                value: true,
                max: 50,
                min: 2,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.fLastName && <span>{errors.fLastName.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="Apellido2">Segundo Apellido</label>
          <input
            id="Apellido2"
            type="text"
            name="sLastName"
            placeholder="Segundo Apellido"
            {...register("Segundo Apellido", {
              required: {
                value: true,
                max: 50,
                min: 2,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.sLastName && <span>{errors.sLastName.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="age">Edad</label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="Edad"
            {...register("Edad", {
              required: {
                value: true,
                max: 3,
                min: 1,
                maxLength: 4,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="nac">Fecha de Nacimiento</label>
          <input
            id="nac"
            name="birthdate"
            type="date"
            placeholder="Fecha de Nacimiento"
            {...register("Fecha de Nacimiento", {
              required: {
                value: true,
                max: 20,
                min: 4,
                maxLength: 48,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.birthdate && <span>{errors.birthdate.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="contract">Tipo de Contrato</label>
          <input
            id="contract"
            type="text"
            name="contract"
            placeholder="Tipo de Contrato "
            {...register("Tipo de Contrato ", {
              required: {
                value: true,
                max: 20,
                min: 4,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="sede">Sede</label>

          <input
            id="sede"
            name="campus"
            type="text"
            placeholder="Sede"
            {...register("Sede", {
              required: {
                value: true,
                max: 20,
                min: 4,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.campus && <span>{errors.campus.message}</span>}
        </div>

        

        <div className="add-i">
          <label htmlFor="cargo">Cargo</label>
          <input
            id="cargo"
            name="position"
            type="text"
            placeholder="Cargo"
            {...register("Cargo", {
              required: {
                value: true,
                max: 20,
                min: 5,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.position && <span>{errors.position.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="Estado">Estado</label>
          <select {...register("Estado")} id="estado" name="state">
            <option value="Activo">Activo</option>
            <option value=" Retirado"> Retirado</option>
            <option value=" Incapacidad"> Incapacidad</option>
            <option value=" Licencia de Maternidad">
              Licencia de Maternidad
            </option>
            <option value=" Licencia No Remunerada">
              Licencia No Remunerada
            </option>
          </select>
        </div>

        <div className="add-i">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Correo"
            {...register("Correo", {
              required: {
                value: true,
                max: 50,
                min: 6,
                maxLength: 50,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="transit">Transito</label>
          <select {...register("Transito")} id="transit" name="transit">
            <option value="No ">No </option>
            <option value=" Retirado"> Retirado</option>
            <option value=" Si"> Si</option>
          </select>
        </div>

        <div className="add-i">
          <label htmlFor="ps">Consecutivo PS</label>
          <input
            id="ps"
            name="PS"
            type="number"
            placeholder="Consecutivo PS"
            {...register("Consecutivo PS", { required: true, max: 4, min: 0 })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="consoyl"> Consecutivo OYL</label>
          <input
            id="consoyl"
            name="OYL"
            type="number"
            placeholder="Consecutivo OYL"
            {...register("Consecutivo OYL", {
              required: true,
              max: 4,
              min: 0,
            })}
          />
          {errors.OYL && <span>{errors.OYL.message}</span>}
        </div>

        <div className="add-i">
          <label htmlFor="ICBF">Contrato ICBF</label>
          <input
            id="ICBF"
            name="ICBF"
            type="number"
            placeholder="Contrato ICBF"
            {...register("Contrato ICBF", {
              required: true,
              max: 15,
              min: 6,
              pattern: /^[0-9]+$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="Genero">Genero</label>
          <select {...register("Genero")} id="Genero" name="gen">
            <option value="Femenino">Femenino</option>
            <option value=" Masculino"> Masculino</option>
          </select>
        </div>

        

        <div className="add-i">
          <label htmlFor="locality">Localidad</label>
          <input
            id="locality"
            name="locality"
            type="text"
            placeholder="Localidad"
            {...register("Localidad", {
              required: true,
              max: 20,
              min: 5,
              message: "El campo es requerido",
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="barrio">Barrio</label>
          <input
            id="barrio"
            name="neighborhood"
            type="text"
            placeholder="Barrio "
            {...register("Barrio ", { required: true, max: 20, min: 5 })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="direc">Direccion</label>
          <input
            id="direc"
            name="adress"
            type="text"
            placeholder="Direccion"
            {...register("Direccion", { required: true, max: 20, min: 5 })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="telf">Telefono Principal</label>
          <input
            id="telf"
            name="telP"
            type="text"
            placeholder="Telefono Principal"
            {...register("Telefono Principal", {
              required: true,
              max: 10,
              pattern: /^\d{10}$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="telfs">Telefono Secundario</label>
          <input
            id="telfs"
            name="telS"
            type="number"
            placeholder="Telefono Secundario "
            {...register("Telefono Secundario ", {
              required: true,
              pattern: /^\d{10}$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="salL">Salario en Letras </label>
          <input
            id="salL"
            name="salaryL"
            type="text"
            placeholder="Salario en Letras "
            {...register("Salario en Letras ", {
              required: true,
              max: 20,
              min: 6,
              pattern: /^ [a-zA-Z] + [a-zA-Z] + $ /i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="salN">Salario en Numero</label>
          <input
            id="salN"
            name="salaryN"
            type="number"
            placeholder="Salario en Numero"
            {...register("Salario en Numero", {
              required: true,
              max: 20,
              min: 10,
              pattern: /^\d*\.\d+$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="icbf">Fecha Inicio ICBF</label>
          <input
            id="icbf"
            name="dateIICBF"
            type="date"
            placeholder="Fecha Inicio ICBF"
            {...register("Fecha Inicio ICBF", {
              required: true,
              pattern:
                /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="fsc">Fecha Inicio FSC </label>
          <input
            id="fsc"
            name="dateIFSC"
            type="number"
            placeholder="Fecha Inicio FSC"
            {...register("Fecha Inicio FSC", {
              required: true,
              pattern:
                /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="">Nueva Fecha De Inicio </label>
          <input
            id="dtI"
            name="newDateI"
            type="date"
            placeholder=" Nueva Fecha De Inicio"
            {...register(" Nueva Fecha De Inicio", {
              required: true,
              pattern:
                /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="date">Fecha Retiro</label>
          <input
            id="dateR"
            name=" dateR"
            type="date"
            placeholder=" Fecha Retiro"
            {...register(" Fecha Retiro", {
              required: true,
              pattern:
                /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
            })}
          />
        </div>

        <div className="add-i">
          <label htmlFor="eps">EPS</label>
          <input
            id="eps"
            name="EPS"
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
        </div>

        <div className="add-i">
          <label htmlFor="p"> Fondo De Pensiones </label>
          <input
            id="fp"
            name="FDP"
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
        </div>
        <div className="add-i">
          <label htmlFor="arl">ARL</label>
          <input
            id="arl"
            name=" ARL"
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
        </div>

        <div className="add-i obs">
          <label htmlFor="">Observaciones</label>
          <textarea rows={5}
            id="obs"
            name="obs"
            {...register("Observaciones ", { required: true })}
          />
        </div>

        <input className="submit btn" type="submit" />
      </form>

      <div className="file">
        <div className={`dragzone ${drag ? "drag" : ""} `}>
          <MdOutlineFileUpload size={80} />
          <span>Sube o arrastra un excel</span>
        </div>

        <input id="data" name="data" type="file" hidden onChange={loadFile} />
        <label
          htmlFor="data"
          onDragEnter={toggleDrag}
          onDragOver={onDragOver}
          onDragLeave={toggleDrag}
          onDrop={dropFile}
        ></label>
      </div>
    </div>
  );
}
