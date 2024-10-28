import { useState } from "react";
import logoCeleste from "../../public/vital5logo_sinFondo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-white w-full z-20 top-0 start-0 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoCeleste} className="h-12 md:h-16" alt="Vital Health Logo" />
            <div>
              <span className="text-3xl md:text-4xl font-semibold text-primary">VITAL</span><br />
              <span className="text-3xl md:text-4xl font-semibold text-primary">HEALTH</span>
            </div>
          </Link>
          <div className="flex md:order-2 space-x-2 md:space-x-3">
            <Link to={'/Auth/Login'}>
            <button 
              type="button" 
              className="text-white font-medium rounded-lg text-sm px-3 py-2 bg-secondary hover:bg-secondary-dark transition-colors duration-300"
              >
              RESERVA TU CITA
            </button>
              </Link>
            <button 
              onClick={toggleMenu}
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
              aria-controls="navbar-sticky" 
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
         
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 px-3 text-dark md:text-base md:p-0 hover:text-secondary">Especialidades</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-dark md:text-base md:p-0 hover:text-secondary">Sedes</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-dark md:text-base md:p-0 hover:text-secondary">Staff Medico</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-dark md:text-base md:p-0 hover:text-secondary">Servicios</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Menu Desplegable en Móvil */}
        <div 
          className={`fixed top-0 right-0 h-full bg-white w-3/4 max-w-sm p-4 shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <button 
            onClick={toggleMenu}
            className="text-gray-600 mb-4 focus:outline-none"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <ul className="space-y-4 font-medium text-dark">
            <li>
              <a href="#" className="block py-2 hover:text-secondary">Especialidades</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-secondary">Sedes</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-secondary">Staff Medico</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-secondary">Servicios</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
