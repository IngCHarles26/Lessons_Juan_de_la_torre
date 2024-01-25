import { useState } from "react";
import Header from "./components/Header";
import AddIcon from './assets/nuevo-gasto.svg'
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";

export interface Gasto{
  name:string,
  monto: number,
  clase: string,
  id: string,
  date:number,
}


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPres, setIsValidPres] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const handleNuevoGasto = ()=>{
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    },300)
  }

  const saveGasto = (gasto:Gasto)=>{
    setGastos([...gastos,gasto]);
    setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
    },500)
  }

  return ( 
    <div className={modal ? 'fijar' : ''}>
      <Header presupuesto={presupuesto}
              setPresupuesto={setPresupuesto} 
              isValidPres={isValidPres}
              setIsValidPres={setIsValidPres}
              
          />
      {
        isValidPres && 
            <>
              <main>
                <ListadoGastos  gastos={gastos} />
              </main>
              <div className="nuevo-gasto">
                <img  src={AddIcon}
                      alt="nueo gasto"
                      onClick={handleNuevoGasto}/>
              </div>
            </>
      }
      {
        modal &&
          <Modal  setModal={setModal}
                  animarlModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  saveGasto={saveGasto}
                  />
      }

    </div>
  );
}

export default App;