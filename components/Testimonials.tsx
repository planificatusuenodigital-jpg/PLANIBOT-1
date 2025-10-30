
import React from 'react';
import { StarIcon } from './Icons';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-fuchsia-500/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">La Confianza de Nuestros Viajeros</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestra mayor recompensa es la satisfacción de quienes han cumplido sus sueños con nosotros.
          </p>
        </div>
        <div className="p-8 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] bg-[#e0e0e0] max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-7xl font-bold text-fuchsia-600">4.9</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-8 h-8 ${i < 4 ? 'text-yellow-400' : 'text-yellow-400/80'}`} />
                ))}
              </div>
              <p className="mt-2 text-gray-600">Basado en 213 opiniones</p>
            </div>
            <div className="md:border-l-2 border-gray-300 md:pl-8">
              <blockquote className="italic text-gray-700">
                <p>"Una experiencia increíble de principio a fin. La atención al detalle y el profesionalismo de Planifica Tu Sueño hicieron de nuestro viaje a San Andrés algo inolvidable. ¡Totalmente recomendados!"</p>
                <footer className="mt-4 font-bold text-gray-800">- Familia Pérez</footer>
              </blockquote>
              <blockquote className="italic text-gray-700 mt-6">
                <p>"La mejor decisión para nuestras vacaciones. Nos ayudaron con todo, desde los tiquetes hasta el hotel. Todo salió perfecto. Gracias por hacer nuestro sueño realidad."</p>
                <footer className="mt-4 font-bold text-gray-800">- Ana y Carlos</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
