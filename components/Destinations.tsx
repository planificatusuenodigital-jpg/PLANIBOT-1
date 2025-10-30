import React from 'react';
import { Destination } from '../types';

interface DestinationCardProps {
    image: string;
    title: string;
    description: string;
    onSelect: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, description, onSelect }) => (
    <div 
        className="group rounded-2xl overflow-hidden shadow-lg relative bg-black cursor-pointer"
        onClick={onSelect}
    >
        <img src={image} alt={title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out group-hover:opacity-60"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">{description}</p>
        </div>
         <div className="absolute top-4 right-4 bg-fuchsia-600 text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Cotizar
        </div>
    </div>
);

interface DestinationsProps {
    destinations: Destination[];
    onSelectDestination: (destination: Destination) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ destinations, onSelectDestination }) => {
  return (
    <section id="destinations" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Destinos Populares</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explora los lugares que hemos preparado para tu próxima gran aventura.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map(dest => (
                <DestinationCard 
                    key={dest.title} 
                    {...dest}
                    onSelect={() => onSelectDestination(dest)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
