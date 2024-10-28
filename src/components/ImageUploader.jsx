import React, { useState } from "react";

function ImageUploader({ onImagesReady }) {
    const [resizedImages, setResizedImages] = useState([]);
  
    useEffect(() => {
      const imagesArray = [];
  
      imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
  
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
  
          // Definir el tamaño al que quieres redimensionar la imagen
          const width = 1920;
          const height = 512;
  
          // Configurar el tamaño del canvas
          canvas.width = width;
          canvas.height = height;
  
          // Dibujar la imagen en el canvas redimensionado
          ctx.drawImage(img, 0, 0, width, height);
  
          // Convertir la imagen redimensionada a base64
          const resizedImageUrl = canvas.toDataURL("image/jpeg");
  
          // Añadir imagen redimensionada a la lista
          imagesArray.push(resizedImageUrl);
  
          // Actualizar el estado con todas las imágenes redimensionadas cuando terminen de cargar
          if (imagesArray.length === imagePaths.length) {
            setResizedImages(imagesArray);
            onImagesReady(imagesArray); // Enviar las imágenes al componente padre
          }
        };
      });
    }, [imagePaths, onImagesReady]);
  
    return (
      <div>
        <p>Redimensionando imágenes...</p>
      </div>
    );
  }

export default ImageUploader;
