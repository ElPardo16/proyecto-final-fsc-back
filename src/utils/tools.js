import { read, readFile, utils } from "xlsx"

export async function getData(){
    const response = await fetch("http://localhost:5000/api/collaborator")
    const json = await response.json()
    return json
}

export async function sendData(data) {
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
        return json
    } catch (error) {
        console.log(error.message);
    }
}

export async function readDB(file){
    const workbook = readFile(file)
    const workSheet = workbook.Sheets[workbook.SheetNames[0]]
    const json = utils.sheet_to_json(workSheet,{
        defval:null
    })
    const data = json.map(item => {
        return { 
            document: item['DOCUMENTO'],
            fName: item['PRIMER NOMBRE'],
            sName: item['SEGUNDO NOMBRE'],
            fLastName: item['PRIMER APELLIDO'], 
            sLastName: item['SEGUNDO APELLIDO'],
            age: item['EDAD EN AÑOS'],
            contract: item['TIPO DE CONTRATO'],
            modality: item['MODALIDAD'],
            campus: item['LUGAR DE TRABAJO'],
            birthdate: item['FECHA DE NACIMIENTO'],
            position: item['CARGO'],
            state: item['ESTADO'],
            email: item['CORREO ELECTRÓNICO'],
            transit: item['TRANSITO'],
            PS: item['CONSECUTIVO P.S'],
            OYL: item['CONSECUTIVO OYL'],
            ICBF: item['# CONTRATO ICBF '],
            gen: item['GENERO'],
            dateECedula:item['FECHA EXPEDICIÓN CEDULA'], 
            locality: item['LOCALIDAD'],
            neighborhood:  item['BARRIO'] ,
            adress: item['DIRECCIÓN DE DOMICILIO'],
            telP:item['TELÉFONO'],
            telS:item['TELEFONO SECUNDARIO'],
            salaryL: item['SALARIO EN LETRAS'],
            salaryN: item['SALARIO EN VALOR'],
            dateIICBF:item['FECHA DE INICIO ICBF'], // REVISAR QUE ESTA REPETIDA 
            dateIFSC: item['FECHA DE INICIO ICBF'], 
            newDateI: item['NUEVA FECHA DE INICIO'],
            dateR: item['FECHA DE RETIRO'],
            EPS: item['EPS'],
            FDP: item['FONDO DE PENSIONES'],
            ARL: item['ARL'],
            obs: item['OBSERVACIONES']
        }
    })
    console.log(data);
    sendData(data)

}