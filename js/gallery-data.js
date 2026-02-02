/* ========================================
   Datos de la Galería - Casa Jardines del Valle
   53 imágenes + 1 video
   
   INSTRUCCIONES:
   - Coloca tus imágenes en la carpeta "images/galeria/"
   - Actualiza las rutas de imagen en este archivo
   - Categorías disponibles: exterior, interior, cocina, recamaras, bano, video
======================================== */

const galleryData = [
    // === EXTERIOR (Fachada y jardin) ===
    {
        id: 1,
        src: "images/exterior-1.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 2,
        src: "images/exterior-2.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 3,
        src: "images/exterior-3.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 4,
        src: "images/exterior-4.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 5,
        src: "images/exterior-5.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 6,
        src: "images/exterior-6.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 7,
        src: "images/exterior-7.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 8,
        src: "images/exterior-8.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 9,
        src: "images/exterior-9.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 10,
        src: "images/exterior-10.webp",
        title: "Fachada Principal",
        category: "exterior"
    },
   
    // === INTERIOR (Sala, Comedor y Escaleras) ===
    {
        id: 11,
        src: "images/sala-escalera-1.webp",
        title: "Sala con Escalera",
        category: "interior"
    },
    {
        id: 12,
        src: "images/sala-1.webp",
        title: "Sala con Entrada",
        category: "interior"
    },
    {
        id: 13,
        src: "images/escalera-1.webp",
        title: "Escalera a Planta Alta",
        category: "interior"
    },
    {
        id: 14,
        src: "images/escalera-2.webp",
        title: "Escalera Vista Inferior",
        category: "interior"
    },
    {
        id: 15,
        src: "images/distribuidor-1.webp",
        title: "Distribuidor Planta Alta",
        category: "interior"
    },
    {
        id: 16,
        src: "images/pasillo-recamaras-1.webp",
        title: "Pasillo de Planta Alta",
        category: "interior"
    },
    {
        id: 17,
        src: "images/pasillo-recamaras.webp",
        title: "Pasillo de Recámaras",
        category: "interior"
    },
 

    // === COCINA ===
    {
        id: 18,
        src: "images/cocina-1.webp",
        title: "Cocina Integral",
        category: "cocina"
    },
    {
        id: 19,
        src: "images/cocina-2.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
    {
        id: 20,
        src: "images/cocina-3.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 21,
        src: "images/cocina-4.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 22,
        src: "images/cocina-5.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 23,
        src: "images/cocina-6.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },



     {
        id: 25,
        src: "images/cocina-8.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 26,
        src: "images/cocina-9.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 27,
        src: "images/cocina-10.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 28,
        src: "images/cocina-11.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 30,
        src: "images/cocina-12.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
    {
        id: 31,
        src: "images/cocina-13.webp",
        title: "Cocina Vista Completa",
        category: "cocina"
    },


    // === RECAMARAS y baños ===
    {
        id: 32,
        src: "images/recamara-1.webp",
        title: "Recamaras",
        category: "recamaras"
    },
    {
        id: 33,
        src: "images/recamara-1_1.webp",
        title: "Recamaras",
        category: "recamaras"
    },
    {
        id: 34,
        src: "images/recamara2.1.webp",
        title: "Recamaras",
        category: "recamaras"
    },
    {
        id: 35,
        src: "images/recamara2.2.webp",
        title: "Recamaras",
        category: "recamaras"
    },
    {
        id: 36,
        src: "images/recamara2.3.webp",
        title: "Recamaras",
        category: "recamaras"
    },
 
  
    {
        id: 37,
        src: "images/recamara-2.7.webp",
        title: "Recamaras",
        category: "recamaras"
    },
    // === BAÑOS ===
    {
        id: 38,
        src: "images/baño-1.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 39,
        src: "images/baño-2.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 40,
        src: "images/baño-3.webp",
        title: "Baño ",
        category: "baño"
    },
    {
        id: 41,
        src: "images/baño-4.webp",
        title: "baño",
        category: "baño"
    },
    {
        id:  42,
        src: "images/baño-5.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 43,
        src: "images/baño-6.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 44,
        src: "images/baño-7.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 45,
        src: "images/baño-8.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 46,
        src: "images/baño-9.webp",
        title: "baño",
        category: "baño"
    },
    {
        id: 47,
        src: "images/baño-10.webp",
        title: "baño",
        category: "baño"
    },
    


    // === PATIO DE SERVICIO ===
    {
        id: 50,
        src: "images/patio-servicio-1.webp",
        title: "Patio de Servicio con Boiler",
        category: "interior"
    },
    {
        id: 51,
        src: "images/patio-servicio-2.webp",
        title: "Lavadero y Boiler de Paso",
        category: "interior"
    },
    {
        id: 52,
        src: "images/patio-servicio-3.webp",
        title: "Patio de Servicio - Vista Abierta",
        category: "interior"
    },
    // === VIDEO RECORRIDO ===
  {
  id: 53,
  src: "images/videocasa2.mp4",          // video real
  poster: "images/vistaprevia.webp",     // imagen de vista previa
  title: "Recorrido de la Propiedad",
  category: "video",
  isVideo: true
}

];

// Exportar para uso en main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = galleryData;
}
