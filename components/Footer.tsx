
import React from 'react';
import { Trophy, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-6">
              <Trophy className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-black tracking-tighter">RÁPIDO BAHÍA</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Formando futbolistas y personas desde 1985 en la comunidad. Orgullosos de nuestra cantera y nuestros valores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-blue-500 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">El Club</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-white transition-colors">Historia</a></li>
              <li><a href="#categorias" className="hover:text-white transition-colors">Categorías</a></li>
              <li><a href="#noticias" className="hover:text-white transition-colors">Noticias</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reglamento Interno</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-xs mb-4">Suscríbete para recibir noticias y resultados cada lunes.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-l-lg outline-none focus:border-blue-500 text-sm w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors font-bold text-sm">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-xs">
          <p>© {new Date().getFullYear()} Rápido Bahía Fútbol Club. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado con pasión por el deporte.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
