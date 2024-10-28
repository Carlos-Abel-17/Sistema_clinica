import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import { FaArrowRight } from "react-icons/fa";
import Especialidades from "../components/Especialidades";
import Sedes from "../components/Sedes";
import { useState } from "react";

import atencion from '../images/atendiendo_a_paciente_redimencionado.jpeg'
import reu_doc from '../images/reunion_doctores_redimensionado.jpg'

import Inter from '../images/svg/logo_interseguro.svg'
import laPosi from '../images/LaPositivaSeguros.png'
import Mapfre from '../images/LOGO-MAPFRE-sin.png'

import staff from '../images/staff_medicos.jpg'
import tomo from '../images/tomo.jpg'

function LandingPage() {
    const imagenes = [atencion, reu_doc];
    const ImagenesConvenios = [Inter,laPosi,Mapfre];
    const ImagenesPQ = [staff,tomo ];
    const textosPQ = [
        "Nuestros médicos son altamente calificados y están comprometidos con tu salud.",
        "Contamos con la última tecnología para brindarte el mejor diagnóstico y tratamiento."
    ];
    const TitlePQ = [
        "El MEJOR STAFF DE MEDICOS",
        "LA TECNOLOGIA DE PRIMERA"
    ];


    const [imgPQ, SetimgPQ] = useState(0);
    const [fade, setFade] = useState(false);

    const handleImageChange = (index) => {
        setFade(true);
        setTimeout(() => {
            SetimgPQ(index);
            setFade(false);
        }, 300);
    };

    return (
        <>
            <Carrusel Imagenes={imagenes} />
            

            <section className="flex flex-col items-center justify-center w-full h-auto">
                <div className="flex">
                    <h2 className="text-dark text-3xl mt-8 font-semibold">
                        <span className="border-l-4 border-dark pl-2">NUESTROS CONVENIOS</span>
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center mt-8 space-x-4">
                    {ImagenesConvenios.map((i, index) => (
                        <div key={index} className="w-32 p-2">
                            <img
                                src={i}
                                alt="convenios"
                                className="w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-4 w-full flex justify-end pr-4">
                    <Link to="/tu-ruta" className="flex items-center transition-transform duration-300 hover:scale-95 p-2">
                        <button className="flex items-center text-blue-800 bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-full transition-all duration-300">
                            Ver más Convenios <FaArrowRight className="ml-2" />
                        </button>
                    </Link>
                </div>
            </section>

  
            <section className="relative w-full">
                <div className="relative">
                    <h2 className="text-3xl mt-8 font-semibold text-dark text-center">
                        <span className="border-l-4 border-dark pl-2">Conoce las especialidades de Vital Health</span>
                    </h2>
                    <Especialidades />
                </div>
            </section>


            <section>
                <h2 className="text-3xl mt-8 font-semibold text-dark text-center">
                    <span className="border-l-4 border-dark pl-2">Ubícanos para atenderte mejor</span>
                </h2>
                <div>
                    <Sedes />
                </div>
            </section>


            <section className="px-60"> 
    <h2 className="text-3xl mt-8 font-semibold text-dark text-center">
        <span className="border-l-4 border-dark pl-2">¿Por qué Vital Health?</span>
    </h2>
    <div className="flex flex-col items-center">

       
        <div className="flex justify-center items-center bg-purple-500 text-white py-2 rounded-lg mt-4">
            <button onClick={() => handleImageChange(0)} className="px-4 py-2 hover:bg-purple-600 transition">
                Médicos
            </button>
            <div className="h-8 border-l-2 border-white mx-4"></div>
            <button onClick={() => handleImageChange(1)} className="px-4 py-2 hover:bg-purple-600 transition">
                Tecnología
            </button>
        </div>

       
        <div className="flex items-center mt-4 border w-full h-[20em] overflow-hidden">
        
            <div className="w-1/2 flex justify-center">
                <img
                    src={ImagenesPQ[imgPQ]}
                    className={`w-full h-[20em] object-cover transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>
           
            <div className="bg-dark text-white w-1/2 h-full flex  items-center justify-center p-4">
            <div className="flex flex-col">
            <h2 className="text-center font-semibold text-2xl text-gray-300 mb-4">
                {TitlePQ[imgPQ]}
            </h2>
                <p className="text-lg text-center">
                    {textosPQ[imgPQ]}
                </p>
            </div>
            </div>
        </div>
    </div>
</section>


        </>
    );
}

export default LandingPage;
