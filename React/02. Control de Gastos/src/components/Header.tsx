import { Gasto } from "../App";
import ControlPres from "./ControlPres";
import NuevoPres from "./NuevoPres";

interface Props{
  presupuesto: number,
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>,
  isValidPres: boolean,
  setIsValidPres: React.Dispatch<React.SetStateAction<boolean>>,
  gastos: Gasto[],
  setGastos: React.Dispatch<React.SetStateAction<Gasto[]>>,
              

}

function Header(props:Props) {
  const {presupuesto,setPresupuesto,   isValidPres, setIsValidPres,gastos,setGastos} = props;
  return ( 
    <header>
      <h1>Planificador de Gastos</h1>
      { isValidPres
          ? <ControlPres  presupuesto={presupuesto}
                          gastos={gastos}
                          setGastos={setGastos}
                          setPresupuesto={setPresupuesto}
              />
          : <NuevoPres  presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPres={setIsValidPres}
              />
      }
    </header>
  );
}

export default Header;