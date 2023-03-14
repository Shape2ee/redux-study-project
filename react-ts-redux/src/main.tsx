import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Routes } from './router'
const Router = createBrowserRouter(Routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>,
)
