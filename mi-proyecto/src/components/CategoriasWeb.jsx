import React, { useState } from 'react';
import { Search, Home, Heart, User, MessageCircle, X, Send } from 'lucide-react';

export default function CategoriasWeb() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const categorias = [
    'Distritos', 'Programación', 'Educación',
    'Negocios y Gestión', 'Salud', 'Seguridad',
    'Ciencia', 'Arte', 'Tecnología'
  ];

  const menuItems = [
    { icon: Home, label: 'Inicio' },
    { icon: Heart, label: 'Favoritos' },
    { icon: User, label: 'Perfil' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-indigo-600">Wiki IA</h1>
            
            {/* Barra de búsqueda */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar una IA"
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              Iniciar sesión
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              Registrarse
            </button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Menú lateral */}
        <aside className="w-48 p-6">
          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            CATEGORÍAS
          </h2>
          
          {/* Grid de categorías */}
          <div className="grid grid-cols-3 gap-6">
            {categorias.map((categoria, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-indigo-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {categoria}
                </h3>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Chatbot */}
      {chatOpen ? (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Asistente IA</span>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="hover:bg-indigo-700 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                ¡Hola! ¿En qué puedo ayudarte hoy?
              </p>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:bg-indigo-700 transition-all hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}