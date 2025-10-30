
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-white/40">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none"
        >
            <span className="text-lg font-semibold text-gray-800">{question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDownIcon />
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-6 pt-0 text-gray-600">
                <p>{answer}</p>
            </div>
        </div>
    </div>
);

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "¿La agencia se responsabiliza por el servicio de transporte aéreo?",
            a: "La responsabilidad se limita a los términos del programa. No asumimos responsabilidad por el transporte aéreo, salvo en vuelos fletados bajo las condiciones del contrato de transporte."
        },
        {
            q: "¿Qué sucede si mi viaje se cancela por fuerza mayor?",
            a: "En casos de fuerza mayor (desastres naturales, huelgas, etc.), el operador y/o la agencia podrán modificar, reemplazar o cancelar itinerarios para garantizar el éxito del plan, lo cual es aceptado por el pasajero al adquirir el servicio."
        },
        {
            q: "¿En cuánto tiempo se procesan los reembolsos?",
            a: "Los reembolsos, si aplican, se realizarán dentro de los 30 días calendario siguientes a la solicitud. El monto dependerá de las condiciones del proveedor y los gastos de administración."
        },
        {
            q: "Si me niegan la visa, ¿tengo derecho a un reembolso?",
            a: "No. En caso de negativa de visa, no habrá lugar a reembolso de las sumas pagadas. La aprobación de la visa es de exclusiva autonomía de la autoridad consular."
        },
        {
            q: "¿Quién es responsable por mi equipaje y documentos?",
            a: "El pasajero es el exclusivo responsable de la custodia de su equipaje y documentos de viaje. La agencia puede orientar en caso de extravío, pero no responderá por la pérdida o daño."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Preguntas Frecuentes</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Resolvemos tus dudas para que viajes con total tranquilidad.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg overflow-hidden">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
