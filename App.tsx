
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="sobre-nosotros" className="py-20">
          <About />
        </section>
        <section id="categorias" className="py-20 bg-blue-50">
          <Categories />
        </section>
        <section id="noticias" className="py-20">
          <News />
        </section>
        <section id="contacto" className="py-20 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default App;
