import { useEffect, useState } from "react";
import { Gasto } from "../App";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'

interface Props{
  presupuesto: number,
  gastos: Gasto[],
  setGastos: React.Dispatch<React.SetStateAction<Gasto[]>>,
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>,

}

function ControlPres(props:Props) {
  const {presupuesto,gastos,setGastos,setPresupuesto} = props;

  const [disponible, setDisponible] = useState<number>(presupuesto);
  const [gastado, setGastado] = useState<number>(0);
  const [porcentaje, setPorcentaje] = useState(0);
  
  useEffect(()=>{
    const totalGastado = gastos.reduce((ac,el)=>ac+el.monto,0);
    setDisponible(presupuesto-totalGastado);
    setGastado(totalGastado);

    setTimeout(()=>{
      setPorcentaje(100*totalGastado/presupuesto)
    },300)
  },[gastos])

  const resetApp = ()=>{
    setPresupuesto(0);
    setGastos([]);
  }

  return ( 
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar  value={porcentaje}
                              styles={buildStyles({
                                pathColor: porcentaje>100 ? '#dc2626' : '#3b82f6',
                                trailColor: '#f5f5f5',
                                textColor: porcentaje>100 ? '#dc2626' : '#3b82f6',
                              })}
                              text={`${porcentaje.toFixed(2)}% Gastado`}
        
          />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={resetApp}>
          Resetear APP
        </button>
        <p>
          <span>Presupuesto: </span> {presupuesto.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}
        </p>
        <p className={disponible<0 ? 'negativo' : ''}>
          <span>Disponible: </span> {disponible.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}
        </p>
        <p>
          <span>Gastado: </span> {gastado.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}
        </p>
      </div>
    </div>
  );
}

export default ControlPres;