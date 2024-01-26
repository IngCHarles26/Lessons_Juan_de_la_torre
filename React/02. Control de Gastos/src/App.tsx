import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddIcon from './assets/nuevo-gasto.svg'
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";

export interface Gasto{
  name:string,
  monto: number,
  clase: string,
  id: string,
  date:number,
}

const initialGasto:Gasto = {
  name:'',
  monto: 0,
  clase: '',
  id: '',
  date:0,
}




function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValidPres, setIsValidPres] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState<Gasto[]>(
    //@ts-ignore
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [gastoEditar, setGastoEditar] = useState<Gasto>(initialGasto);
  const [filtros, setFiltros] = useState('');
  const [gastoFiltrado, setGastoFiltrado] = useState(gastos);

  
  useEffect(()=>{
    if(Object.values(gastoEditar).every(el=>el)){
      handleNuevoGasto();
    }
  },[gastoEditar])
  
  useEffect(()=>{
    localStorage.setItem('presupuesto',presupuesto.toString() ?? 0)
    if(!presupuesto) setIsValidPres(false);
  },[presupuesto])

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
    if(gastos.length) setGastoFiltrado([]);
  },[gastos])

  useEffect(()=>{
    setGastoFiltrado(filtros ? gastos.filter(el=>el.clase == filtros) : gastos)
  },[filtros])
  
  useEffect(()=>{
    const presLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presLS) setIsValidPres(true)

  },[])

  const handleNuevoGasto = (tipo?:'nuevo' )=>{
    if(tipo == 'nuevo'){setGastoEditar(initialGasto);}
      
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    },300)
  }

  const deleteGasto = (id:string)=>{
    setGastos([...gastos].filter(el=>el.id!=id))
  }

  const saveGasto = (gasto:Gasto)=>{
    const ix = gastos.map(el=>el.id).indexOf(gasto.id)
    if(ix+1){
      let aux = [...gastos];
      aux[ix] = gasto;
      setGastos([...aux])
    }else{
      setGastos([...gastos,gasto]);
    }
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
              gastos={gastos}
              setGastos={setGastos}
              
          />
      {
        isValidPres && 
            <>
              <main>
                <Filtros  filtros={filtros}
                          setFiltros={setFiltros} />
                <ListadoGastos  gastoFiltrado={gastoFiltrado} 
                                setGastoEditar={setGastoEditar}
                                deleteGasto={deleteGasto} />
              </main>
              <div className="nuevo-gasto">
                <img  src={AddIcon}
                      alt="nueo gasto"
                      onClick={()=>handleNuevoGasto('nuevo')}/>
              </div>
            </>
      }
      {
        modal &&
          <Modal  setModal={setModal}
                  animarlModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  saveGasto={saveGasto}
                  gastoEditar={gastoEditar}
                  setGastoEditar={setGastoEditar}
                  />
      }

    </div>
  );
}

export default App;