import Sede_1 from '../images/imgSedes/sede_1.jpg';
import Sede_2 from '../images/imgSedes/sede_2.jpg';
import Sede_3 from '../images/imgSedes/sede_3.webp';
import Sede_4 from '../images/imgSedes/sede_4.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Sedes = () => {
  const sedes = [
    { image: Sede_1, title: 'San Borja', address: 'Av. Guardia Civil 421 - 433', link: '' },
    { image: Sede_2, title: 'Sede 2', address: 'Dirección 2', link: '#' },
    { image: Sede_3, title: 'Sede 3', address: 'Dirección 3', link: '#' },
    { image: Sede_4, title: 'Sede 4', address: 'Dirección 4', link: '#' },
  ];

  return (
    <section className="text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          {sedes.map((sede, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 hover:scale-95"
            >
              <img
                src={sede.image}
                alt={sede.title}
                className="w-full h-[30em] object-cover"
              />
              <div className="absolute inset-0 bg-blue-800 bg-opacity-60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold">{sede.title}</h3>
                <p className="text-sm mb-2">{sede.address}</p>
                <a
                  href={sede.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline"
                >
                  CONOCE LA SEDE →
                </a>
              </div>
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
};

export default Sedes;
