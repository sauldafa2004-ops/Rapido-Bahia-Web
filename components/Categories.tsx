
import React from 'react';
import { Category } from '../types';
import { Calendar, User } from 'lucide-react';

const categories: Category[] = [
  {
    id: 'senior',
    name: 'Senior',
    description: 'Nuestro equipo referente. Competición al más alto nivel, liderazgo y representación máxima de los colores del club.',
    ageRange: '18+ años',
    trainingDays: 'Martes y Viernes - 21:00h',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'juvenil',
    name: 'Juvenil',
    description: 'Etapa crucial de formación táctica y física. Preparamos a nuestros jóvenes para dar el salto al fútbol profesional o amateur.',
    ageRange: '16 - 18 años',
    trainingDays: 'Lunes, Miércoles y Viernes - 19:30h',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'infantil-a',
    name: 'Infantil A',
    description: 'Fomento de la competitividad sana y el perfeccionamiento técnico. Enfocado en el juego colectivo y la comprensión del campo.',
    ageRange: '13 - 15 años',
    trainingDays: 'Miércoles y Viernes - 18:00h',
    image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'infantil-b',
    name: 'Infantil B',
    description: 'Iniciación y desarrollo técnico. Enfocado en que los jugadores sigan creciendo deportivamente en un entorno competitivo.',
    ageRange: '13 - 15 años',
    trainingDays: 'Miércoles y Viernes - 18:30h',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800'
  }
];

const Categories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Cantera</h2>
        <h3 className="text-4xl font-extrabold text-slate-900">Nuestras Categorías</h3>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Contamos con programas adaptados para cada etapa del crecimiento, asegurando una evolución deportiva y personal equilibrada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div key={cat.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col">
            <div className="h-48 relative overflow-hidden">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                FC Rápido Bahía
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{cat.name}</h4>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{cat.description}</p>
              
              <div className="space-y-3 mt-auto pt-4 border-t border-slate-50">
                <div className="flex items-center text-sm text-slate-500 font-medium">
                  <User className="h-4 w-4 mr-2 text-blue-600" />
                  {cat.ageRange}
                </div>
                <div className="flex items-center text-sm text-slate-500 font-medium">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  {cat.trainingDays}
                </div>
              </div>
              
              <button className="mt-6 w-full py-3 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-blue-700 font-bold rounded-xl transition-colors">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
