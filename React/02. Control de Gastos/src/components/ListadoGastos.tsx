import { Gasto } from "../App";
import ElementoGasto from "./ElementoGasto";

interface Props{
  gastos: Gasto[],
}

function ListadoGastos(props:Props) {
  const {gastos} = props;
  return ( 
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aun'}</h2>
      {gastos.map(el=> <ElementoGasto gasto={el} />)}
    </div>
  );
}

export default ListadoGastos;