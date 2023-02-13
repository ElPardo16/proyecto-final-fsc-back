import { read } from "xlsx"

export async function getData(){
    const response = await fetch("http://localhost:3000/api/collaborator")
    const json = await response.json()
    return json
}

export async function readDB(file){
    const workbook = read(file)
    console.log(workbook)
}