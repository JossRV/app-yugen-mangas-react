import React from 'react'
// tambien puede funcionar el router en app sin necesidad de tenerlo en main
// importacion del router dom despues de agregarlos con yarn
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Inicio } from './routes/Inicio'
import { Comics } from './routes/Comics'
import { Novelas } from './routes/Novelas'
// agregar router en consola "yarn add react-router-dom" -> se agregara la version 6

// import { Home } from './routes/Home'

// creando rutas, funcion que espera un arreglo
const router = createBrowserRouter([
  // objetos
  // definimos como queremos nuestro sistema de routeo
  {
    // propiedad para especificar la url que queremos activar
    path: '/',
    // propiedad para especificar el componente que deseamos cargar
    element: <Inicio/>,
    // mostrar una vista de error en caso de no encontrar la ruta existente
    errorElement: <h1>Error 404 pagina no existente</h1>
  },{
    path: '/comics',
    element: <Comics/>
  },{
    path: '/novelas',
    element: <Novelas/>
  }
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

