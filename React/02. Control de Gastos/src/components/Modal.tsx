import { useEffect, useState } from 'react';
import CerrarBtn from '../assets/cerrar.svg'
import Mensaje from './Mensaje';
import { Gasto } from '../App';

interface Props{
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  animarlModal: boolean,
  setAnimarModal: React.Dispatch<React.SetStateAction<boolean>>,
  saveGasto:(gasto: any) => void,
  gastoEditar: Gasto;
  setGastoEditar: React.Dispatch<React.SetStateAction<Gasto>>,

}

const generarId = ()=>{
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random+fecha
}


function Modal(props:Props) {
  const {setModal, animarlModal,setAnimarModal,saveGasto,gastoEditar,setGastoEditar} = props;

  const [name, setName] = useState('');
  const [monto, setMonto] = useState<number>(NaN);
  const [clase, setClase] = useState('');
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');

  useEffect(()=>{
    if(Object.values(gastoEditar).every(el=>el)){
      setName(gastoEditar.name);
      setMonto(gastoEditar.monto);
      setClase(gastoEditar.clase);
      setId(gastoEditar.id)
    }
  },[])

  const ocultarModal = ()=>{
    setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
    },500)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if([name,monto,clase].some(el=>!el)){
      setMessage('Todos los Campos son obligatorios');

      setTimeout(()=>{
        setMessage('');
      },3000);
      return;
    }
    saveGasto({name,monto,clase,id:id || generarId(),date:Date.now()})
  }

  return ( 
    <div className="modal">
      <div className="cerrar-modal">
        <img  src={CerrarBtn}
              alt='cerrar modal'
              onClick={ocultarModal}/>
      </div>

      <form onSubmit={handleSubmit}
            className={`formulario ${animarlModal ? 'animar' : 'cerrar'}`}>
        <legend>{gastoEditar.id ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        {message && 
          <Mensaje  message={message}
                    tipo='error'/>}
            

        <div className="campo">
          <label  htmlFor="nombre">
              Nombre Gasto
          </label>
          <input  type="text"
                  placeholder='Añade el Nombre del Gasto'
                  id='nombre'
                  value={name}
                  onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="campo">
          <label  htmlFor="nombre" 
                  className="nombnre">
              Cantidad
          </label>
          <input  type="number"
                  placeholder='Añade el monto'
                  id='nombre'
                  value={monto}
                  onChange={e=>setMonto(Number(e.target.value))}/>
        </div>
        <div className="campo">
          <label  htmlFor="categoria">
              Nombre Gasto
          </label>
          <select name="" id="categoria"
                  value={clase}
                  onChange={e=>setClase(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Gastos">Gastos Varios</option>
            <option value="Ocio">Ocio</option>
            <option value="Salud">Salud</option>
            <option value="Suscripciones">Suscripciones</option>
          </select>
        </div>
        <input  type='submit'
                value={gastoEditar.id ? 'Guardar Cambios' : 'Añadir Gasto'}/>

      </form>
    </div>
  );
}

export default Modal;