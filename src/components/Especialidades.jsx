

import { FaHeart,FaFemale,FaRibbon,FaStethoscope,FaArrowRight} from "react-icons/fa";
import { GiStomach } from "react-icons/gi";

function Especialidades() {
  const especialidades = [
    { icon: <FaHeart className="text-blue-300" size={40} />, title: "Cardiología" },
    { icon: <FaFemale className="text-blue-300" size={40} />, title: "Ginecología y Obstetricia" },
    { icon: <FaRibbon className="text-blue-300" size={40} />, title: "Centro Especializado de Oncología" },
    { icon: <FaStethoscope className="text-blue-300" size={40} />, title: "Terapia del dolor" },
    { icon: <GiStomach className="text-blue-300" size={40}/>, title: "Gastroenterología" }
  ];

  return (
    <section className=" text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {especialidades.map((esp, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-700 rounded-lg p-6 text-center shadow-lg transition-transform duration-300 hover:scale-95 hover:bg-white hover:text-dark"
            >
              <h3 className="text-sm font-semibold mb-1 tracking-wider">ESPECIALIDAD DE</h3>
              <div className="border-t-2 border-white w-10 mb-4"></div>
              <div className="mb-4">{esp.icon}</div>
              <h2 className="text-xl font-bold mb-4">{esp.title}</h2>
              <button className="flex items-center text-sm font-semibold hover:text-blue-400">
                VER MÁS <FaArrowRight className="ml-1" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex items-center text-blue-800 bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-full transition-all duration-300">
            Ver más especialidades <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Especialidades;
