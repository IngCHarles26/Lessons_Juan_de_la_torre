import axios from "axios";
import { MonedaAUsar } from "../data/interfaces";


export const url = '​https://min-api.cryptocompare.com/data/top/mktcapfull';


export const petAPI = (moneda:MonedaAUsar) => axios.create({
  baseURL: url,
  params:{
    limit: 20,
    tysm: moneda
  }
})