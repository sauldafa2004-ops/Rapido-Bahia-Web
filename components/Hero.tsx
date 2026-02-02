
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight animate-fade-in-up">
          RÁPIDO BAHÍA <br />
          <span className="text-blue-400">FÚTBOL CLUB</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 font-medium">
          "Más que un club, una familia en el campo. Formando personas, forjando campeones."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#categorias" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-lg shadow-blue-900/40"
          >
            Nuestras Categorías
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#sobre-nosotros" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-full font-bold text-lg backdrop-blur-sm transition-all"
          >
            Conoce nuestra historia
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center space-x-12 text-white/70">
        <div className="text-center">
          <div className="text-3xl font-bold">1962</div>
          <div className="text-sm uppercase tracking-widest">Fundación</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">+100</div>
          <div className="text-sm uppercase tracking-widest">Jugadores</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">4</div>
          <div className="text-sm uppercase tracking-widest">Categorías</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
