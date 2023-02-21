import React from 'react'
import Header from "../components/Header";

export default function Certification({data}) {
  return (
    <>
      <Header data={data}/>
    <div className='certification'>
      <iframe src="http://localhost:5000/api/cert#toolbar=0&navpanes=0" ></iframe>
      <div className='btncert'>
        <a href='http://localhost:5000/api/cert/download'>Descargar Certificado Laboral</a>
        <button>Enviar Por E-mail</button>
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const data = JSON.parse(req.headers["x-data"]);
  return {
    props: {
      data,
    },
  };
}
