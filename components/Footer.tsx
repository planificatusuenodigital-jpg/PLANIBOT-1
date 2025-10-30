import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './Icons';

const Footer: React.FC = () => {
    const socialLinks = [
        { href: 'https://www.facebook.com/profile.php?id=61557490192813', icon: <FacebookIcon />, name: 'Facebook' },
        { href: 'https://www.instagram.com/planificatusueno/', icon: <InstagramIcon />, name: 'Instagram' },
        { href: 'https://www.tiktok.com/@planificatusueno', icon: <TikTokIcon />, name: 'TikTok' },
        { href: 'https://wa.me/573113653379', icon: <WhatsAppIcon />, name: 'WhatsApp' }
    ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="mt-16 mx-4 md:mx-8 lg:mx-16 mb-4">
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg text-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-logo text-2xl mb-2 text-gray-800">Planifica Tu Sueño</h3>
              <p className="text-sm">
                Centro comercial La Colmena, Cra. 4 #13-32, Anserma, Caldas
              </p>
              <p className="text-sm mt-2 font-semibold">RNT 181495</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Enlaces</h3>
              <ul className="text-sm space-y-2">
                 <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-fuchsia-600">Nosotros</a></li>
                 <li><a href="#destinations" onClick={(e) => handleScroll(e, '#destinations')} className="hover:text-fuchsia-600">Destinos</a></li>
                 <li><a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-fuchsia-600">FAQ</a></li>
                 <li><a href="#policies" onClick={(e) => handleScroll(e, '#policies')} className="hover:text-fuchsia-600">Políticas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Contacto</h3>
              <p className="text-sm">Teléfono: +57 311 365 3379</p>
              <p className="text-sm">Email: planificatusueno12@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Síguenos</h3>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-fuchsia-600 transition-colors duration-300">
                        <span className="sr-only">{link.name}</span>
                        {link.icon}
                    </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/40 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Planifica Tu Sueño. Todos los derechos reservados.</p>
            <p className="mt-2"><a href="/#admin" className="text-xs text-gray-400 hover:text-gray-600">Admin</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
