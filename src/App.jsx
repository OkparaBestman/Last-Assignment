import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
