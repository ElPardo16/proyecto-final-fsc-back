import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import { MdMode, MdPictureAsPdf } from 'react-icons/md';



export default function Table({ people }) {
   const router = useRouter();
const columns = [

   {
      field: 'document', headerName: 'Documento', width: 150,
   },
   /*{
      field: 'fName', headerName: 'Primer Nombre', width: 150,    
   },
   {
      field: 'sName', headerName: 'Segundo Nombre', width: 150,    
   },
   {
      field: 'fLastName', headerName: 'Primer Apellido',   width: 150,  
   },
   {
      field: 'sLastName', headerName: 'Segundo Apellido',   width: 150,  
   },*/
   {
      field: 'fullName',
      headerName: 'Nombre Completo',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 300,
      valueGetter: (params) =>
         `${params.row.fName || ''} ${params.row.sName || ''}
     ${params.row.fLastName || ''}
     ${params.row.sLastName || ''}`,
   },
   {
      field: 'age', headerName: 'Edad en años', width: 110,
   },
   {
      field: 'contract', headerName: 'Tipo de Contrato', width: 200,
   },
   {
      field: 'campus', headerName: 'Sede', width: 110,
   },
   {
      field: 'birthdate', headerName: 'Fecha de Nacimiento', width: 170,
   },
   {
      field: 'position', headerName: 'Cargo', width: 110,
   },
   {
      field: 'state', headerName: 'Estado', width: 110,
   },
   {
      field: 'modality', headerName: 'Modalidad', width: 110,
   },
   {
      field: 'email', headerName: 'Correo', width: 200,
   },
   {
      field: 'transit', headerName: 'Transito', width: 110,
   },
   {
      field: 'PS', headerName: 'Consecutivo P.S', width: 150,
   },
   {
      field: 'OYL', headerName: 'Consecutivo OYL', width: 150,
   },
   {
      field: 'ICBF', headerName: '# Contrato ICBF', width: 150,
   },
   {
      field: 'gen', headerName: 'Género', width: 110,
   },
   {
      field: 'dateECedula', headerName: 'Fecha Expedición Cédula', width: 200,
   },
   {
      field: 'locality', headerName: 'Localidad', width: 110,
   },
   {
      field: 'neighborhood', headerName: 'Barrio', width: 110,
   },
   {
      field: 'adress', headerName: 'Dirección de Domicilio', width: 180,
   },
   {
      field: 'telP', headerName: 'Teléfono Primario', width: 150,
   },
   {
      field: 'telS', headerName: 'Teléfono Secundario', width: 160,
   },
   {
      field: 'salaryL', headerName: 'Salario en Letras', width: 300,
   },
   {
      field: 'salaryN', headerName: 'Salario en Números', width: 150,
   },
   {
      field: 'dateIICBF', headerName: 'Fecha inicio ICBF', width: 150,
   },
   {
      field: 'dateIFSC', headerName: 'Fecha inicio FSC', width: 150,
   },
   {
      field: 'newDateI', headerName: 'Nueva Fecha de inicio', width: 180,
   },
   {
      field: 'dateR', headerName: 'Fecha de retiro', width: 150,
   },
   {
      field: 'EPS', headerName: 'EPS', width: 110,
   },
   {
      field: 'FDP', headerName: 'Fondo de Pensiones', width: 150,
   },
   {
      field: 'ARL', headerName: 'ARL', width: 110,
   },
   {
      field: 'obs', headerName: 'Observaciones', width: 300,
   },
   {
      field: 'actions', headerName: 'Acciones', width: 200,
      cellClassName: (params) =>
         params.field === 'actions' ? 'class-actions' : '',
      renderCell: (params) => {
         return (
            <div>
               <MdMode size={40} onClick={() => console.log(`Eliminar: ${params.row.id}`)} />

               <MdPictureAsPdf size={40} onClick={async _ => {
                  try {
                     const json = await fetch('http://localhost:5000/api/cert', {
                     method: 'POST',
                     headers: {
                        "Content-Type": "application/json"
                     },
                     body: JSON.stringify({
                        name: params.row.fullName,
                        cc: params.row.document,
                        modality: params.row.modality,
                        contract: params.row.contract,
                        cargo: params.row.position,
                        time: `${params.row.dateIFSC} hasta ${params.row.dateR ?? new Date().toJSON().slice(0,10).replace(/-/g,'/')}.`,
                        sletras: params.row.salaryL,
                        snumeros: params.row.salaryN,
                     })
                     
                  })
                  .then(res => res.json())
                  console.log(json)
                  router.push('/certification')
                  } catch (error) {
                     console.log(error)
                  }
                  
               }} />
            </div>)
      }

   },


];

   const rows = people.map(({ _id, document, fName, sName, fLastName, sLastName, age, contract, campus,
      birthdate, position, state,modality, email, transit, PS, OYL, ICBF, gen, dateECedula, locality,
      neighborhood, adress, telP, telS, salaryL, salaryN, dateIICBF, dateIFSC, newDateI, dateR,
      EPS, FDP, ARL, obs }) => {
      return {
         id: _id,
         document: document ?? "---",
         fName,
         sName,
         fLastName,
         sLastName,
         age: age ?? "---",
         contract,
         campus,
         birthdate,
         position,
         state,
         modality,
         email,
         transit,
         PS,
         OYL: OYL ?? "---",
         ICBF,
         gen,
         dateECedula,
         locality,
         neighborhood,
         adress,
         telP,
         telS: telS ?? "---",
         salaryL,
         salaryN,
         dateIICBF,
         dateIFSC,
         newDateI: newDateI ?? "---",
         dateR: dateR ?? "---",
         EPS,
         FDP,
         ARL,
         obs
      }
   })


   return (
      <div className='container-table'>
         <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
               rows={rows}//base de datos reemplace rows con la data
               columns={columns}
               pageSize={17}
               rowsPerPageOptions={[17]}
               disableColumnMenu={true}
               disableColumnReorder={true}
               disableSelectionOnClick
               initialState={{ pinnedColumns: { right: ['actions'] } }}

            //experimentalFeatures={{ newEditingApi: true }} editable

            />
         </Box>
      </div>
   );
}