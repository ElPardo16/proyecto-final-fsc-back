import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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
      field: 'age', headerName: 'Edad en años',   width: 110,  
   },
   {
      field: 'contract', headerName: 'Tipo de Contrato',   width: 200,  
   },
   {
      field: 'campus', headerName: 'Sede',   width: 110,  
   },
   {
      field: 'birthdate', headerName: 'Fecha de Nacimiento',   width: 170,  
   },
   {
      field: 'position', headerName: 'Cargo',   width: 110,  
   },
   {
      field: 'state', headerName: 'Estado',   width: 110,  
   },
   {
      field: 'email', headerName: 'Correo',   width: 200,  
   },
   {
      field: 'transit', headerName: 'Transito',   width: 110,  
   },
   {
      field: 'PS', headerName: 'Consecutivo P.S',   width: 150,  
   },
   {
      field: 'OYL', headerName: 'Consecutivo OYL',   width: 150,  
   },
   {
      field: 'ICBF', headerName: '# Contrato ICBF',   width: 150,  
   },
   {
      field: 'gen', headerName: 'Género',   width: 110,  
   },
   {
      field: 'dateECedula', headerName: 'Fecha Expedición Cédula',   width: 200,  
   },
   {
      field: 'locality', headerName: 'Localidad',   width: 110,  
   },
   {
      field: 'neighborhood', headerName: 'Barrio',   width: 110,  
   },
   {
      field: 'adress', headerName: 'Dirección de Domicilio',   width: 180,  
   },
   {
      field: 'telP', headerName: 'Teléfono Primario',   width: 150,  
   },
   {
      field: 'telS', headerName: 'Teléfono Secundario',   width: 160,  
   },
   {
      field: 'salaryL', headerName: 'Salario en Letras',   width: 300,  
   },
   {
      field: 'salaryN', headerName: 'Salario en Números',   width: 150,  
   },
   {
      field: 'dateIICBF', headerName: 'Fecha inicio ICBF',   width: 150,  
   },
   {
      field: 'dateIFSC', headerName: 'Fecha inicio FSC',   width: 150,  
   },
   {
      field: 'newDateI', headerName: 'Nueva Fecha de inicio',   width: 180,  
   },
   {
      field: 'dateR', headerName: 'Fecha de retiro',   width: 150,  
   },
   {
      field: 'EPS', headerName: 'EPS',   width: 110,  
   },
   {
      field: 'FDP', headerName: 'Fondo de Pensiones',   width: 150,  
   },
   {
      field: 'ARL', headerName: 'ARL',   width: 110,  
   },
   {
      field: 'obs', headerName: 'Observaciones',   width: 300,  
   },
];

const rows = [
   { id: 1, document: 152345678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 2, document: 123545678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 3, document: 1723456978, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 4, document: 123458678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 5, document: 1723475678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 6, document: 1234567078, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 7, document: 12345600078, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 8, document: 1234005678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 9, document: 12340005678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 10, document: 1002345678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 11, document: 1002345678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 12, document: 12300045678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 13, document: 12345600078, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 14, document: 12349995678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 15, document: 1234567998, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 16, document: 12349985678, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 17, document: 12345676668, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 18, document: 12345655578, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
   { id: 19, document: 12345675558, fName: 'Carlos', sName: 'Jairo', fLastName: 'Gonzalez', sLastName: 'Saa', age: 35, contract: 'Prestación de Servicios', campus: 'Toberín', birthdate: '2/06/2022', position: 'Jefe', state: 'Activo', email: 'hhhh@gmail.com', transit: 'No', PS: 23382, OYL: 1213, ICBF: 124.586, gen: 'Masculino', dateECedula: '2/06/2022', locality: 'Usaquén', neighborhood: 'Lijaca', adress: 'calle 168b #4a-66', telP: 39757869, telS: 39757869, salaryL: 'Tres millones quinientos mil pesos', salaryN: 3500000, dateIICBF: '3/4/2020', dateIFSC: '5/4/1998', newDateI: '----', EPS: 'Compensar', FDP: '---', ARL: '---', obs: 'Excelente' },
];


export default function Table({ people}) {
  console.log(people)
   return (
      <div className='container-table'>
         <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
               rows={rows}//base de datos reemplace rows con la data
               columns={columns}
               pageSize={17}
               rowsPerPageOptions={[17]}
               checkboxSelection 
               disableColumnMenu={true}
               disableColumnReorder={true}
               disableSelectionOnClick
               //experimentalFeatures={{ newEditingApi: true }} editable
              
            />
         </Box>
      </div>
   );
}