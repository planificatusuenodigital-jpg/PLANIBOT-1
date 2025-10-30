import React, { useState } from 'react';
import { Destination, Service } from '../types';
import { AdminIcon } from './Icons';

interface AdminProps {
  setHeroImage: (url: string) => void;
  addDestination: (destination: Destination) => void;
  addService: (service: Service) => void;
}

const Admin: React.FC<AdminProps> = ({ setHeroImage, addDestination, addService }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const [heroUrl, setHeroUrl] = useState('');
  const [destTitle, setDestTitle] = useState('');
  const [destDesc, setDestDesc] = useState('');
  const [destUrl, setDestUrl] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');
  const [serviceIcon, setServiceIcon] = useState('Package');

  const availableIcons = ['Package', 'Visa', 'Support', 'Transport', 'Hotel', 'Food', 'World', 'Ticket', 'Camera'];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple hardcoded password
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroUrl) {
      setHeroImage(heroUrl);
      setHeroUrl('');
      alert('Imagen principal actualizada!');
    }
  };

  const handleDestinationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destTitle && destDesc && destUrl) {
      addDestination({ title: destTitle, description: destDesc, image: destUrl });
      setDestTitle('');
      setDestDesc('');
      setDestUrl('');
      alert('Nuevo destino agregado!');
    }
  };
  
  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (serviceTitle && serviceDesc) {
      addService({ title: serviceTitle, description: serviceDesc, icon: serviceIcon });
      setServiceTitle('');
      setServiceDesc('');
      setServiceIcon('Package');
      alert('Nuevo servicio agregado!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-fuchsia-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-fuchsia-100 rounded-full">
                <AdminIcon />
            </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Panel de Administración</h1>
          <p className="text-gray-500 mb-6">Por favor, ingrese la contraseña para continuar.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <button type="submit" className="w-full bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition">
              Ingresar
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
           <a href="/" className="inline-block mt-4 text-sm text-gray-500 hover:text-fuchsia-600">Volver a la página principal</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Panel de Administración</h1>
            <a href="/" className="text-sm text-fuchsia-600 hover:underline">Volver al Sitio</a>
        </div>

        {/* Change Hero Image */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cambiar Imagen Principal</h2>
          <form onSubmit={handleHeroSubmit} className="space-y-4">
            <input
              type="text"
              value={heroUrl}
              onChange={(e) => setHeroUrl(e.target.value)}
              placeholder="URL de la nueva imagen"
              className="w-full input-style"
            />
            <button type="submit" className="btn-primary">Actualizar Imagen</button>
          </form>
        </div>

        {/* Add Destination */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Agregar Nuevo Destino</h2>
          <form onSubmit={handleDestinationSubmit} className="space-y-4">
            <input type="text" value={destTitle} onChange={(e) => setDestTitle(e.target.value)} placeholder="Título del Destino" className="w-full input-style" />
            <textarea value={destDesc} onChange={(e) => setDestDesc(e.target.value)} placeholder="Descripción" className="w-full input-style" rows={3}></textarea>
            <input type="text" value={destUrl} onChange={(e) => setDestUrl(e.target.value)} placeholder="URL de la Imagen" className="w-full input-style" />
            <button type="submit" className="btn-primary">Agregar Destino</button>
          </form>
        </div>

        {/* Add Service */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Agregar Nuevo Servicio</h2>
          <form onSubmit={handleServiceSubmit} className="space-y-4">
            <input type="text" value={serviceTitle} onChange={(e) => setServiceTitle(e.target.value)} placeholder="Título del Servicio" className="w-full input-style" />
            <textarea value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} placeholder="Descripción" className="w-full input-style" rows={2}></textarea>
            <select value={serviceIcon} onChange={(e) => setServiceIcon(e.target.value)} className="w-full input-style">
                {availableIcons.map(icon => <option key={icon} value={icon}>{icon}</option>)}
            </select>
            <button type="submit" className="btn-primary">Agregar Servicio</button>
          </form>
        </div>
      </div>
       <style>{`
            .input-style {
                background-color: #f9fafb;
                border: 1px solid #d1d5db;
                border-radius: 0.5rem;
                padding: 0.75rem 1rem;
                transition: ring 0.2s;
            }
            .input-style:focus {
                outline: none;
                ring: 2px solid #a855f7;
                border-color: #a855f7;
            }
            .btn-primary {
                background-color: #a855f7;
                color: white;
                font-weight: bold;
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                transition: background-color 0.2s;
            }
            .btn-primary:hover {
                background-color: #9333ea;
            }
       `}</style>
    </div>
  );
};

export default Admin;
