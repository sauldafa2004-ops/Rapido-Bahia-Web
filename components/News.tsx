
import React from 'react';
import { NewsItem } from '../types';

const news: NewsItem[] = [
  {
    id: 1,
    title: 'I. Iglesias se corona como máximo goleador',
    excerpt: 'Con una racha imparable esta temporada, I. Iglesias se sitúa como el máximo artillero del Rápido Bahía, siendo pieza clave en la lucha por el ascenso.',
    date: '22 Mayo, 2024',
    image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Abierta la inscripción para el Campus de Verano',
    excerpt: 'Ya puedes reservar plaza para nuestro campus intensivo de tecnificación durante el mes de Julio. ¡Plazas limitadas!',
    date: '08 May, 2024',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: '¡Encarga ya tu equipación oficial!',
    excerpt: 'No te quedes sin la piel del Rápido Bahía. Manga corta por 25€ y manga larga por 27€. Haz tu pedido al 626 00 73 25 antes del 30 de octubre.',
    date: '15 Oct, 2024',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'
  }
];

const News: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2">Actualidad</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Noticias del Club</h3>
        </div>
        <button className="mt-4 md:mt-0 text-blue-700 font-bold hover:underline flex items-center">
          Ver todas las noticias
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <div className="relative h-64 mb-4 rounded-2xl overflow-hidden shadow-md">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-blue-700 shadow-sm">
                {item.date}
              </div>
              {item.id === 3 && (
                <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase animate-pulse">
                  ¡Últimos días!
                </div>
              )}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
              {item.title}
            </h4>
            <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
