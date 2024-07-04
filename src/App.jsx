import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
import Mcard from './components/Mcard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
     <Route path ='/'element={<View/>}></Route>
     <Route path ='/add' element={<Add person={{ Name:'Jaya',
  Phone:'8927365178',Password:'@34jaya',Email:'jaya24@gmail.com'}}/>}></Route>
     <Route path ='/card' element={<Mcard/>}></Route>
    </Routes>
    </>
  )
}

export default App
