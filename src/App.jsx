import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Navbar from './layout/Navbar'
import LandingPage from './pages/LandingPage'
import Footer from './layout/Footer'


function App() {

const Location =useLocation()
const hiveNavbar = Location.pathname==='/AuthLogin'
const hiveFooter = Location.pathname ==='/AuthLogin'
  return (

   <>
   {!hiveNavbar && <Navbar/>}
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
