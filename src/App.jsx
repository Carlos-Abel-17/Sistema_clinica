import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Navbar from './layout/Navbar'
import LandingPage from './pages/LandingPage'


function App() {

const Location =useLocation()
const hiveNavbar = Location.pathname==='/AuthLogin'
  return (

   <>
   {!hiveNavbar && <Navbar/>}
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
    </>
  )
}

export default App
