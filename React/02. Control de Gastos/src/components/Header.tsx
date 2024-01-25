import ControlPres from "./ControlPres";
import NuevoPres from "./NuevoPres";

interface Props{
  presupuesto: number,
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>,
  isValidPres: boolean,
  setIsValidPres: React.Dispatch<React.SetStateAction<boolean>>,
}

function Header(props:Props) {
  const {presupuesto,setPresupuesto,   isValidPres, setIsValidPres} = props;
  return ( 
    <header>
      <h1>Planificador de Gastos</h1>
      { isValidPres
          ? <ControlPres  presupuesto={presupuesto}
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