import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { Moneda } from "../data/interfaces";
import { monedas } from "../data/const";
import { useEffect, useState } from "react";
import { url } from "../api";
import axios from "axios";
import { Datum } from "../data/crytoCompare";
import Error from "./Error";
import { Info } from "../App";

interface Props{
  setInfo: React.Dispatch<React.SetStateAction<Info>>
}

const Input  = styled.input`
  background-color: #9497ff;
  color: #fff;
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: backgroud-color .3s ease;
  margin-top: 30px;

  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`



function Formulario(props:Props) {
  const {setInfo} = props;

  const [crypto, setCrypto] = useState<Moneda[]>([]); 
  const [error, setError] = useState(false);

  const [SelectMonedas, moneda] = useSelectMonedas('Elije tu Moneda',monedas);
  const [SelectCrypto, cryptomoneda] = useSelectMonedas('Elige tu Criptomoneda', crypto)

  useEffect(() => {
    const consultarAPI =async () => {
      const response:Datum[] = (await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=usd')).data.Data;
      const infoApi:Moneda[] = response.map(el=>{return {id: el.CoinInfo.Name, name: el.CoinInfo.FullName}});
      setCrypto(infoApi)
    }

    consultarAPI();
  }, []);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(moneda && cryptomoneda){
      setError(false);
      //@ts-ignore
      setInfo({moneda,cryptomoneda})
    }else{
      setError(true)
    }
  }

  return ( 
    <>
      {error && <Error children='Todos los campos son obligatorios' /> }

      <form onSubmit={handleSubmit}>
        <SelectMonedas />

        <SelectCrypto />

        <Input type="submit" value='Cotizar' />
      </form>
    </>
  );
}

export default Formulario;