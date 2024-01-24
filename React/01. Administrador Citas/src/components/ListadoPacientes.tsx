import { FormularioInfo } from "../App";
import Paciente from "./Paciente";

interface Props {
  patients: FormularioInfo[],
  setPatient: React.Dispatch<React.SetStateAction<FormularioInfo>>,
  filterPatient:  (namePet: number) => void,
}

function ListadoPacientes(props:Props) {
  const {patients,setPatient,filterPatient} = props;

  const havePatients = patients.length;

  return ( 
    <div className="md:w-1/2 lg:w-3/5 md:h-screen ml-10">
      <h2 className="font-black text-3xl text-center">
        {havePatients ? 'Lista de pacientes' : 'No ha Pacientes'}</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        {havePatients ? 'Administra tus' : 'Comienza agregando pacientes'} 
          <span className="text-indigo-600 font-bold"> {havePatients ? 'Pacientes y Citas' : 'y aparecerán en este lugar'}</span>
      </p>

      <div className="h-screen overflow-y-scroll">
        {patients.map(el=>
            <Paciente key={'key_'+el.id}
                      date={el.date}
                      email={el.email}
                      ownName={el.ownName}
                      petName={el.petName}
                      symptoms={el.symptoms}
                      id={el.id}
                      setPatient={setPatient}
                      filterPatient={filterPatient}
        />)}
      </div>
      
    </div>
  );
}

export default ListadoPacientes;