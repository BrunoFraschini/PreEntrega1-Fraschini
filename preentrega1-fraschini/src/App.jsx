import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/Navbar'
import "./componentes/NavBar/NavBar.css"
import "./componentes/CartWidget/CartWidget.css"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'




function App() {
  const [count, setCount] = useState(0)
  const TituloApp = "MUSIC CITY"
  const BienvenidaApp = "Bienvenido a Music city, la mejor tienda online de musica del pais."
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
  )
}

export default App
