import React, { useState, useEffect } from 'react';
import { Destination, BookingInquiry } from '../types';
import { CloseIcon, SendIcon } from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination;
  onSubmit: (inquiry: BookingInquiry) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, destination, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setName('');
      setEmail('');
      setMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      destinationTitle: destination.title,
      name,
      email,
      message,
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-lg w-full max-w-lg relative m-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <CloseIcon />
        </button>
        
        <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Solicitar Cotización</h2>
            <p className="text-lg text-fuchsia-600 font-semibold mb-6">{destination.title}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                    />
                 </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                    />
                 </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje (Opcional)</label>
                    <textarea 
                        id="message" 
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ej: Somos 2 adultos, nos gustaría viajar en diciembre..."
                        className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                    ></textarea>
                 </div>
                 <div className="pt-2">
                    <button 
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-fuchsia-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300"
                    >
                        <SendIcon />
                        Enviar Solicitud
                    </button>
                 </div>
            </form>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
