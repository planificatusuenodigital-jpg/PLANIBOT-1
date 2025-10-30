
import React, { useState } from 'react';
import { ChevronDownIcon, ShieldIcon } from './Icons';

interface PolicyItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const PolicyItem: React.FC<PolicyItemProps> = ({ title, children, isOpen, onClick }) => (
    <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg overflow-hidden mb-4">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none"
        >
            <span className="text-lg font-semibold text-gray-800">{title}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDownIcon />
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[4000px]' : 'max-h-0'}`}>
            <div className="p-6 pt-0 text-gray-600 prose-sm max-w-none">
                {children}
            </div>
        </div>
    </div>
);

const Policies: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="policies" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                     <div className="text-fuchsia-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/50 rounded-full shadow-inner">
                        <ShieldIcon />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800">Políticas y Cumplimiento</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Tu tranquilidad y la protección de tus datos son nuestra prioridad.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto p-8 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] bg-[#e0e0e0]">
                    <PolicyItem
                        title="Política General"
                        isOpen={openIndex === 0}
                        onClick={() => handleToggle(0)}
                    >
                        <p><strong>Régimen de Responsabilidad:</strong> Planifica tu sueño está sujeta al régimen de responsabilidad que establece la ley 300/96, D.R. 1075/97, Decreto 2438 de 2010 y las normas que los modifiquen, adicionen o reformen. La responsabilidad del organizador del plan o paquete turístico se limita a los términos y condiciones del programa en relación con la prestación y calidad de los servicios.</p>
                        <p><strong>Transporte Aéreo:</strong> La agencia no asume ninguna responsabilidad frente al usuario por el servicio de transporte aéreo, salvo que se trate de vuelo fletado y de acuerdo con las condiciones del contrato de transporte.</p>
                        <p><strong>Reembolsos:</strong> Las políticas de reembolso de los servicios no prestados en razón a situaciones de fuerza mayor o caso fortuito serán definidas por cada operador. Los reembolsos a que hubiere lugar, se realizarán dentro de los 30 días calendario siguientes a la solicitud. El porcentaje de reembolso dependerá de las condiciones del proveedor y de los gastos de administración de la agencia.</p>
                        <p><strong>Fuerza Mayor:</strong> La agencia no asume responsabilidad por eventos de fuerza mayor como accidentes, huelgas, terremotos, factores climáticos, condiciones de seguridad, factores políticos, negación de permisos de ingreso, etc. En estos casos, el operador y/o la agencia podrán modificar, reemplazar o cancelar itinerarios, fechas, vuelos, hoteles o servicios opcionales.</p>
                        <p><strong>Visas:</strong> En caso de requerirse visa, se prestará la asesoría del caso, siendo de la exclusiva autonomía de la autoridad consular todo lo relativo al trámite. En caso de negativa de visa, no habrá lugar a reembolso de las sumas pagadas.</p>
                        <p><strong>Equipaje y Documentos:</strong> El pasajero será el exclusivo responsable de la custodia de su equipaje y documentos de viaje. La agencia podrá orientar en caso de extravío, pero en ninguna circunstancia responderá por la pérdida, daño o deterioro de dichos elementos.</p>
                        <p><strong>Precios y Tarifas:</strong> Todos los precios, tarifas, impuestos, tasas o contribuciones están sujetos a cambio, disponibilidad y vigencia sin previo aviso. Aplican restricciones y condiciones para cada tarifa publicada.</p>
                        <p><strong>Aceptación de Condiciones:</strong> El cliente declara que conoce y acepta en su integridad estas condiciones, las cuales constituyen el acuerdo único, total y excluyente de cualquier pacto o disposición legal en contrario.</p>
                        <p><strong>RNT 181495</strong></p>
                    </PolicyItem>
                    <PolicyItem
                        title="Política de Privacidad y Tratamiento de Datos"
                        isOpen={openIndex === 1}
                        onClick={() => handleToggle(1)}
                    >
                        <h4 className="font-bold text-gray-700">OBJETIVO</h4>
                        <p>Con la implementación de esta política, se pretende garantizar la reserva de la información y la seguridad sobre el tratamiento que se le dará a la misma a todos los clientes, proveedores, empleados y terceros de quienes PLANIFICA TU SUEÑO ha obtenido legalmente información y datos personales conforme a los lineamientos establecidos por la Ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013.</p>

                        <h4 className="font-bold text-gray-700 mt-4">PRINCIPIOS PARA EL TRATAMIENTO DE DATOS</h4>
                        <p>El tratamiento de datos se rige por los siguientes principios:</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Legalidad:</strong> El tratamiento se sujeta a lo establecido en la ley.</li>
                            <li><strong>Finalidad:</strong> El tratamiento debe obedecer a una finalidad legítima.</li>
                            <li><strong>Libertad:</strong> El tratamiento sólo puede ejercerse con el consentimiento previo, expreso e informado del titular.</li>
                            <li><strong>Veracidad o Calidad:</strong> La información debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.</li>
                            <li><strong>Transparencia:</strong> Se garantiza el derecho del titular a obtener información sobre la existencia de datos que le conciernan.</li>
                            <li><strong>Acceso y Circulación Restringida:</strong> El tratamiento se limita a personas autorizadas por el titular o la ley.</li>
                            <li><strong>Seguridad:</strong> Se maneja la información con las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros.</li>
                            <li><strong>Confidencialidad:</strong> Todas las personas que intervengan en el tratamiento de datos están obligadas a garantizar la reserva de la información.</li>
                        </ul>
                        
                        <h4 className="font-bold text-gray-700 mt-4">DERECHOS DE LOS TITULARES</h4>
                        <p>Usted tiene derecho a:</p>
                        <ul className="list-disc pl-5">
                            <li>Conocer, actualizar, rectificar y consultar sus datos personales.</li>
                            <li>Solicitar prueba de la autorización otorgada.</li>
                            <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
                            <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
                            <li>Revocar la autorización y/o solicitar la supresión de algún dato si no hemos respetado sus derechos.</li>
                            <li>Acceder en forma gratuita a sus datos personales.</li>
                        </ul>

                         <h4 className="font-bold text-gray-700 mt-4">FINALIDADES DEL TRATAMIENTO</h4>
                        <p>Los datos recolectados podrán ser utilizados para:</p>
                        <ol className="list-decimal pl-5">
                            <li>Sustentar la relación contractual.</li>
                            <li>Prestar los servicios ofrecidos.</li>
                            <li>Enviar información sobre cambios, nuevos servicios o productos.</li>
                            <li>Gestionar solicitudes, aclaraciones e investigaciones.</li>
                            <li>Elaborar estudios y programas para determinar hábitos de consumo.</li>
                            <li>Realizar evaluaciones periódicas de nuestros productos y servicios.</li>
                            <li>Transmitir y/o transferir datos a terceros y alianzas comerciales para cumplir con las obligaciones adquiridas.</li>
                            <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
                            <li>Dar respuesta a consultas, peticiones, quejas y reclamos de organismos de control.</li>
                            <li>Prevenir fraudes o delitos relacionados con el lavado de activos (SARLAFT).</li>
                        </ol>

                        <h4 className="font-bold text-gray-700 mt-4">PETICIONES, QUEJAS Y RECLAMOS (PQR)</h4>
                        <p>Para PQR relacionadas con el manejo de datos personales, puede escribir al correo electrónico: <strong>planificatusueno12@gmail.com</strong>. Las consultas serán atendidas en un máximo de diez (10) días hábiles y los reclamos en un máximo de quince (15) días hábiles.</p>
                        
                        <h4 className="font-bold text-gray-700 mt-4">VIGENCIA</h4>
                        <p>PLANIFICA TU SUEÑO se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales. Los cambios serán anunciados en esta página con antelación a su puesta en práctica.</p>
                    </PolicyItem>
                </div>
            </div>
        </section>
    );
};

export default Policies;
