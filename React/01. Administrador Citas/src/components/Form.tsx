import { useEffect, useState } from "react";
import { FormularioInfo, initialFormData } from "../App";

interface Props{
  handlePatients: (el:FormularioInfo)=>void,
  patient: FormularioInfo,
  editPatients:  (data: FormularioInfo) => void,
  patients: FormularioInfo[],
  setPatient: React.Dispatch<React.SetStateAction<FormularioInfo>>,
}



function Form( props:Props) {
  const { handlePatients, patient, patients, editPatients, setPatient} = props;
  
  const [formData, setFormData] = useState<FormularioInfo>(initialFormData);

  const [error, setError] = useState(false);

  const handleFormData = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setError(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(patient.petName){
      //modificar
      editPatients(formData);
      setPatient(initialFormData)
    }else{
      //agregar
      if(Object.values(formData).every(el=>el)){
        handlePatients({...formData,id:Math.max(...patients.map(el=>el.id))+1});
        // setFormData(initialFormData);
      }else{
        setError(true)
      }
    }
    
  }

  useEffect(()=>{
    setFormData(patient);
  },[patient])

  return ( 
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Form</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            onSubmit={handleSubmit}>
        {error && 
            <div className="bg-red-600 p-3 mb-3 rounded-md">
              <p className="text-white text-center uppercase font-bold">Hay un error</p>
            </div>}

        <div  className="mb-5">
          <label  className="block text-gray-700 uppercase font-bold" 
                  htmlFor="mascota">
              Nombre Mascota 
          </label>
          <input  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  id="mascota" 
                  type="text" 
                  name="petName"
                  value={formData.petName}
                  onChange={(e)=>handleFormData(e)}
                  placeholder="Nombre de la Mascota"/>
        </div>

        <div  className="mb-5">
          <label  className="block text-gray-700 uppercase font-bold" 
                  htmlFor="propietario">
              Nombre Propietario
          </label>
          <input  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  id="propietario" 
                  type="text" 
                  name="ownName"
                  value={formData.ownName}
                  onChange={(e)=>handleFormData(e)}
                  placeholder="Nombre del Propietario"/>
        </div>

        <div  className="mb-5">
          <label  className="block text-gray-700 uppercase font-bold" 
                  htmlFor="email">
              Email
          </label>
          <input  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  id="email" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={(e)=>handleFormData(e)}
                  placeholder="Email de contacto de propietario"/>
        </div>

        <div  className="mb-5">
          <label  className="block text-gray-700 uppercase font-bold" 
                  htmlFor="alta">
              Alta
          </label>
          <input  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  id="alta" 
                  name="date"
                  value={formData.date}
                  onChange={(e)=>handleFormData(e)}
                  type="date"/>
        </div>

        <div  className="mb-5">
          <label  className="block text-gray-700 uppercase font-bold" 
                  htmlFor="alta">
              Sintomas
          </label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    id="sintomas" 
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={(e)=>setFormData({...formData,symptoms:e.target.value})}
                    placeholder="Describe los sintomas"/>
        </div>

        <input  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                type="submit"
                value={patient.petName ? 'Editar Paciente' : 'Agregar Paciente'} />

      </form>
    </div>
  );
}

export default Form