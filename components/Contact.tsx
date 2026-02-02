
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-black mb-6">Únete a la Familia <span className="text-blue-500">Bahía</span></h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Si tienes dudas sobre las inscripciones, horarios o quieres venir a probar un entrenamiento con nosotros, no dudes en escribirnos. Estaremos encantados de recibirte.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Ubicación</h4>
                <p className="text-slate-400">Polideportivo Municipal Bahía Blanca, Calle del Deporte s/n, 28001</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Teléfono</h4>
                <p className="text-slate-400">+34 912 345 678</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Correo Electrónico</h4>
                <p className="text-slate-400">contacto@rapidobahia.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Categoría de interés</label>
              <select className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white appearance-none transition-all">
                <option>Senior</option>
                <option>Juvenil</option>
                <option>Infantil A</option>
                <option>Infantil B</option>
                <option>Otra consulta</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Mensaje</label>
              <textarea 
                rows={4}
                required
                placeholder="¿En qué podemos ayudarte?"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white transition-all"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center transition-all transform active:scale-95"
            >
              Enviar Mensaje
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
