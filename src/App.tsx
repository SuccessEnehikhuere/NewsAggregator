import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Landing, Login, SinglePage} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/singlepage',
    element: <SinglePage/>
  }
])

const App = () => {
  return(
   <RouterProvider router={router} />
  
  )
}

export default App