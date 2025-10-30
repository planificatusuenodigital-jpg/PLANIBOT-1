import React from 'react';

interface HeroProps {
  bgImage: string;
}

const Hero: React.FC<HeroProps> = ({ bgImage }) => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 px-4 text-center text-white"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          <span className="font-logo text-fuchsia-400">Cumple tu más anhelado sueño</span> de viajar y conocer el mundo
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 font-semibold drop-shadow-md">
            Tu agencia de viajes en Anserma para el mundo.
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
          Nos dedicamos a hacer que cada viaje sea una experiencia única y personalizada, adaptada a tus deseos y necesidades.
        </p>
        <div className="mt-10">
          <a
            href="#destinations"
            onClick={handleScroll}
            className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 shadow-[4px_4px_12px_#00000080] hover:shadow-lg font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Explorar Destinos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
