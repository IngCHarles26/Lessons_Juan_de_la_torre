import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, LoaderFunction, RouteObject, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import NuevoCliente, {action as newClientAction} from './pages/NuevoCliente.tsx'
import Index, { loader as clienteLoader, action as deleteClientAction } from './pages/Index.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import EditCliente, {loader as editClientLoader, action as editClientAction} from './pages/EditCliente.tsx'


const router = createBrowserRouter([
  {path: '', element: <Layout />, children:[
      {
        index:   true,
        element: <Index />,
        loader:  clienteLoader,
        errorElement: <ErrorPage />,
      },
      {
        path:    '/cliente/nuevo',
        element: <NuevoCliente />,
        action:  newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path:    '/cliente/:id/editar',
        element: <EditCliente />,
        loader: editClientLoader,
        errorElement: <ErrorPage />,
        action: editClientAction,
      },
      {
        path:    '/cliente/:id/eliminar',
        action: deleteClientAction,
      },
    ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router}/>

  </React.StrictMode>,
)

