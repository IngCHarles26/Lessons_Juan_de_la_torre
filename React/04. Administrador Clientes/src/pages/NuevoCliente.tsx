import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import { addClient } from "../api/clientes";

//@ts-ignore
export const action = async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errores = [];

  if(Object.values(data).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(data.email)){
    errores.push('Ingrese un email válido')
  }
 
  if(errores.length){
    return errores;
  }

  //@ts-ignore
  await addClient(data);

  return redirect('/')
}

function NuevoCliente() {
  const navigate = useNavigate();
  const errores = useActionData();

  return ( 
    <>
      <h1 className="font-black text-blue-800 text-4xl">Nuevo Cliente</h1>
      <p className="mt-3">LLena todos los campos para registra un nuevo cliente: </p>

      <div className="flex justify-end">
        <button 
          onClick={()=>navigate(-1)} //se utiliza para regresar al path anterior dentro del grupo de childresns
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">

        {//@ts-ignore
          errores?.length && errores.map(el=> 
          <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
            {el}
          </div> )}
        
        <Form 
          noValidate //deshabilita las validaciones de html5
          method="post">
          
          <Formulario />
          
          <input 
            value='Registrar Cliente'
            type="submit" 
            className="mt-5 w-full p-3 bg-blue-800 font-bold text-white text-lg"/>
        
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente;