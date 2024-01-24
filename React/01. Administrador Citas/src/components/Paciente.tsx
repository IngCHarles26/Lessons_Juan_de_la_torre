import { FormularioInfo } from "../App";

interface Props{
  petName: string,
  ownName: string,
  email: string,
  date: string,
  symptoms: string,
  id:number,
  setPatient: React.Dispatch<React.SetStateAction<FormularioInfo>>,
  filterPatient:  (namePet: number) => void,
}

function Paciente( props:Props ) {
  const { id,ownName, date, petName, email, symptoms, setPatient, filterPatient} = props;
  return ( 
    <div className="mb-5 bg-white mt-0 shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: 
            <span className="font-normal normal-case"> {petName}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: 
            <span className="font-normal normal-case"> {ownName}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          email: 
            <span className="font-normal normal-case"> {email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Alta: 
            <span className="font-normal normal-case"> {date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: 
            <span className="font-normal normal-case"> {symptoms}</span>
        </p>

        <div className="flex justify-evenly mt-5">
          <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
                  type="button"
                  onClick={()=>setPatient({petName,ownName,date,email,symptoms,id})}
              >
            Editar
          </button>
          
          <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
                  type="button"
                  onClick={()=>filterPatient(id)}
              >
            Eliminar
          </button>
        </div>
      </div>
  );
}

export default Paciente;