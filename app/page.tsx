'use client';

import React, { useState } from 'react';

interface Refrigerio {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
}

const REFRIGERIOS: Refrigerio[] = [
  {
    id: 1,
    nombre: "Canapés & Bocados Salados",
    categoria: "Bodas & Coctel",
    descripcion: "Crostinis con jamón serrano, mousse de salmón ahumado y mini tartaletas de brie.",
    imagen: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 2,
    nombre: "Mesa Dulce & Petit Fours",
    categoria: "Repostería Fina",
    descripcion: "Macarons artesanales, mini eclairs de café y shots de cheesecake de maracuyá.",
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    nombre: "Brunch Gourmet",
    categoria: "Corporativo",
    descripcion: "Mini croissants de pavo y edam, parfait de granolas selectas y frutos frescos.",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 4,
    nombre: "Charcutería & Quesos Madurados",
    categoria: "Aniversarios",
    descripcion: "Selección de embutidos curados, quesos finos, frutos secos y mermeladas de la casa.",
    imagen: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 5,
    nombre: "Snacks Healthy & Vitalidad",
    categoria: "Sociales",
    descripcion: "Bocadillos ligeros, brochetas de fruta de estación y bebidas prensadas en frío.",
    imagen: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1600",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalImagen, setModalImagen] = useState<string | null>(null);

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A059]/20">
      
      {/* --- NAV MINIMALISTA Y FLOTANTE --- */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white py-6 px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="font-serif italic text-2xl md:text-3xl tracking-wide font-light">
          Alma de Fiesta
        </a>

        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#experiencia" className="hover:opacity-60 transition-opacity">Experiencia</a>
          <a href="#catalogo" className="hover:opacity-60 transition-opacity">Catálogo</a>
          <a href="#galeria" className="hover:opacity-60 transition-opacity">Galería</a>
        </nav>

        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-60 transition-opacity"
        >
          Cotizar
        </a>
      </header>

      {/* --- HERO FULLSCREEN CON VIDEO/IMAGEN DE IMPACTO --- */}
      <section className="relative h-screen w-full flex items-end justify-start p-8 md:p-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=2000" 
            alt="Refrigerios para eventos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-white max-w-2xl space-y-4">
          <span className="font-serif italic text-3xl md:text-5xl text-[#E5C378] block">
            Arte Gastronómico
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight uppercase leading-none">
            REFRIGERIOS PARA EVENTOS
          </h1>
          <p className="text-xs md:text-sm text-gray-200 tracking-wider font-light pt-2">
            Medellín & alrededores — Experiencias visuales y de sabor diseñadas para celebraciones inolvidables.
          </p>
        </div>

        <div className="absolute bottom-8 right-8 z-10 text-white text-xs tracking-widest uppercase animate-bounce hidden md:block">
          ↓ Scrollea para explorar
        </div>
      </section>

      {/* --- SECCIÓN SECTORIAL CON MODO EXPLORADOR DE FOTOS (HERO SLIDER) --- */}
      <section id="experiencia" className="py-24 px-6 md:px-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-4 space-y-6">
            <span className="font-serif italic text-4xl text-[#C5A059] block">
              Inolvidables
            </span>
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-[#1A1A1A]">
              Elegancia en cada detalle
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
              Diseñamos cada estación pensando en la estética de tu evento. Menos texto, más sabor y una presentación fotogénica de nivel editorial.
            </p>
          </div>

          {/* Galería Dinámica Inmersiva */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              onClick={() => setModalImagen("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600")}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" 
                alt="Detalle catering" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase tracking-widest">
                Ampliar Fotografía
              </div>
            </div>

            <div 
              onClick={() => setModalImagen("https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600")}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer sm:translate-y-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                alt="Preparación artesanal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase tracking-widest">
                Ampliar Fotografía
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- CATÁLOGO ESTILO MAGAZINE / FULL-WIDTH LOOKBOOK (5 REFRIGERIOS) --- */}
      <section id="catalogo" className="py-24">
        <div className="px-8 md:px-20 mb-12 text-center md:text-left">
          <span className="font-serif italic text-4xl text-[#C5A059] block">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-5xl font-extralight uppercase tracking-wider">
            NUESTROS 5 REFRIGERIOS
          </h2>
        </div>

        {/* Muestra Interactiva Completa */}
        <div className="space-y-1 sm:space-y-0">
          {REFRIGERIOS.map((item, index) => (
            <div 
              key={item.id} 
              className="relative h-[70vh] w-full overflow-hidden group cursor-pointer"
              onClick={() => setModalImagen(item.imagen)}
            >
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16 text-white">
                <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#E5C378]">
                  <span>0{index + 1}</span>
                  <span>—</span>
                  <span>{item.categoria}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-light uppercase tracking-wide mt-1">
                  {item.nombre}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm font-light max-w-lg mt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALERÍA MOSAICO FULL-SCREEN EXPLORABLE --- */}
      <section id="galeria" className="py-24 px-4 md:px-12 bg-[#111111] text-white">
        <div className="text-center space-y-2 mb-16">
          <span className="font-serif italic text-4xl text-[#C5A059] block">
            Galería Visual
          </span>
          <h2 className="text-2xl md:text-4xl font-extralight uppercase tracking-widest">
            INSPIRACIÓN Y DETALLES
          </h2>
        </div>

        {/* Grid Visual de Fotografías Grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200",
          ].map((src, i) => (
            <div 
              key={i} 
              className="relative h-80 sm:h-96 rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setModalImagen(src)}
            >
              <img 
                src={src} 
                alt={`Galería ${i}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest border border-white px-4 py-2 rounded-full">
                  Ver Pantalla Completa
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX / MODAL FOTO FULLSCREEN --- */}
      {modalImagen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setModalImagen(null)}
        >
          <img 
            src={modalImagen} 
            alt="Fotografía full screen" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button 
            className="absolute top-8 right-8 text-white text-xs uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
            onClick={() => setModalImagen(null)}
          >
            Cerrar [ESC]
          </button>
        </div>
      )}

      {/* --- FOOTER DE CONTACTO DIRECTO --- */}
      <footer className="py-20 px-8 text-center bg-[#0A0A0A] text-white border-t border-gray-900">
        <span className="font-serif italic text-4xl text-[#C5A059] block mb-2">Alma de Fiesta</span>
        <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-6">
          HAGAMOS TU EVENTO MEMORABLE
        </h3>
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block bg-white text-black px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
        >
          Contactar por WhatsApp
        </a>
      </footer>

    </div>
  );
}