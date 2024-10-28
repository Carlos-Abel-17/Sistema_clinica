

const Footer = (params) => {
    return (
        <footer className="bg-gray-800 mt-8 text-white pt-8 pb-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
         
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-semibold">VITAL HEALTH</h2>
              <p className="mt-2 text-gray-400">
                Mejorando la salud de nuestros pacientes con servicios de calidad.
              </p>
            </div>
  
           
            <div className="flex flex-wrap space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white">
                Especialidades
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Sedes
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Staff Médico
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Servicios
              </a>
            </div>
  
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold">Contacto</h3>
              <p className="text-gray-400 mt-2">Av. Salud 123, Lima, Perú</p>
              <p className="text-gray-400">Tel: +51 123 456 789</p>
              <p className="text-gray-400">Email: contacto@vitalhealth.com</p>
            </div>
  
       
            <div>
              <h3 className="text-xl font-semibold">Síguenos</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
  
    
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
            © 2024 VITAL HEALTH. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    )
}

export default Footer;