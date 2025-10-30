
import React, { useState } from 'react';
import { PlaneIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Nosotros' },
    { href: '#services', label: 'Servicios' },
    { href: '#destinations', label: 'Destinos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contacto' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-8 lg:mx-16">
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="flex items-center space-x-2">
                <span className="text-3xl text-fuchsia-700">
                  <PlaneIcon />
                </span>
                <span className="font-logo text-2xl md:text-3xl text-gray-800">
                  Planifica Tu Sueño
                </span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-700 hover:bg-fuchsia-500/20 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-fuchsia-500/20 inline-flex items-center justify-center p-2 rounded-md text-fuchsia-600 hover:text-fuchsia-800 hover:bg-fuchsia-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-100 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-700 hover:bg-fuchsia-500/20 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
