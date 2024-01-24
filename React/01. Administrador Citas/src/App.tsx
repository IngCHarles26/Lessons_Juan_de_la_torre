import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { dataBase } from "./api/data";

export interface FormularioInfo{
  petName: string,
  ownName: string,
  email: string,
  date: string,
  symptoms: string,
  id: number,
}

export const initialFormData:FormularioInfo = {
  petName:'',
  ownName:'',
  email:'',
  symptoms:'',
  date:'',
  id:1,
};

function App() {

  const [patients, setPatients] = useState<FormularioInfo[]>(dataBase);
  const [patient, setPatient] = useState<FormularioInfo>(initialFormData);

  const handlePatients = ( el:FormularioInfo) => {
    setPatients([...patients, el])
  }

  const editPatients = (data:FormularioInfo)=>{
    let aux = patients;
    let ix = aux.findIndex(el=>el.id == data.id);
    aux[ix] = data;
    setPatients(aux)
  }

  const filterPatient = ( id:number) => {
    setPatients(patients.filter(el=>el.id!=id))
  }

  return ( 
    <main className="container mx-auto mt-20">

      <Header/>

      <div className="mt-12 md:flex">

        <Form
            handlePatients = {handlePatients}
            patient = {patient}
            editPatients = {editPatients}
            patients = {patients}
            setPatient = {setPatient}
          />

        <ListadoPacientes
            patients = {patients}
            setPatient = {setPatient}
            filterPatient = {filterPatient}
          />

      </div>

    </main>
  );
}



export default App;