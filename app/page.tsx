'use client';

import React, { useState, useEffect } from 'react';

// Interfaz para los menús
interface Refrigerio {
  id: number;
  nombre: string;
  categoria: string;
  resumen: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

// Interfaz para el segundo carrusel de servicios con imagen
interface ServicioEvento {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  badge: string;
  imagen: string;
}

// Menús con datos reales y precios (IMÁGENES Y RUTAS LOCALES EXACTAS)
const REFRIGERIOS: Refrigerio[] = [
  {
    id: 1,
    nombre: "Menú Encuentro",
    categoria: "Equilibrado & Práctico",
    resumen: "Pastel de pollo + Jugo Hit + Fruta de temporada",
    descripcion: "Una combinación equilibrada y práctica para compartir en cualquier ocasión. Incluye un pastel de pollo de sabor casero, jugo Hit y una fruta de temporada, ofreciendo una experiencia fresca y deliciosa.",
    imagen: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    precio: 12400,
  },
  {
    id: 2,
    nombre: "Menú Brisa",
    categoria: "Tradicional & Reconfortante",
    resumen: "Pastel de carne + Pony Malta Mini + Galleta de coco",
    descripcion: "Una propuesta con un toque tradicional y reconfortante. El pastel de carne, acompañado de una Pony Malta Mini y una galleta de coco, crea una combinación práctica, deliciosa y perfecta para compartir.",
    imagen: "/WhatsApp Image 2026-08-06 at 13.57.18.jpeg",
    precio: 12400,
  },
  {
    id: 3,
    nombre: "Menú Crecer",
    categoria: "Fresco & Dulce",
    resumen: "Brownie + Fruta de temporada + Mini Yox o Té Hatsu",
    descripcion: "Una opción fresca y equilibrada que combina el sabor del brownie con la frescura de una fruta de temporada, acompañados de Mini Yox o té Hatsu en caja. Pensada para disfrutar en reuniones o pausas.",
    imagen: "/WhatsApp Image 2026-08-06 at 14.04.24.jpeg",
    precio: 12400,
  },
  {
    id: 4,
    nombre: "Menú Conexión",
    categoria: "Ligero & Delicioso",
    resumen: "Palito de queso + Jugo Hit + Fruta de temporada",
    descripcion: "Una combinación ligera y deliciosa que reúne un palito de queso, jugo Hit y una fruta de temporada. Una opción fresca y práctica, ideal para acompañar encuentros y jornadas de trabajo.",
    imagen: "/WhatsApp Image 2026-08-06 at 14.16.28.jpeg",
    precio: 12400,
  },
  {
    id: 5,
    nombre: "Menú Raíces",
    categoria: "Sabor Criollo & Cercano",
    resumen: "Empanada de pollo/carne + Jugo Hit + Fruta de temporada",
    descripcion: "Inspirado en los sabores que evocan tradición y cercanía, este menú combina una empanada de pollo o carne desmechada, jugo Hit y una fruta de temporada. Llena de sabor e ideal para compartir.",
    imagen: "/WhatsApp Image 2026-08-06 at 14.17.54 (1).jpeg",
    precio: 12400,
  },
];

// Carrusel de imágenes para el Hero Banner (TODAS TUS FOTOS)
const HERO_IMAGES = [
  "https://i.pinimg.com/736x/85/1c/32/851c3235ec603a6ab19ad94f4facc73e.jpg",
  "https://i.pinimg.com/1200x/18/7e/d4/187ed4f3696a73b7beee1f00e18f8521.jpg",
  "https://i.pinimg.com/736x/f8/5e/62/f85e62f60af2931660c292ead4a54b42.jpg",
  "https://i.pinimg.com/1200x/10/00/35/10003520d4b87bd7e001da609eadcd6a.jpg",
  "https://i.pinimg.com/736x/5d/b4/bc/5db4bce68eb691307bc1aa9ace2c3371.jpg",
];

// Datos para el segundo carrusel (Imagen al lado izquierdo + Información al lado derecho)
const SERVICIOS_EVENTOS: ServicioEvento[] = [
  {
    id: 1,
    titulo: "Eventos Empresariales",
    subtitulo: "Pausas activas, capacitaciones y reuniones corporativas",
    descripcion: "Refrigerios frescos en empaques individuales, prácticos y elegantes. Garantizamos puntualidad absoluta para que el flujo de tu agenda empresarial sea perfecto.",
    badge: "Corporativo",
    imagen: "https://i.pinimg.com/736x/41/62/fc/4162fce3d7cbac51b9709cbbb2f99bc7.jpg",
  },
  {
    id: 2,
    titulo: "Baby Showers",
    subtitulo: "Celebraciones delicadas y llenas de dulzura",
    descripcion: "Opciones estéticas y deliciosas pensadas para compartir en familia. Presentaciones impecables y llenas de detalle para la llegada de tu bebé.",
    badge: "Sociales",
    imagen: "https://i.pinimg.com/736x/1d/76/c0/1d76c011b1960734ff87984a0849083e.jpg",
  },
  {
    id: 3,
    titulo: "Bodas",
    subtitulo: "Elegancia y distinción en cada bocado",
    descripcion: "Bocados gourmet y canapés de alta gama preparados para recepciones y momentos especiales donde la presentación y el sabor son los protagonistas.",
    badge: "Exclusivo",
    imagen: "https://i.pinimg.com/1200x/23/8f/b7/238fb7d8f10c5815e1e9e67d17ff52ca.jpg",
  },
  {
    id: 4,
    titulo: "Novenas Empresariales",
    subtitulo: "Celebraciones navideñas y cierres de año",
    descripcion: "Lo mejor para agasajar a tus colaboradores y clientes. Menús temáticos diseñados especialmente para novenas de aguinaldos y eventos de fin de año.",
    badge: "Navidad",
    imagen: "https://i.pinimg.com/1200x/ac/60/a4/ac60a4a3d26c29f88f14035aa7379a74.jpg",
  },
];

const PAYMENT_METHODS = [
  { name: "Visa", logo: "/visa.png" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { name: "Nequi", logo: "/nequi.png" },
  { name: "Daviplata", logo: "/daviplata.png" },
];

const PHONE_NUMBER = "573208355419";
const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_NUMBER}?text=`;

export default function Page() {
  const [modalImagen, setModalImagen] = useState<string | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentServicioIndex, setCurrentServicioIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  // Cambio automático del carrusel Hero cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Tecla ESC para cerrar modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImagen(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextHeroImage = () => {
    setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevHeroImage = () => {
    setCurrentHeroImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const nextServicio = () => {
    setCurrentServicioIndex((prev) => (prev + 1) % SERVICIOS_EVENTOS.length);
  };

  const prevServicio = () => {
    setCurrentServicioIndex((prev) => (prev - 1 + SERVICIOS_EVENTOS.length) % SERVICIOS_EVENTOS.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
  };

  const toggleFlip = (id: number) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const mainWhatsAppLink = `${WHATSAPP_BASE_URL}${encodeURIComponent('Hola, me gustaría cotizar refrigerios para un evento.')}`;

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased selection:bg-[#C5A059]/20">
      
      {/* --- HEADER CON LOGO A LA IZQUIERDA DE ALMA DE FIESTA --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md text-white py-3 px-6 md:px-16 flex items-center justify-between border-b border-white/10">
        
        {/* LOGO A LA IZQUIERDA Y TEXTO ALMA DE FIESTA */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/WhatsApp_Image_2026-08-06_at_13.25.58-removebg-preview.png" 
            alt="Logo Alma de Fiesta" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-serif italic text-2xl md:text-3xl tracking-wide font-light text-[#E5C378]">
            Alma de Fiesta
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#experiencia" className="hover:text-[#E5C378] transition-colors">Experiencia</a>
          <a href="#catalogo" className="hover:text-[#E5C378] transition-colors">Menús & Precios</a>
          <a href="#servicios-eventos" className="hover:text-[#E5C378] transition-colors">Servicios para Eventos</a>
          <a href="#galeria" className="hover:text-[#E5C378] transition-colors">Galería</a>
        </nav>

        {/* Botón WhatsApp Header */}
        <div className="flex items-center gap-4">
          <a 
            href={mainWhatsAppLink} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden sm:inline-block bg-[#C5A059] text-black px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-md"
          >
            Cotizar Evento
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Abrir Menú"
          >
            <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 text-white flex flex-col items-center justify-center gap-8 text-lg uppercase tracking-widest md:hidden">
          <a href="#experiencia" onClick={() => setMobileMenuOpen(false)}>Experiencia</a>
          <a href="#catalogo" onClick={() => setMobileMenuOpen(false)}>Menús & Precios</a>
          <a href="#servicios-eventos" onClick={() => setMobileMenuOpen(false)}>Servicios para Eventos</a>
          <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>Galería</a>
          <a 
            href={mainWhatsAppLink} 
            target="_blank" 
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#C5A059] text-black px-8 py-3 rounded-full text-xs font-bold"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}

      {/* --- HERO BANNER CON CARRUSEL DE FOTOS --- */}
      <section className="relative h-screen w-full flex items-center justify-center p-6 text-center overflow-hidden">
        
        {/* Imágenes del Carrusel */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Refrigerios para eventos carrusel ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Flecha Izquierda */}
        <button 
          onClick={prevHeroImage} 
          className="absolute top-1/2 left-4 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all -translate-y-1/2"
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        {/* Flecha Derecha */}
        <button 
          onClick={nextHeroImage} 
          className="absolute top-1/2 right-4 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all -translate-y-1/2"
          aria-label="Siguiente imagen"
        >
          ›
        </button>

        {/* Dots Indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroImage(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentHeroImage ? 'w-8 bg-[#E5C378]' : 'w-2 bg-white/50'}`}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>

        {/* Texto Hero */}
        <div className="relative z-10 text-white max-w-3xl space-y-4">
          <span className="inline-block bg-[#C5A059]/30 text-[#E5C378] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#C5A059]/40 backdrop-blur-sm">
            Refrigerios para Eventos
          </span>
          <h1 className="text-3xl md:text-5xl font-light text-[#E5C378] font-serif italic tracking-wide leading-tight">
            Cada reunión merece algo especial
          </h1>
        </div>
      </section>

      {/* --- SECCIÓN EXPERIENCIA --- */}
      <section id="experiencia" className="py-20 px-6 md:px-20 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="font-serif italic text-3xl text-[#C5A059] block">
            Servicio para Eventos
          </span>
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-[#1A1A1A]">
            Calidad y Presentación Exclusiva
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Nos encargamos de que cada refrigerio para tu evento empresarial, social o familiar sea fresco, práctico y con la mejor presentación.
          </p>
        </div>
      </section>

      {/* --- CATÁLOGO DE TARJETAS FLIP (VOLTEABLES) --- */}
      <section id="catalogo" className="py-20 px-6 md:px-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <span className="font-serif italic text-3xl text-[#C5A059] block">
              Menús Disponibles
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight uppercase tracking-wider">
              Nuestros Refrigerios para Eventos
            </h2>
            <p className="text-xs text-gray-400 uppercase tracking-widest pt-2">
              Toca aquí para ver más información
            </p>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {REFRIGERIOS.map((item) => {
              const isFlipped = flippedCardId === item.id;
              const itemWhatsAppLink = `${WHATSAPP_BASE_URL}${encodeURIComponent(`Hola, quisiera solicitar el ${item.nombre} ($12.400) para un evento.`)}`;

              return (
                <div 
                  key={item.id} 
                  className="h-[420px] w-full [perspective:1000px] cursor-pointer group"
                  onClick={() => toggleFlip(item.id)}
                >
                  <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-2xl shadow-xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    
                    {/* CARA FRONTAL */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-black">
                      <img 
                        src={item.imagen} 
                        alt={item.nombre} 
                        className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                        <span className="text-[10px] text-[#E5C378] uppercase tracking-widest font-semibold mb-1">
                          {item.categoria}
                        </span>
                        <h3 className="text-2xl font-light uppercase tracking-wide">
                          {item.nombre}
                        </h3>
                        <p className="text-xs text-gray-300 font-light mt-1">
                          {item.resumen}
                        </p>
                        <p className="text-3xl font-extralight text-[#E5C378] mt-3 tracking-tight">
                          {formatPrice(item.precio)}
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[#E5C378]">
                          <span className="text-xs uppercase tracking-widest font-medium">Toca aquí para ver más información</span>
                          <span className="text-lg">↺</span>
                        </div>
                      </div>
                    </div>

                    {/* CARA TRASERA */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-[#111111] text-white p-8 flex flex-col justify-between border border-[#C5A059]/30">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start border-b border-white/10 pb-3">
                          <div>
                            <span className="text-[10px] text-[#E5C378] uppercase tracking-widest font-semibold block">
                              {item.categoria}
                            </span>
                            <h3 className="text-xl font-light uppercase text-[#E5C378]">
                              {item.nombre}
                            </h3>
                          </div>
                          <span className="text-xl font-extralight text-white">
                            {formatPrice(item.precio)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-light">
                          {item.descripcion}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <a 
                          href={itemWhatsAppLink}
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="block w-full text-center bg-[#C5A059] text-black py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
                        >
                          Pedir por WhatsApp
                        </a>
                        <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest">
                          Toca para volver a la imagen
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SEGUNDO CARRUSEL: SERVICIOS PARA EVENTOS (IMAGEN A UN LADO / INFORMACIÓN AL OTRO LADO) --- */}
      <section id="servicios-eventos" className="py-20 px-6 md:px-16 bg-[#111111] text-white border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="font-serif italic text-3xl text-[#C5A059] block">
              Servicios para Eventos
            </span>
            <h2 className="text-2xl md:text-4xl font-extralight uppercase tracking-wider">
              Soluciones para Cada Ocasión
            </h2>
            <p className="text-xs text-gray-400 font-light">
              Desliza para conocer nuestros servicios especializados
            </p>
          </div>

          {/* Carrusel Split Card (Imagen a la Izquierda / Información a la Derecha) */}
          <div className="relative max-w-5xl mx-auto bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[380px]">
              
              {/* LADO IZQUIERDO: Imagen de la ocasión */}
              <div className="relative w-full h-64 md:h-full overflow-hidden">
                <img 
                  src={SERVICIOS_EVENTOS[currentServicioIndex].imagen} 
                  alt={SERVICIOS_EVENTOS[currentServicioIndex].titulo} 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1A1A1A]" />
              </div>

              {/* LADO DERECHO: Información descriptiva */}
              <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] text-black bg-[#E5C378] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                    {SERVICIOS_EVENTOS[currentServicioIndex].badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light uppercase text-[#E5C378]">
                    {SERVICIOS_EVENTOS[currentServicioIndex].titulo}
                  </h3>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    {SERVICIOS_EVENTOS[currentServicioIndex].subtitulo}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed pt-2">
                    {SERVICIOS_EVENTOS[currentServicioIndex].descripcion}
                  </p>
                </div>

                <div>
                  <a 
                    href={`${WHATSAPP_BASE_URL}${encodeURIComponent(`Hola, me gustaría cotizar el servicio de ${SERVICIOS_EVENTOS[currentServicioIndex].titulo} para mi evento.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-[#C5A059] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
                  >
                    Cotizar {SERVICIOS_EVENTOS[currentServicioIndex].titulo}
                  </a>
                </div>
              </div>

            </div>

            {/* Controles de Navegación del Carrusel de Servicios */}
            <div className="flex justify-between items-center px-8 py-4 bg-black/40 border-t border-white/10">
              <button 
                onClick={prevServicio}
                className="text-xs uppercase tracking-widest text-[#E5C378] hover:text-white transition-colors flex items-center gap-2"
              >
                ‹ Anterior
              </button>

              <div className="flex gap-2">
                {SERVICIOS_EVENTOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentServicioIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentServicioIndex ? 'w-6 bg-[#E5C378]' : 'w-2 bg-white/30'}`}
                    aria-label={`Ver ${SERVICIOS_EVENTOS[idx].titulo}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextServicio}
                className="text-xs uppercase tracking-widest text-[#E5C378] hover:text-white transition-colors flex items-center gap-2"
              >
                Siguiente ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALERÍA DE FOTOS --- */}
      <section id="galeria" className="py-20 px-4 md:px-12 bg-[#111111] text-white">
        <div className="text-center space-y-2 mb-12">
          <span className="font-serif italic text-3xl text-[#C5A059] block">
            Galería Visual
          </span>
          <h2 className="text-2xl md:text-3xl font-extralight uppercase tracking-widest">
            Imágenes de Nuestros Eventos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {REFRIGERIOS.map((item, i) => (
            <div 
              key={i} 
              className="relative h-72 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              onClick={() => setModalImagen(item.imagen)}
            >
              <img 
                src={item.imagen} 
                alt={`Muestra ${item.nombre}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest border border-white px-4 py-2 rounded-full backdrop-blur-sm">
                  Ver Imagen Completa
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL LIGHTBOX --- */}
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
            className="absolute top-6 right-6 text-white text-xs uppercase tracking-widest bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
            onClick={() => setModalImagen(null)}
          >
            Cerrar [ESC]
          </button>
        </div>
      )}

      {/* --- MEDIOS DE PAGO --- */}
      <section className="py-16 px-8 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-lg md:text-xl font-light uppercase tracking-widest text-[#1A1A1A]">
            Medios de Pago Aceptados
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center">
            {PAYMENT_METHODS.map((method) => (
              <div key={method.name} className="flex flex-col items-center group space-y-2">
                <img 
                  src={method.logo} 
                  alt={`Logo de pago ${method.name}`} 
                  className="h-8 md:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CON CONTACTO WHATSAPP --- */}
      <footer className="py-16 px-8 text-center bg-[#0A0A0A] text-white">
        <span className="font-serif italic text-3xl text-[#C5A059] block mb-2">Alma de Fiesta</span>
        <h3 className="text-lg md:text-xl font-light uppercase tracking-widest mb-6">
          Refrigerios Especiales para tu Próximo Evento
        </h3>
        <a 
          href={mainWhatsAppLink} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block bg-[#C5A059] text-black px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-xl"
        >
          Contactar al 320 835 5419
        </a>
      </footer>

    </div>
  );
}