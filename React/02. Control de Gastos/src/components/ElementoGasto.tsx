import { LeadingActions, SwipeAction, SwipeableList, SwipeableListItem,TrailingActions } from "react-swipeable-list";
import 'react-swipeable-list/dist/styles.css';

import { Gasto } from "../App";
import iconAhorro from '../assets/icono_ahorro.svg';
import iconCasa from '../assets/icono_casa.svg';
import iconComida from '../assets/icono_comida.svg';
import iconGastos from '../assets/icono_gastos.svg';
import iconOcio from '../assets/icono_ocio.svg';
import iconSalud from '../assets/icono_salud.svg';
import iconSubs from '../assets/icono_suscripciones.svg';


const images:any = {
  'Ahorro':iconAhorro,
  'Comida':iconComida,
  'Casa':iconCasa,
  'Gastos':iconGastos,
  'Ocio':iconOcio,
  'Salud':iconSalud,
  'Suscripciones':iconSubs,
}

interface Props{
  gasto:Gasto,
  setGastoEditar: React.Dispatch<React.SetStateAction<Gasto>>,
  deleteGasto: (id:string)=>void,
}

const formatDate = (date:number)=>{
  const newDate = new Date(date);
  return newDate.toLocaleDateString('es-ES',{ year:'numeric',month: 'long', day:'2-digit'})

}




function ElementoGasto(props:Props) {

  const {gasto, setGastoEditar,deleteGasto} = props;

  const leadingActions = ()=>(
    <LeadingActions>
      <SwipeAction onClick={()=>setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>)

const trailingActions = ()=>(
  <TrailingActions>
    <SwipeAction onClick={()=>deleteGasto(gasto.id)} destructive={true}>
      Eliminar
    </SwipeAction>
  </TrailingActions>)

  return ( 
    <SwipeableList>
      <SwipeableListItem  leadingActions={leadingActions()}
                          trailingActions={trailingActions()}>
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img  src={images[gasto.clase]} 
                  alt="icono_gasto"/>
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.clase}</p>
              <p className="nombre-gasto">{gasto.name}</p>
              <p className="fecha-gasto">Agregado el: <span>{formatDate(gasto.date)}</span></p>
            </div>
          </div>
          <p className="cantidad-gasto">$ {gasto.monto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
    
  );
}

export default ElementoGasto;