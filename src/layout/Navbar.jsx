import logoCeleste from "../../public/vital5logo_sinFondo.png";

function Navbar() {
    return ( 
        <>
<nav class="bg-white  w-full z-20 top-0 start-0 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logoCeleste} class="h-16" alt="Flowbite Logo"/>
      <div >
      <span class="self-center text-4xl font-semibold whitespace-nowrap text-primary">VITAL</span><br />
      <span class="self-center text-4xl font-semibold whitespace-nowrap text-primary">HEALTH</span>
      </div>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-secondary">RESERVA TU CITA</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a href="#" class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent text-dark md:p-0 hover:text-secondary" aria-current="page">Especialidades</a>
      </li>
      <li>
        <a href="#" class="block py-2 hover:text-secondary px-3 bg-blue-700 rounded md:bg-transparent text-dark md:p-0">Sedes</a>
      </li>
      <li>
        <a href="#" class="block py-2 hover:text-secondary px-3 bg-blue-700 rounded md:bg-transparent text-dark md:p-0">Staff Medico</a>
      </li>
      <li>
        <a href="#" class="block py-2 hover:text-secondary px-3 bg-blue-700 rounded md:bg-transparent text-dark md:p-0">Servicios</a>
      </li>
      <li>
      </li>
    </ul>
  </div>
  </div>
</nav>
        </>
     );
}

export default Navbar;