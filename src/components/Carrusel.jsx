import { useState, useEffect } from "react";

function Carrusel({ Imagenes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Imagenes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [Imagenes.length]);

  return (
    <div className="relative w-full">

      <img
        src={Imagenes[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-[32rem] object-cover"
      />


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Imagenes.map((_, index) => (
          <div
            key={index}
            className={`relative w-8 h-8 flex items-center justify-center ${
              currentIndex === index ? "animate-progress-border" : ""
            }`}
          >
            <button
              className={`absolute inset-0 border-2 rounded-full w-full h-full flex items-center justify-center ${
                currentIndex === index
                  ? "bg-secondary text-white"
                  : "bg-white border-light text-dark"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </button>


            {currentIndex === index && (
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-progress-circle"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
