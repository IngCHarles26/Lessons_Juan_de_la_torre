import styled from '@emotion/styled';
import { CryptoResultado } from '../data/interfaces';


interface Props{
  resultado: CryptoResultado,
}

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`
const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 25px;
  span{
    font-weight: 700;
  }
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`

function Resultado(props:Props) {
  const {resultado} = props;

  const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return ( 
    <Contenedor>
      <Imagen src={'https://cryptocompare.com/'+IMAGEURL} alt="imagenCrypto" />
      <div>
        <Precio>El precio es de:             <span>{PRICE}       </span></Precio>
        <Texto> El precio mas alto de hoy:   <span>{HIGHDAY}     </span></Texto>
        <Texto> El precio mas bajo de hoy:   <span>{LOWDAY}      </span></Texto>
        <Texto> Variacion últimas 24 horas:  <span>{CHANGE24HOUR}</span></Texto>
        <Texto> Ultima actualizacion:        <span>{LASTUPDATE}  </span></Texto>
      </div>
    </Contenedor>
  );
}

export default Resultado;