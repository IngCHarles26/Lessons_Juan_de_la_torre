import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { ClientesData } from "../assets/data";
import { deleteClient, getClients } from "../api/clientes";


// los loader siempre deben retornar algo
export function loader(){


  return getClients();
}

//@ts-ignore
export async function action({params}){
  deleteClient(params.id);
  return redirect('/')
}

function Index() {

  //@ts-ignore
  const datos:ClientesData[] = useLoaderData();

  const navigate = useNavigate();

  return ( 
    <>
      <h1 className="font-black text-blue-800 text-4xl"> Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {
        datos.length 
          ? (
            <table className="w-full bg-white shadow mt-5 table-auto">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="p-2">Cliente</th>
                  <th className="p-2">Contacto</th>
                  <th className="p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  datos.map(el=>(
                    <tr key={el.id+'key'} className="border-b">
                      <td className="p-6 space-y-2">
                        <p className="text-2xl text-gray-800">{el.nombre}</p>
                        <p>{el.empresa}</p>
                      </td>
                      <td>
                        <p className="text-gray-600">
                          <span className="text-gray-800 uppercase font-bold">Email: </span>
                          {el.email}
                        </p>
                        <p className="text-gray-600">
                          <span className="text-gray-800 uppercase font-bold">Telefono: </span>
                          {el.telefono}
                        </p>
                      </td>
                      <td className="p-6 flex gap-3">
                        <button 
                          onClick={()=>navigate('/cliente/' + el.id + '/editar')}
                          type="button" 
                          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">
                          Editar
                        </button>
                        <Form
                          action={'/cliente/'+el.id+'/eliminar'}
                          method="post">
                          <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                            Eliminar
                          </button>
                        </Form>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
          : (
            <p className="text-center">No hay Clientes aún</p>
          )
      }
    </>
  );
}

export default Index;