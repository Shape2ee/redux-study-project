import React from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Routes } from './routes'
const Router = createBrowserRouter(Routes)

const App: React.FC = () => {

  return (
    <RouterProvider router={Router} />
  )
}

export default App
