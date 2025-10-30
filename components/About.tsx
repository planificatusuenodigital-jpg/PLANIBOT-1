
import React from 'react';
import { VisionIcon, MissionIcon, ValuesIcon } from './Icons';

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
    <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 text-center h-full">
        <div className="text-fuchsia-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 rounded-full">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{children}</p>
    </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Nuestra Esencia</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Más que una agencia, somos tus compañeros de sueños y aventuras.
          </p>
        </div>
        <div className="p-8 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] bg-[#e0e0e0]">
            <div className="grid md:grid-cols-3 gap-8">
                <InfoCard icon={<MissionIcon />} title="Misión">
                    Ser el portal profesional que facilita la materialización de los sueños de escape vacacional y ocio de nuestra comunidad, ofreciendo una gestión de viajes organizada, vibrante y confiable.
                </InfoCard>
                <InfoCard icon={<VisionIcon />} title="Visión">
                    Consolidar nuestro liderazgo y reputación en el mercado regional, manteniendo el más alto nivel de satisfacción del cliente y garantizando una operación robusta para la fidelización a largo plazo.
                </InfoCard>
                <InfoCard icon={<ValuesIcon />} title="Valores">
                    Confianza, Amabilidad, Profesionalismo, Dinamismo, Organización y Conocimiento Global son los pilares que guían cada uno de nuestros pasos para ofrecerte la mejor experiencia.
                </InfoCard>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
