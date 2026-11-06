// Toda la información del negocio vive aquí: edita este archivo para actualizar la web.

export const negocio = {
  nombre: 'JC CarAudio',
  eslogan: 'Sonido, seguridad y estilo para tu auto',
  direccion: 'Blvrd Ojo de Agua Manzana 001, Los Arcos, 55770 Ojo de Agua, Méx.',
  // TODO: confirmar con el negocio. Si se deja vacío, se ocultan los botones de llamada/WhatsApp.
  telefono: '',      // ej. '55 1234 5678'
  whatsapp: '',      // solo dígitos con lada de país, ej. '5215512345678'
  facebook: '',      // URL completa
  instagram: '',     // URL completa
};

const consultaMapa = encodeURIComponent(`${negocio.nombre}, ${negocio.direccion}`);
export const mapa = {
  embed: `https://www.google.com/maps?q=${consultaMapa}&output=embed`,
  comoLlegar: `https://www.google.com/maps/dir/?api=1&destination=${consultaMapa}`,
};

export type Icono = 'audio' | 'alarma' | 'gps' | 'led';

export const servicios: { titulo: string; descripcion: string; icono: Icono; puntos: string[] }[] = [
  {
    titulo: 'Car Audio',
    descripcion: 'Instalación de estéreos, bocinas, subwoofers y amplificadores con cableado limpio y bien calibrado.',
    icono: 'audio',
    puntos: ['Estéreos y pantallas', 'Bocinas y subwoofers', 'Amplificadores'],
  },
  {
    titulo: 'Alarmas',
    descripcion: 'Protege tu auto con sistemas de alarma instalados de forma segura y discreta.',
    icono: 'alarma',
    puntos: ['Alarmas con control', 'Sensores', 'Bloqueo de motor'],
  },
  {
    titulo: 'GPS',
    descripcion: 'Localizadores GPS para saber dónde está tu vehículo en todo momento.',
    icono: 'gps',
    puntos: ['Rastreo en tiempo real', 'Instalación oculta', 'Ideal para flotillas'],
  },
  {
    titulo: 'Luz LED',
    descripcion: 'Iluminación LED para faros, interiores y detalles que hacen destacar tu auto.',
    icono: 'led',
    puntos: ['Faros y niebla', 'Iluminación interior', 'Tiras decorativas'],
  },
];

// dia: 0 = domingo … 6 = sábado. Horas en formato 24 h (hora local de México).
export const horario = [
  { dias: 'Lunes a Viernes', diasNum: [1, 2, 3, 4, 5], abre: 10, cierra: 19, texto: '10:00 am – 7:00 pm' },
  { dias: 'Sábado', diasNum: [6], abre: 10, cierra: 17, texto: '10:00 am – 5:00 pm' },
  { dias: 'Domingo', diasNum: [0], abre: null, cierra: null, texto: 'Cerrado' },
];
