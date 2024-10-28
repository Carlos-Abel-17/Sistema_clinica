import { useState } from "react";

function Carrusel({ Imagenes }) {
  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <>
      <div className="relative w-full">
    
        <img
          src={Imagenes[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[32rem] object-cover"
        />
        <div>
          
        </div>
    
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Imagenes.map((_, index) => (
            <button
              key={index}
              className={`border rounded-full w-8 h-8 ${
                currentIndex === index
                  ? "bg-secondary text-white"
                  : "border-light text-dark blur-l "
              }`}
              onClick={() => setcurrentIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrusel;
