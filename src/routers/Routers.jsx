import { createBrowserRouter } from 'react-router-dom'
import { NewClient } from '../components/NewClient'
import { Index } from '../components/Index'
import { Layout } from '../layouts/Layout'
import { loader as loaderClients } from '../data/loaderClients'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout /> ,
      children: [
        {
          index: true,
          element: <Index />,
          loader: loaderClients
        },
        {
          path: '/clientes/nuevo',
          element: <NewClient />
        }
      ]
    } 
  ])
