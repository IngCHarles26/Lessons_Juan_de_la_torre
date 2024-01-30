import styled from "@emotion/styled";
import ImagenCripto from './assets/imagen-criptos.png'
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import axios from "axios";
import Resultado from "./components/Resultado";
import { CryptoResultado } from "./data/interfaces";
import Spinner from "./components/Spinner";

export interface Info {
  moneda: string,
  cryptomoneda: string,
}

const initialInfo:Info = {
  moneda:'',
  cryptomoneda: '',
}

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 5px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`



function App() {
  const [info, setInfo] = useState(initialInfo);
  const [cargando, setCargando] = useState(false);
  //@ts-ignore
  const [resultado, setResultado] = useState<CryptoResultado>({});

  useEffect(() => {
    const {moneda,cryptomoneda} = info;
    if(moneda && cryptomoneda){
      const getPrice =async () => {
        setCargando(true)
        const {data} = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull',
          {params:{
              fsyms: cryptomoneda,
              tsyms: moneda,
            }});
        
        setResultado(data.DISPLAY[cryptomoneda][moneda])
        setCargando(false)
      }
      
      getPrice()
    }
  }, [info]);

  return ( 
    <Contenedor>

      <Imagen src={ImagenCripto} alt="Imagen MOnedas"/>

      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>

        <Formulario setInfo={setInfo}/>

        {cargando && <Spinner /> }

        {//@ts-ignore
          !cargando  && resultado.PRICE && 
          <Resultado resultado={resultado} />}
      </div>

    </Contenedor>
  );
}

export default App;