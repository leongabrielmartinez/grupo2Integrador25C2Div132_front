//Dsp se traen los datos del back-end, pero sirve para un diseño inicial del front-end.

let gamingItems = [
  { 
    id: 1, 
    nombre: "Resident Evil 4 (2023)", 
    precio: 50, 
    estudio: "Capcom", 
    generos: ["Acción", "Terror", "Aventura"], 
    descripcion: "Resident Evil 4 (2023) es una reimaginación del clásico juego de terror y acción que revolucionó el género. En esta versión moderna, se mantiene la esencia del original pero con mejoras visuales impresionantes, una jugabilidad más fluida y un enfoque cinematográfico en cada enfrentamiento. Controlas a Leon S. Kennedy en una misión peligrosa para rescatar a la hija del presidente en un remoto pueblo europeo lleno de enemigos infectados. El juego combina exploración, combate táctico y una atmósfera constante de tensión. Además, incluye nuevas mecánicas, un diseño de sonido inmersivo y escenarios rediseñados que hacen que la experiencia sea tan nostálgica como desafiante para los nuevos jugadores.", 
    ruta_img: "" 
  },
  { 
    id: 2, 
    nombre: "Street Fighter 5", 
    precio: 100, 
    estudio: "Capcom", 
    generos: ["Lucha", "Competitivo"], 
    descripcion: "Street Fighter 5 continúa la legendaria saga de peleas con un enfoque renovado en la estrategia, la técnica y la competencia online. Con un estilo visual vibrante y animaciones fluidas, cada personaje ofrece un conjunto único de movimientos y habilidades que requieren precisión y práctica. El juego se centra en la lucha uno contra uno, pero también presenta modos de entrenamiento, historia y eventos en línea. Con actualizaciones constantes y una comunidad activa, Street Fighter 5 se ha consolidado como uno de los pilares de los esports de lucha, ofreciendo tanto profundidad técnica para veteranos como accesibilidad para nuevos jugadores que buscan aprender y mejorar en el arte del combate.", 
    ruta_img: "" 
  },
  { 
    id: 3, 
    nombre: "Hollow Knight", 
    precio: 200, 
    estudio: "Team Cherry", 
    generos: ["Metroidvania", "Acción", "Aventura"], 
    descripcion: "Hollow Knight es una aventura de acción en 2D que combina exploración profunda, combate desafiante y una atmósfera melancólica en el misterioso reino de Hallownest. Controlas a un pequeño caballero en busca de respuestas sobre una civilización perdida, mientras enfrentas criaturas extrañas y descubres secretos ocultos bajo tierra. Su estilo artístico hecho a mano y su banda sonora evocadora crean una experiencia inmersiva que premia la curiosidad y la paciencia. Cada zona del juego ofrece nuevos enemigos, habilidades y rutas interconectadas, recordando a los clásicos Metroidvania, pero con una identidad única que ha convertido a Hollow Knight en un referente del género indie moderno.", 
    ruta_img: "" 
  },
  { 
    id: 4, 
    nombre: "PlayStation 5", 
    descripcion: "La PlayStation 5 representa la nueva generación de consolas de Sony, ofreciendo una experiencia de juego fluida, inmersiva y visualmente impactante. Su potente hardware, junto con un disco SSD ultrarrápido, reduce los tiempos de carga y permite mundos abiertos mucho más dinámicos. El mando DualSense destaca por su respuesta háptica y gatillos adaptativos, brindando una sensación más realista en cada interacción del juego. Además, la interfaz rediseñada permite un acceso rápido a contenidos y funciones sociales. Con títulos exclusivos y compatibilidad con gran parte del catálogo de PS4, la PS5 se posiciona como una consola versátil, ideal tanto para jugadores casuales como para los más exigentes.", 
    precio: 150, 
    ruta_img: "" 
  },
  { 
    id: 5, 
    nombre: "Microsoft Xbox 360", 
    descripcion: "La Xbox 360 marcó una época en la historia de los videojuegos, destacando por su potente catálogo de títulos y su impulso al juego en línea a través de Xbox Live. Fue la consola que consolidó sagas icónicas como Halo, Gears of War y Forza Motorsport. Además, introdujo una interfaz intuitiva y funciones multimedia que la convirtieron en un centro de entretenimiento completo. Su mando ergonómico, muy elogiado, sentó las bases para los diseños futuros de controladores. Aunque hoy es considerada una consola retro, su legado permanece vivo gracias a la retrocompatibilidad y a su enorme influencia en la industria del gaming moderno.", 
    precio: 125, 
    ruta_img: "" 
  },
  { 
    id: 6, 
    nombre: "Sega Saturn", 
    descripcion: "La Sega Saturn fue una consola adelantada a su tiempo, lanzada a mediados de los 90 con un potente hardware enfocado en juegos 2D y una arquitectura compleja que la hizo difícil de dominar para muchos desarrolladores. A pesar de su competencia con la PlayStation y la Nintendo 64, destacó por ofrecer experiencias únicas, especialmente en títulos arcade, de lucha y shooters japoneses. Su diseño elegante y su catálogo diverso la convirtieron en un objeto de culto para los coleccionistas. Aunque comercialmente no tuvo el éxito esperado, la Saturn dejó una huella importante por su ambición tecnológica y por ser una pieza clave en la historia de Sega.", 
    precio: 75, 
    ruta_img: "" 
  },
];