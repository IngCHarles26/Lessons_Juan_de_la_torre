import { useState } from "react";
import Mensaje from "./Mensaje";

interface Props{
  presupuesto: number,
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>,
  setIsValidPres: React.Dispatch<React.SetStateAction<boolean>>,
}

function NuevoPres(props:Props) {
  const {presupuesto,setPresupuesto,setIsValidPres} = props;

  const [message, setMessage] = useState('');

  const handleForm = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    (!presupuesto || presupuesto<0) 
        ? setMessage('No es un presupuesto válido') 
        : setIsValidPres(true);
    }


  return ( 
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleForm}  className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input  className="nuevo-presupuesto"
                  type="number"
                  placeholder="Añade tu presupuesto"
                  value={presupuesto}
                  onChange={(e)=>setPresupuesto(Number(e.target.value))}
              />
        </div>
        <input  type="submit"
                value='Añadir'/>
        {message && <Mensaje message={message} tipo="error"/>}
        
      </form>
    </div>
  );
}

export default NuevoPres;