
import React from 'react';
import { LocationIcon, ClockIcon, PhoneIcon } from './Icons';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Ponte en Contacto</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Estamos listos para ayudarte a planificar tu próxima aventura. ¡Visítanos o llámanos!
                    </p>
                </div>
                <div className="p-8 rounded-3xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] bg-[#e0e0e0]">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Oficina</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-start space-x-4">
                                    <span className="text-fuchsia-600 mt-1"><LocationIcon /></span>
                                    <span>Centro comercial La Colmena, Cra. 4 #13-32, Anserma, Caldas, Colombia</span>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-fuchsia-600 mt-1"><PhoneIcon /></span>
                                    <span>+57 311 365 3379</span>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="text-fuchsia-600 mt-1"><ClockIcon /></span>
                                    <div>
                                        <p><strong>Lunes a Viernes:</strong></p>
                                        <p className="pl-2">8:00am - 12:00pm</p>
                                        <p className="pl-2">2:00pm - 5:30pm</p>
                                        <p className="mt-2"><strong>Sábados:</strong></p>
                                        <p className="pl-2">8:00am - 1:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/40">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.136516346761!2d-75.78202308874678!3d4.298287595786196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4708769305146d%3A0x77c272714578a4c8!2sCra.%204%20%2313-32%2C%20Anserma%2C%20Caldas!5e0!3m2!1sen!2sco!4v1700000000000!5m2!1sen!2sco" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Planifica Tu Sueño"
                                className="min-h-[400px]"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
