
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
                    Ser el portal profesional de salida (gateway) que facilita la materialización de los sueños de escape vacacional y ocio de la población en el Occidente de Caldas, ofreciendo una gestión de viajes organizada, vibrante y confiable.
                </InfoCard>
                <InfoCard icon={<VisionIcon />} title="Visión">
                    Consolidar nuestro liderazgo de reputación en el mercado regional, manteniendo un nivel de satisfacción del cliente excepcional (4.9 estrellas) y proyectando una marca dinámica y profesional para asegurar la fidelización a largo plazo.
                </InfoCard>
                <InfoCard icon={<ValuesIcon />} title="Valores">
                    Nuestros pilares son la **Confianza** (alta reputación), **Profesionalismo** (atención al detalle), **Dinamismo** (energía y entusiasmo), **Organización** (gestión impecable) y **Conocimiento Global** (expertos en destinos).
                </InfoCard>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
