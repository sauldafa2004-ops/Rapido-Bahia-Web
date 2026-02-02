
import React from 'react';
import { ShieldCheck, Heart, Users, Target, History } from 'lucide-react';
import { ClubValue } from '../types';

const values: ClubValue[] = [
  {
    title: 'Trabajo en Equipo',
    description: 'Nadie gana solo. Fomentamos la colaboración y el apoyo mutuo dentro y fuera del terreno de juego.',
    icon: 'Users'
  },
  {
    title: 'Esfuerzo y Superación',
    description: 'Nacimos del esfuerzo manual de nuestros fundadores y seguimos esa estela de sacrificio.',
    icon: 'Target'
  },
  {
    title: 'Respeto y Resiliencia',
    description: 'Aprendemos de las victorias y, sobre todo, de los momentos difíciles de nuestra historia.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Pasión Familiar',
    description: 'Somos el legado de familias de Gandón, unidas por la fraternidad y el deporte.',
    icon: 'Heart'
  }
];

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2 flex items-center">
            <History className="mr-2 h-4 w-4" /> Nuestra Historia
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Desde 1962 forjando una leyenda</h3>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              El <strong>Rápido Bahía</strong> tiene sus raíces en el lugar de <strong>Gandón (Aldán)</strong>. A principios de los años 60, figuras como Agustín da Costa y José Novas Herbello impulsaron el sueño de fundar el club, enviando la primera solicitud a la Federación en 1960, aunque fue en <strong>1962</strong> cuando el proyecto se consolidó definitivamente.
            </p>
            <p>
              Nuestros inicios fueron pura artesanía y pasión: los socios fundadores arreglaron el campo y construyeron a mano los bancos y el marcador. Eran tiempos de fraternidad, celebrando cada paso con comidas en casa de José Novas, forjando un club que es, ante todo, una gran familia.
            </p>
            <p className="bg-blue-50 p-4 border-l-4 border-blue-600 rounded-r-lg italic">
              "Tras superar una dura crisis institucional en la temporada 2017/18 que nos llevó a Tercera Galicia, el club ha renacido. En las últimas temporadas (21-22 y 22-23) hemos vuelto a luchar en los playoffs de ascenso, demostrando que el Rápido nunca se rinde."
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {values.map((value) => (
              <div key={value.title} className="flex space-x-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                    {value.icon === 'Users' && <Users size={20} />}
                    {value.icon === 'Target' && <Target size={20} />}
                    {value.icon === 'ShieldCheck' && <ShieldCheck size={20} />}
                    {value.icon === 'Heart' && <Heart size={20} />}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{value.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2">
          <div className="aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl z-10 relative">
            <img 
              src="https://images.unsplash.com/photo-1526232762682-d2f5f714dfc3?auto=format&fit=crop&q=80&w=1200" 
              alt="Historia Rápido Bahía" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-64 w-64 bg-blue-700 rounded-2xl -z-0 hidden md:block"></div>
          <div className="absolute -top-6 -left-6 h-32 w-32 bg-slate-200 rounded-full -z-0"></div>
          
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 z-20">
            <div className="flex items-center space-x-3">
              <div className="text-blue-700 font-bold text-xl">60+</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Años de orgullo y tradición en Aldán</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
