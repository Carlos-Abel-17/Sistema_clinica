import React from 'react';
import Error404 from '../../images/error_404.png'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">
        404 - Página no encontrada
      </h1>
      <img src={Error404} alt="" className='h-auto w-1/2 my-4' />
      <p className="mt-4 text-lg">Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default NotFound;