
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="bg-[#e0e0e0] text-gray-800 antialiased relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fuchsia-200 via-violet-300 to-sky-200 opacity-50 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Destinations />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
