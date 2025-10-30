
import React from 'react';

const Hero: React.FC = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="min-h-[calc(100vh-10rem)] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight">
          <span className="font-logo text-fuchsia-700">Cumple tu más anhelado sueño</span> de viajar y conocer el mundo
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Nos dedicamos a hacer que cada viaje sea una experiencia única y personalizada, adaptada a tus deseos y necesidades.
        </p>
        <div className="mt-10">
          <a
            href="#destinations"
            onClick={handleScroll}
            className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#a13da1,inset_-2px_-2px_4px_#ff55ff] active:shadow-[inset_4px_4px_8px_#a13da1,inset_-4px_-4px_8px_#ff55ff] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Explorar Destinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
