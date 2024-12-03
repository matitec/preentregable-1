import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar'

import ItemListContainer from './componentes/ItemListContainer'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App
