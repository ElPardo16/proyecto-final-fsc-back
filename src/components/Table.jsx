import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import MaterialReactTable from 'material-react-table';
import { useRouter } from 'next/router';
import { MdMode, MdPictureAsPdf } from 'react-icons/md';



export default function Table({ people }) {
   const router = useRouter();
const columns =  useMemo(
   () => [

   {
      accessorKey: 'document', header: 'Documento', width: 150,
   },
   /*{
      accessorKey: 'fName', header: 'Primer Nombre', width: 150,    
   },
   {
      accessorKey: 'sName', header: 'Segundo Nombre', width: 150,    
   },
   {
      accessorKey: 'fLastName', header: 'Primer Apellido',   width: 150,  
   },
   {
      accessorKey: 'sLastName', header: 'Segundo Apellido',   width: 150,  
   },*/
   {
      accessorKey: 'fullName',
      header: 'Nombre Completo',
      accessorFn: (row) => `${row.fName } ${row.sName} ${row.fLastName} ${row.sLastName}`,
      width: 300,
   },
   {
      accessorKey: 'age', header: 'Edad en años', width: 110,
   },
   {
      accessorKey: 'contract', header: 'Tipo de Contrato', width: 200,
   },
   {
      accessorKey: 'campus', header: 'Sede', width: 110,
   },
   {
      accessorKey: 'birthdate', header: 'Fecha de Nacimiento', width: 170,
   },
   {
      accessorKey: 'position', header: 'Cargo', width: 110,
   },
   {
      accessorKey: 'state', header: 'Estado', width: 110,
   },
   {
      accessorKey: 'modality', header: 'Modalidad', width: 110,
   },
   {
      accessorKey: 'email', header: 'Correo', width: 200,
   },
   {
      accessorKey: 'transit', header: 'Transito', width: 110,
   },
   {
      accessorKey: 'PS', header: 'Consecutivo P.S', width: 150,
   },
   {
      accessorKey: 'OYL', header: 'Consecutivo OYL', width: 150,
   },
   {
      accessorKey: 'ICBF', header: '# Contrato ICBF', width: 150,
   },
   {
      accessorKey: 'gen', header: 'Género', width: 110,
   },
   {
      accessorKey: 'dateECedula', header: 'Fecha Expedición Cédula', width: 200,
   },
   {
      accessorKey: 'locality', header: 'Localidad', width: 110,
   },
   {
      accessorKey: 'neighborhood', header: 'Barrio', width: 110,
   },
   {
      accessorKey: 'adress', header: 'Dirección de Domicilio', width: 180,
   },
   {
      accessorKey: 'telP', header: 'Teléfono Primario', width: 150,
   },
   {
      accessorKey: 'telS', header: 'Teléfono Secundario', width: 160,
   },
   {
      accessorKey: 'salaryL', header: 'Salario en Letras', width: 300,
   },
   {
      accessorKey: 'salaryN', header: 'Salario en Números', width: 150,
   },
   {
      accessorKey: 'dateIICBF', header: 'Fecha inicio ICBF', width: 150,
   },
   {
      accessorKey: 'dateIFSC', header: 'Fecha inicio FSC', width: 150,
   },
   {
      accessorKey: 'newDateI', header: 'Nueva Fecha de inicio', width: 180,
   },
   {
      accessorKey: 'dateR', header: 'Fecha de retiro', width: 150,
   },
   {
      accessorKey: 'EPS', header: 'EPS', width: 110,
   },
   {
      accessorKey: 'FDP', header: 'Fondo de Pensiones', width: 150,
   },
   {
      accessorKey: 'ARL', header: 'ARL', width: 110,
   },
   {
      accessorKey: 'obs', header: 'Observaciones', width: 300,
   },
   {
      accessorKey: 'actions', header: 'Acciones', width: 200,
       muiTableBodyCellCopyButtonProps: () => ({
         className: 'style-actions',
         
       }),
      Cell: (params) => {
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


],
[],
);

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
   const options = {
      showHideCols: false,
    };

   return (
      <div className='container-table'>
        <Box sx={{ height: 300, width: '100%' }}>
            <MaterialReactTable
               data={rows}//base de datos reemplace rows con la data
               columns={columns}
               setPageSize={17}
               rowsPerPageOptions={[17]}
               enableTopToolbar={false} 
               enableColumnActions={false}
               initialState={{ columnPinning: {  right: ['actions'] } }}
            //experimentalFeatures={{ newEditingApi: true }} editable
            />
         </Box>
      </div>
   );
}