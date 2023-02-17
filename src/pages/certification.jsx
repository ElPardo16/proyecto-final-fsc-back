import React from 'react'
import Header from "../components/Header";

export default function Certification(data) {
  return (
    <>
      <Header data={data}/>
    <div className='certification'>
      <iframe src="http://localhost:5000/api/cert" frameborder="0" ></iframe>
      <div className='btncert'>
        <button>Descargar Certificado Laboral</button>
        <button>Enviar Por E-mail</button>
      </div>
        <a href="http://localhost:5000/api/cert/download" download>Descargar</a>
    </div>
    </>
  )
}
