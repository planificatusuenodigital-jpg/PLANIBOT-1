import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Policies from './components/Policies';
import Admin from './components/Admin';
import BookingModal from './components/BookingModal';
import { Destination, Service } from './types';

const App: React.FC = () => {
  const [isAdminView, setIsAdminView] = useState(false);

  // Default data
  const defaultHeroImage = "https://source.unsplash.com/1600x900/?tropical-beach,sunset";
  const defaultDestinations: Destination[] = [
    { image: "https://source.unsplash.com/800x600/?san-andres-island,colombia", title: "San Andrés", description: "Un paraíso de siete colores, ideal para el buceo, el descanso y la diversión bajo el sol caribeño." },
    { image: "https://source.unsplash.com/800x600/?cartagena,colombia", title: "La Costa Caribeña", description: "Descubre la magia de ciudades como Cartagena y Santa Marta, con su historia, playas y cultura vibrante." },
    { image: "https://source.unsplash.com/800x600/?tropical-beach,caribbean", title: "Destinos de Sol y Playa", description: "Te llevamos a los mejores destinos para que disfrutes de un escape vacacional inolvidable junto al mar." }
  ];
  const defaultServices: Service[] = [
    { icon: 'Package', title: "Planes de Ocio", description: "Paquetes turísticos completos a destinos de sol y playa, enfocados en el escape vacacional." },
    { icon: 'Transport', title: "Transporte", description: "Gestionamos tus tiquetes aéreos y traslados para que no te preocupes por nada." },
    { icon: 'Hotel', title: "Alojamiento", description: "Reservamos el hotel ideal para ti, según tu presupuesto y preferencias de categoría." },
    { icon: 'Food', title: "Alimentación", description: "Planes con alimentación incluida para que disfrutes al máximo de la gastronomía local." },
    { icon: 'Visa', title: "Asesoría de Visas", description: "Te brindamos la asesoría necesaria en caso de que tu destino soñado requiera una visa." },
    { icon: 'Support', title: "Atención al Cliente", description: "Soporte integral para consultas, peticiones, quejas y reclamos, siempre listos para ayudarte." }
  ];

  // State management with localStorage
  const [heroImage, setHeroImage] = useState<string>(() => localStorage.getItem('heroImage') || defaultHeroImage);
  const [destinations, setDestinations] = useState<Destination[]>(() => {
    const saved = localStorage.getItem('destinations');
    return saved ? JSON.parse(saved) : defaultDestinations;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('services');
    return saved ? JSON.parse(saved) : defaultServices;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminView(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => { localStorage.setItem('heroImage', heroImage); }, [heroImage]);
  useEffect(() => { localStorage.setItem('destinations', JSON.stringify(destinations)); }, [destinations]);
  useEffect(() => { localStorage.setItem('services', JSON.stringify(services)); }, [services]);

  const handleSelectDestination = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };
  
  const handleBookingSubmit = (inquiry: any) => {
    console.log("Booking Inquiry Submitted:", inquiry);
    alert(`Gracias, ${inquiry.name}. Hemos recibido tu solicitud para ${inquiry.destinationTitle}. Nos pondremos en contacto contigo pronto.`);
    setIsModalOpen(false);
  };

  if (isAdminView) {
    return <Admin 
            setHeroImage={setHeroImage} 
            addDestination={(dest) => setDestinations(prev => [...prev, dest])}
            addService={(serv) => setServices(prev => [...prev, serv])}
          />;
  }

  return (
    <div className="bg-[#e0e0e0] text-gray-800 antialiased relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fuchsia-200 via-violet-300 to-sky-200 opacity-50 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero bgImage={heroImage} />
          <About />
          <Services services={services} />
          <Destinations destinations={destinations} onSelectDestination={handleSelectDestination} />
          <Testimonials />
          <Faq />
          <Contact />
          <Policies />
        </main>
        <Footer />
        <Chatbot />
        {selectedDestination && (
          <BookingModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            destination={selectedDestination}
            onSubmit={handleBookingSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default App;
