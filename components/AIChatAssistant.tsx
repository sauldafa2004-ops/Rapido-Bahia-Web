
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: '¡Hola! Soy el asistente virtual de Rápido Bahía. ¿Sabías que nuestro club nació del esfuerzo de los vecinos de Gandón en 1962? Pregúntame sobre nuestra historia o los nuevos horarios de entrenamiento.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const model = ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Actúa como el asistente oficial del club de fútbol "Rápido Bahía". 
                  Información clave actualizada: 
                  - Fundación: 1962 (solicitud inicial en 1960). Fundadores: Agustín da Costa y José Novas Herbello del lugar de Gandón (Aldán).
                  - Origen: El campo y equipamiento (bancos, marcador) fueron construidos a mano por los socios.
                  - Jugadores: Contamos con más de 100 jugadores federados.
                  - Trayectoria: Tuvimos una crisis dura en 2017/18, pero hemos renacido luchando en los playoffs de ascenso en las temporadas 21-22 y 22-23.
                  - Categorías, Edades y Horarios:
                    * Senior: 18+ años. Martes y Viernes a las 21:00h.
                    * Juvenil: 16-18 años. Lunes, Miércoles y Viernes a las 19:30h.
                    * Infantil A: 13-15 años. Miércoles y Viernes a las 18:00h.
                    * Infantil B: 13-15 años. Miércoles y Viernes a las 18:30h.
                  - Valores: Superación, Trabajo en equipo y Respeto.
                  
                  Responde de forma amable y profesional. Usa estos datos históricos y horarios si te preguntan.
                  
                  Usuario pregunta: ${userMessage}`,
      });

      const response = await model;
      const aiResponse = response.text || 'Lo siento, no pude procesar tu solicitud ahora mismo. Por favor, contacta con nosotros directamente.';
      
      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error('Error with AI Assistant:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Lo siento, hay un problema técnico. Puedes contactarnos en contacto@rapidobahia.com.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <span className="font-bold">Asistente Bahía</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded-md transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-2">
                  <Loader2 className="animate-spin text-blue-600" size={16} />
                  <span className="text-xs text-slate-500">Analizando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre nuestra historia o horarios..."
                className="flex-grow px-4 py-2 bg-slate-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 disabled:bg-slate-300 transition-colors shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm whitespace-nowrap group-hover:ml-2">
            Historia y Horarios
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChatAssistant;
