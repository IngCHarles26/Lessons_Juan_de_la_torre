import { Gasto } from "../App";
import ElementoGasto from "./ElementoGasto";

interface Props{
  gastoFiltrado: Gasto[],
  setGastoEditar: React.Dispatch<React.SetStateAction<Gasto>>,
  deleteGasto: (id:string)=>void,
}

function ListadoGastos(props:Props) {
  const {gastoFiltrado,setGastoEditar,deleteGasto} = props;
  return ( 
    <div className="listado-gastos contenedor">
      <h2>{gastoFiltrado.length ? 'Gastos' : 'No hay Gastos aun'}</h2>
      {gastoFiltrado.map(el=> <ElementoGasto   key={'key'+el.id}
                                        gasto={el}
                                        setGastoEditar={setGastoEditar}
                                        deleteGasto={deleteGasto}

       />)}
    </div>
  );
}

export default ListadoGastos;