
import React from 'react';
import { PackageIcon, VisaIcon, SupportIcon, TransportIcon, HotelIcon, FoodIcon } from './Icons';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="text-fuchsia-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 rounded-full">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);


const Services: React.FC = () => {
    const servicesList = [
        {
            icon: <PackageIcon />,
            title: "Planes de Ocio",
            description: "Paquetes turísticos completos a destinos de sol y playa, enfocados en el escape vacacional."
        },
        {
            icon: <TransportIcon />,
            title: "Transporte",
            description: "Gestionamos tus tiquetes aéreos y traslados para que no te preocupes por nada."
        },
        {
            icon: <HotelIcon />,
            title: "Alojamiento",
            description: "Reservamos el hotel ideal para ti, según tu presupuesto y preferencias de categoría."
        },
        {
            icon: <FoodIcon />,
            title: "Alimentación",
            description: "Planes con alimentación incluida para que disfrutes al máximo de la gastronomía local."
        },
        {
            icon: <VisaIcon />,
            title: "Asesoría de Visas",
            description: "Te brindamos la asesoría necesaria en caso de que tu destino soñado requiera una visa."
        },
        {
            icon: <SupportIcon />,
            title: "Atención al Cliente",
            description: "Soporte integral para consultas, peticiones, quejas y reclamos, siempre listos para ayudarte."
        }
    ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Planes y Servicios</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para un viaje inolvidable, gestionado por expertos.
          </p>
        </div>
         <div className="p-8 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] bg-[#e0e0e0]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesList.map(service => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default Services;
