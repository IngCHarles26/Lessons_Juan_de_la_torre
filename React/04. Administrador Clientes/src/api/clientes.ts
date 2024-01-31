import axios from "axios"
import { ClientesData } from "../assets/data";

export const getClients = async () => {
  const {data} = await axios.get(import.meta.env.VITE_API_URL);

  return data
}

export const addClient =async (data:ClientesData) => {
  try {
    await axios.post(import.meta.env.VITE_API_URL , data)
  } catch (error) {
    console.log(error)
  }
}

export const getClient = async (id:string)=>{
  const {data} = await axios.get(import.meta.env.VITE_API_URL + '/' + id);

  return data
}


export const updateCliente = async (id:string,data:ClientesData)=>{
  try {
    await axios.put(import.meta.env.VITE_API_URL + '/' + id, data)
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteClient = async (id:string)=>{
  try {
    await axios.delete(import.meta.env.VITE_API_URL + '/' + id)
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}