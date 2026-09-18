// ============================================================
//  config.js — Configuración de datos de SkillUP
//  Plan de Trabajo Académico y Operativo 2026
// ============================================================

const CONFIG = {
  // Identificación del Negocio
  negocio:              "SkillUP",
  slogan:               "Aprende hoy, crea mañana",
  nombreComercial:      "SkillUP · Cursos Virtuales en Vivo",
  razonSocial:          "SkillUP Educación Virtual S.A.C.",
  ruc:                  "20789456123",
  direccion:            "Lima, Perú",
  correo:               "skillup1102@gmail.com",
  whatsapp:             "51986416703",
  facebook:             "https://www.facebook.com/profile.php?id=61578189016019",
  tiktok:               "https://www.tiktok.com/@skillup.cursos?is_from_webapp=1&sender_device=pc",
  horarios:             "Atención en vivo: Lun - Sáb · 9am - 8pm",
  moneda:               "S/",

  // Precios base
  precioRegular:        100,
  precioApertura:       80,

  // Periodo Académico
  periodoAcademico:     "Septiembre a diciembre de 2026",
  fechaActualizacion:   "Septiembre 2026",
  libroReclamacionesUrl:"libro-de-reclamaciones.html",

  // Sistema
  imgbbApiKey:          "6d207e02198a847aa5a10a8b90161311",
};

// ============================================================
//  CATÁLOGO Y PROGRAMACIÓN DE CURSOS SKILLUP
// ============================================================

const PRODUCTOS = [

  // ── PROGRAMACIÓN Y DATOS ─────────────────────────────────
  {
    id: 1,
    nombre: "Python desde Cero",
    categoria: "Programación y datos",
    precio: 80,
    precioRegular: 100,
    docente: "César Bobadilla Medina",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    descripcion: "Curso práctico para aprender los fundamentos de la programación con Python. Desarrollarás pensamiento lógico y construirás tus primeros programas mediante ejercicios progresivos.",
    objetivo: "Desarrollar los fundamentos necesarios para crear programas básicos en Python, comprender su lógica y adquirir una base sólida para continuar hacia automatización, análisis de datos, desarrollo de aplicaciones o inteligencia artificial.",
    publico: "Estudiantes de sistemas, informática, software y carreras afines; principiantes que desean desarrollar lógica algorítmica; y personas interesadas en programación, automatización o análisis de datos.",
    resultados: [
      "Comprender la sintaxis y estructura básica de Python.",
      "Aplicar condicionales y bucles para resolver problemas.",
      "Utilizar listas, tuplas y diccionarios.",
      "Crear funciones y programas que lean, procesen y almacenen información."
    ],
    requisitos: "No se requieren conocimientos previos. Se necesita una computadora con conexión a Internet y permisos para instalar el entorno de trabajo.",
    evaluacion: "Ejercicios y prácticas desarrolladas durante las sesiones + actividad o proyecto integrador final.",
    productoFinal: "Ejercicio o mini proyecto que integre los contenidos desarrollados durante el curso.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "18/09/2026",
    fechaFin: "27/09/2026",
    diasClase: "Viernes, sábado y domingo",
    horarioClase: "4:00 p. m. – 6:00 p. m.",
    estadoCurso: "Inscripciones Abiertas",
    silabo: [
      { sesion: 1, tema: "Introducción a Python", contenido: "Qué es Python, instalación, entorno, sintaxis, comentarios, variables, tipos de datos, operadores, input y print.", practica: "Programa que solicita datos y realiza cálculos básicos." },
      { sesion: 2, tema: "Condicionales y lógica", contenido: "Operadores relacionales y lógicos; if, elif y else; condiciones simples y compuestas.", practica: "Sistema sencillo de clasificación según reglas." },
      { sesion: 3, tema: "Bucles y repetición", contenido: "for, while, range, contadores, acumuladores, break y continue.", practica: "Procesamiento de datos y generación de resultados." },
      { sesion: 4, tema: "Listas, tuplas y diccionarios", contenido: "Colecciones, índices, recorridos, métodos principales y diccionarios clave valor.", practica: "Registro y consulta de información." },
      { sesion: 5, tema: "Funciones y modularización", contenido: "Funciones, parámetros, retorno, alcance de variables, organización del código y manejo inicial de errores.", practica: "Conversión de un programa en funciones reutilizables." },
      { sesion: 6, tema: "Archivos y proyecto integrador", contenido: "Lectura y escritura de archivos, introducción a CSV e integración de los contenidos.", practica: "Mini proyecto de registro, procesamiento y reporte." }
    ]
  },
  {
    id: 2,
    nombre: "Java desde Cero",
    categoria: "Programación y datos",
    precio: 80,
    precioRegular: 100,
    docente: "César Bobadilla Medina",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    descripcion: "Curso introductorio para comprender la lógica de programación y desarrollar aplicaciones básicas con Java, avanzando desde la estructura del lenguaje hasta los conceptos iniciales de POO.",
    objetivo: "Comprender la sintaxis fundamental de Java y desarrollar programas básicos utilizando variables, operadores, estructuras de decisión, repetición, métodos, arreglos y conceptos iniciales de programación orientada a objetos.",
    publico: "Estudiantes de sistemas, informática, software y carreras afines; principiantes que desean aprender programación y personas interesadas en adquirir una base para el desarrollo de aplicaciones.",
    resultados: [
      "Comprender la estructura y sintaxis fundamental de Java.",
      "Aplicar estructuras condicionales y repetitivas.",
      "Utilizar arreglos y métodos para organizar información.",
      "Aplicar conceptos iniciales de clases y objetos."
    ],
    requisitos: "No se requieren conocimientos previos. Se necesita una computadora con conexión a Internet y permisos para instalar el JDK y el entorno de desarrollo.",
    evaluacion: "Seguimiento mediante ejercicios durante las sesiones más actividad o proyecto integrador final.",
    productoFinal: "Ejercicio o mini proyecto que integre los contenidos desarrollados durante el curso.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "18/09/2026",
    fechaFin: "27/09/2026",
    diasClase: "Viernes, sábado y domingo",
    horarioClase: "2:00 p. m. – 4:00 p. m.",
    estadoCurso: "Inscripciones Abiertas",
    silabo: [
      { sesion: 1, tema: "Introducción a Java", contenido: "Java, JVM, JDK, entorno de desarrollo, estructura de un programa, main, variables, tipos, operadores, entrada y salida.", practica: "Primera aplicación con ingreso y procesamiento de datos." },
      { sesion: 2, tema: "Estructuras condicionales", contenido: "Operadores relacionales y lógicos; if, else if, else y switch.", practica: "Programa de clasificación y toma de decisiones." },
      { sesion: 3, tema: "Estructuras repetitivas", contenido: "for, while, do-while, contadores, acumuladores, break y continue.", practica: "Procesamiento repetitivo y cálculo de indicadores." },
      { sesion: 4, tema: "Arreglos y manejo de datos", contenido: "Arrays unidimensionales, declaración, inicialización, recorrido, búsqueda y procesamiento.", practica: "Registro y análisis de una colección de datos." },
      { sesion: 5, tema: "Métodos y fundamentos de POO", contenido: "Métodos, parámetros, retorno, clases, objetos, atributos, métodos y constructores básicos.", practica: "Clase para representar una entidad real." },
      { sesion: 6, tema: "Proyecto integrador", contenido: "Integración de estructuras de control, arreglos, métodos, clases y objetos.", practica: "Aplicación de consola para gestionar registros." }
    ]
  },
  {
    id: 3,
    nombre: "C++ desde Cero",
    categoria: "Programación y datos",
    precio: 80,
    precioRegular: 100,
    docente: "César Bobadilla Medina",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    descripcion: "Curso práctico para aprender programación estructurada con C++, desarrollar lógica algorítmica y comprender cómo convertir problemas sencillos en soluciones mediante código.",
    objetivo: "Desarrollar programas básicos en C++ utilizando correctamente variables, operadores, estructuras de control, arreglos y funciones, incorporando conceptos iniciales de programación orientada a objetos.",
    publico: "Estudiantes de sistemas, informática, electrónica, mecatrónica y carreras afines; principiantes interesados en programación y personas que desean fortalecer su pensamiento computacional.",
    resultados: [
      "Comprender la estructura y sintaxis de C++.",
      "Aplicar decisiones y repeticiones.",
      "Utilizar arreglos, cadenas y funciones.",
      "Reconocer conceptos iniciales de clases y objetos."
    ],
    requisitos: "No se requieren conocimientos previos. Se necesita una computadora con conexión a Internet y permisos para instalar el compilador y el entorno de desarrollo.",
    evaluacion: "Seguimiento mediante ejercicios durante las sesiones más proyecto integrador final.",
    productoFinal: "Ejercicio o mini proyecto que integre los contenidos desarrollados durante el curso.",
    disponible: "SI",
    destacado: "NO",
    fechaInicio: "28/09/2026",
    fechaFin: "07/10/2026",
    diasClase: "Lunes, martes y miércoles",
    horarioClase: "5:00 p. m. – 7:00 p. m.",
    estadoCurso: "Próxima Edición",
    silabo: [
      { sesion: 1, tema: "Introducción a C++", contenido: "Compilación, estructura del programa, main, iostream, cout, cin, variables, constantes, tipos y operadores.", practica: "Captura de datos y operaciones básicas." },
      { sesion: 2, tema: "Estructuras de decisión", contenido: "Operadores relacionales y lógicos; if, else if, else y switch.", practica: "Programa de clasificación con diferentes condiciones." },
      { sesion: 3, tema: "Bucles", contenido: "for, while, do-while, contadores, acumuladores y ciclos anidados.", practica: "Procesamiento repetitivo y estadísticas básicas." },
      { sesion: 4, tema: "Arreglos y cadenas", contenido: "Arrays, recorrido, procesamiento, búsqueda e introducción a string.", practica: "Registro y procesamiento de una colección de valores." },
      { sesion: 5, tema: "Funciones y organización", contenido: "Declaración, definición, parámetros, retorno, paso de información y organización modular.", practica: "Separación de un programa en funciones reutilizables." },
      { sesion: 6, tema: "Introducción a POO y proyecto", contenido: "Clases, objetos, atributos, métodos e integración de contenidos.", practica: "Mini proyecto de consola para registrar y procesar información." }
    ]
  },
  {
    id: 4,
    nombre: "SQL desde Cero",
    categoria: "Programación y datos",
    precio: 80,
    precioRegular: 100,
    docente: "César Bobadilla Medina",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
    descripcion: "Curso introductorio para aprender a trabajar con bases de datos relacionales y utilizar SQL para consultar, filtrar, ordenar, agrupar y relacionar información almacenada en diferentes tablas.",
    objetivo: "Comprender los fundamentos de una base de datos relacional y utilizar SQL para consultar, organizar, relacionar y analizar información mediante operaciones fundamentales.",
    publico: "Estudiantes de sistemas, informática, software y carreras afines; principiantes interesados en bases de datos, análisis de información, Power BI o desarrollo de aplicaciones.",
    resultados: [
      "Comprender tablas, registros, campos y relaciones.",
      "Construir consultas para seleccionar, filtrar y ordenar datos.",
      "Generar indicadores con agregaciones y agrupamientos.",
      "Relacionar información de varias tablas mediante JOIN."
    ],
    requisitos: "No se requieren conocimientos previos de programación ni bases de datos. Se necesita una computadora con conexión a Internet y el gestor indicado para las prácticas.",
    evaluacion: "Seguimiento mediante ejercicios durante las sesiones más proyecto integrador final.",
    productoFinal: "Ejercicio o mini proyecto que integre los contenidos desarrollados durante el curso.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "02/10/2026",
    fechaFin: "11/10/2026",
    diasClase: "Viernes, sábado y domingo",
    horarioClase: "2:00 p. m. – 4:00 p. m.",
    estadoCurso: "Próxima Edición",
    silabo: [
      { sesion: 1, tema: "Bases de datos y primeras consultas", contenido: "Tablas, filas, columnas, claves, introducción a SQL, SELECT, FROM, DISTINCT y alias.", practica: "Exploración de una base de datos." },
      { sesion: 2, tema: "Filtrado y ordenamiento", contenido: "WHERE, operadores, BETWEEN, IN, LIKE, valores NULL y ORDER BY.", practica: "Consultas con múltiples criterios." },
      { sesion: 3, tema: "Funciones y agregaciones", contenido: "COUNT, SUM, AVG, MIN, MAX, GROUP BY y HAVING.", practica: "Indicadores y resúmenes de registros." },
      { sesion: 4, tema: "Relaciones y JOIN", contenido: "Modelo relacional, claves primarias y foráneas, INNER JOIN y LEFT JOIN.", practica: "Integración de información de varias tablas." },
      { sesion: 5, tema: "Gestión de datos", contenido: "INSERT, UPDATE, DELETE, modificación segura y consultas combinadas.", practica: "Registro y modificación de información." },
      { sesion: 6, tema: "Caso integrador SQL", contenido: "Integración de filtros, agregaciones, agrupamientos, JOIN e introducción conceptual a vistas.", practica: "Preguntas de negocio sobre una base relacional." }
    ]
  },

  // ── DISEÑO E INGENIERÍA ──────────────────────────────────
  {
    id: 5,
    nombre: "AutoCAD desde Cero",
    categoria: "Diseño e ingeniería",
    precio: 80,
    precioRegular: 100,
    docente: "Erick Campos Rimache",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    descripcion: "Curso práctico para aprender dibujo técnico 2D en AutoCAD, desde el entorno y los comandos básicos hasta la organización, acotación y preparación de planos para impresión o exportación.",
    objetivo: "Desarrollar habilidades fundamentales para elaborar dibujos técnicos en 2D, aplicando herramientas de dibujo, precisión, modificación, organización, acotación y presentación.",
    publico: "Estudiantes de ingeniería, arquitectura, diseño y construcción; principiantes que desean desarrollar dibujos técnicos y personas que requieren una base antes de continuar con AutoCAD intermedio o modelado 3D.",
    resultados: [
      "Utilizar el entorno y los comandos básicos.",
      "Dibujar con coordenadas y referencias exactas.",
      "Organizar planos con capas, propiedades y bloques.",
      "Configurar Layout, escalas e impresión en PDF."
    ],
    requisitos: "No se requieren conocimientos previos. Se necesita una computadora con AutoCAD instalado y manejo básico del sistema operativo.",
    evaluacion: "Seguimiento mediante ejercicios prácticos más plano o ejercicio técnico integrador final.",
    productoFinal: "Modelo, plano o ejercicio técnico que integre las herramientas desarrolladas durante el curso.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "17/09/2026",
    fechaFin: "27/09/2026",
    diasClase: "Jueves, viernes y domingo",
    horarioClase: "8:00 p. m. – 10:00 p. m.",
    estadoCurso: "Inscripciones Abiertas",
    silabo: [
      { sesion: 1, tema: "Entorno y dibujo básico", contenido: "Interfaz, Model Space, archivos, navegación, Zoom, Pan, Line, Polyline, Rectangle, Circle y selección.", practica: "Dibujo geométrico básico." },
      { sesion: 2, tema: "Precisión y coordenadas", contenido: "Coordenadas absolutas y relativas, distancias, ángulos, Ortho, Polar Tracking y Object Snap.", practica: "Figura construida con medidas exactas." },
      { sesion: 3, tema: "Modificación de objetos", contenido: "Move, Copy, Trim, Extend, Offset, Mirror, introducción a Rotate y Fillet.", practica: "Modificación y finalización de un dibujo." },
      { sesion: 4, tema: "Layers propiedades y bloques", contenido: "Capas, colores, tipos de línea, On Off, Freeze, Lock, Properties, creación e inserción de bloques.", practica: "Organización correcta de un plano." },
      { sesion: 5, tema: "Texto cotas y presentación", contenido: "Text, MText, cotas lineales y alineadas, radio, diámetro, edición de cotas y Hatch.", practica: "Información gráfica completa de un dibujo." },
      { sesion: 6, tema: "Layout escala e impresión", contenido: "Model, Layout, Viewport, escala, configuración de página, Plot y exportación a PDF.", practica: "Preparación e impresión del ejercicio integrador." }
    ]
  },
  {
    id: 6,
    nombre: "SolidWorks desde Cero",
    categoria: "Diseño e ingeniería",
    precio: 80,
    precioRegular: 100,
    docente: "Erick Campos Rimache",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    descripcion: "Curso para aprender a crear piezas mecánicas a partir de croquis 2D, aplicar operaciones de modelado, construir ensamblajes básicos y generar planos técnicos en SolidWorks.",
    objetivo: "Desarrollar competencias básicas para crear y modificar piezas tridimensionales, elaborar ensamblajes básicos y generar planos técnicos mediante ejercicios prácticos guiados.",
    publico: "Estudiantes de ingeniería mecánica, industrial, mecatrónica, arquitectura y diseño técnico; y principiantes interesados en piezas, ensamblajes y planos.",
    resultados: [
      "Crear croquis definidos con relaciones y dimensiones.",
      "Generar sólidos mediante extrusión y revolución.",
      "Modificar piezas con cortes, perforaciones, acabados y patrones.",
      "Crear ensamblajes y planos técnicos sencillos."
    ],
    requisitos: "No se requieren conocimientos previos de CAD. Se necesita una computadora con SolidWorks instalado y manejo básico del sistema operativo.",
    evaluacion: "Seguimiento mediante ejercicios desarrollados durante las sesiones más modelo o plano integrador.",
    productoFinal: "Modelo, plano o ejercicio técnico que integre las herramientas desarrolladas durante el curso.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "14/09/2026",
    fechaFin: "23/09/2026",
    diasClase: "Lunes, martes y miércoles",
    horarioClase: "6:00 p. m. – 8:00 p. m.",
    estadoCurso: "Grupo Confirmado",
    silabo: [
      { sesion: 1, tema: "Entorno y primeros croquis", contenido: "Interfaz, archivos, navegación, planos, Sketch, Line, Rectangle, Circle, Arc, Trim y Smart Dimension.", practica: "Croquis 2D siguiendo medidas." },
      { sesion: 2, tema: "Croquis definidos y sólidos 3D", contenido: "Relaciones geométricas, cotas, croquis definido, Extruded Boss Base, Extruded Cut y árbol de operaciones.", practica: "Primera pieza 3D." },
      { sesion: 3, tema: "Modificación básica de piezas", contenido: "Croquis sobre caras, Fillet, Chamfer, Hole Wizard, edición de operaciones e introducción a Mirror.", practica: "Pieza con agujeros, redondeos y simetría." },
      { sesion: 4, tema: "Operaciones de construcción", contenido: "Revolved Boss Base, Revolved Cut, ejes, Linear Pattern, Circular Pattern y planos de referencia.", practica: "Pieza con extrusión, revolución y repetición." },
      { sesion: 5, tema: "Introducción a ensamblajes", contenido: "Part y Assembly, componentes, movimiento, Mate Coincident, Concentric, Distance y fijación.", practica: "Ensamblaje de tres o cuatro piezas." },
      { sesion: 6, tema: "Planos y ejercicio integrador", contenido: "Drawing, vistas, escala, cotas básicas y exportación a PDF.", practica: "Plano técnico de una pieza desarrollada." }
    ]
  },
  {
    id: 7,
    nombre: "Autodesk Inventor desde Cero",
    categoria: "Diseño e ingeniería",
    precio: 80,
    precioRegular: 100,
    docente: "Erick Campos Rimache",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&q=80",
    descripcion: "Curso práctico para aprender modelado mecánico con Autodesk Inventor, desde la creación de croquis y piezas 3D hasta ensamblajes básicos y planos técnicos.",
    objetivo: "Comprender y aplicar las herramientas fundamentales de Autodesk Inventor para crear croquis, modelar y modificar piezas 3D, elaborar ensamblajes básicos y generar planos técnicos sencillos.",
    publico: "Estudiantes de ingeniería mecánica, industrial y mecatrónica; técnicos de diseño, fabricación o mantenimiento; y principiantes interesados en modelado mecánico.",
    resultados: [
      "Crear croquis con geometrías, restricciones y dimensiones.",
      "Modelar piezas mediante extrusión y revolución.",
      "Aplicar perforaciones, acabados, simetrías y patrones.",
      "Crear ensamblajes y planos con cotas y anotaciones."
    ],
    requisitos: "No se requieren conocimientos previos de CAD. Se necesita una computadora con Autodesk Inventor instalado y manejo básico del sistema operativo.",
    evaluacion: "Seguimiento mediante ejercicios prácticos más proyecto o plano final.",
    productoFinal: "Modelo, plano o ejercicio técnico que integre las herramientas desarrolladas durante el curso.",
    disponible: "SI",
    destacado: "NO",
    fechaInicio: "17/09/2026",
    fechaFin: "27/09/2026",
    diasClase: "Jueves, viernes y domingo",
    horarioClase: "6:00 p. m. – 8:00 p. m.",
    estadoCurso: "Inscripciones Abiertas",
    silabo: [
      { sesion: 1, tema: "Interfaz y primeros Sketches", contenido: "Interfaz, navegación, archivos, planos, Sketch, Line, Rectangle, Circle, Arc, Trim y dimensiones.", practica: "Croquis 2D sencillo." },
      { sesion: 2, tema: "Restricciones y modelado inicial", contenido: "Restricciones, dimensiones, edición de Sketch, Extrude, croquis sobre caras y navegador del modelo.", practica: "Primera pieza 3D." },
      { sesion: 3, tema: "Edición básica de piezas", contenido: "Fillet, Chamfer, Hole, modificación de dimensiones, edición de operaciones e introducción a Mirror.", practica: "Pieza con perforaciones y acabados." },
      { sesion: 4, tema: "Revolución y repetición", contenido: "Revolve, eje, Rectangular Pattern, Circular Pattern, planos de trabajo y nuevos croquis.", practica: "Modelo con extrusión, revolución y patrones." },
      { sesion: 5, tema: "Ensamblajes básicos", contenido: "Assembly, componentes, movimiento, Mate, Flush, Insert y organización de piezas.", practica: "Pequeño ensamblaje." },
      { sesion: 6, tema: "Planos y ejercicio integrador", contenido: "Drawing, vista base, vistas proyectadas e isométrica, escala, cotas, anotaciones y PDF.", practica: "Plano de una pieza desarrollada." }
    ]
  },
  {
    id: 8,
    nombre: "Fusion 360 desde Cero",
    categoria: "Diseño e ingeniería",
    precio: 80,
    precioRegular: 100,
    docente: "Erick Campos Rimache",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80",
    descripcion: "Curso para comprender el flujo de diseño en Fusion 360 y transformar croquis en modelos tridimensionales, componentes, ensamblajes y planos técnicos básicos.",
    objetivo: "Comprender el flujo esencial de diseño en Fusion 360 y utilizar sus herramientas para crear croquis, desarrollar y modificar piezas 3D, organizar componentes y generar planos técnicos.",
    publico: "Estudiantes de ingeniería, diseño industrial y arquitectura; principiantes interesados en modelado 3D, prototipado, impresión 3D o manufactura.",
    resultados: [
      "Navegar por la interfaz, Browser, ViewCube y Timeline.",
      "Crear croquis con dimensiones y restricciones.",
      "Modelar y modificar cuerpos mediante operaciones fundamentales.",
      "Organizar componentes, usar Joints y generar planos."
    ],
    requisitos: "No se requieren conocimientos previos de CAD. Se necesita una computadora con Fusion 360 instalado y conexión a Internet.",
    evaluacion: "Seguimiento mediante ejercicios durante las sesiones más proyecto integrador final.",
    productoFinal: "Modelo, plano o ejercicio técnico que integre las herramientas desarrolladas durante el curso.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "01/10/2026",
    fechaFin: "11/10/2026",
    diasClase: "Jueves, viernes y domingo",
    horarioClase: "6:00 p. m. – 8:00 p. m.",
    estadoCurso: "Próxima Edición",
    silabo: [
      { sesion: 1, tema: "Interfaz y primeros Sketches", contenido: "Interfaz, Browser, ViewCube, Timeline, navegación, proyectos, unidades, planos, Sketch, geometrías, Trim y dimensiones.", practica: "Croquis básico." },
      { sesion: 2, tema: "Restricciones y primeros sólidos", contenido: "Restricciones, dimensiones, construcción, Extrude, Join, Cut, New Body y modificación en Timeline.", practica: "Primera pieza tridimensional." },
      { sesion: 3, tema: "Operaciones fundamentales", contenido: "Sketch sobre caras, Revolve, Hole, Fillet, Chamfer y modificación de dimensiones y operaciones.", practica: "Pieza con extrusión, revolución y acabados." },
      { sesion: 4, tema: "Repetición y organización", contenido: "Mirror, Rectangular Pattern, Circular Pattern, planos, Body, Component y Move/Copy.", practica: "Pieza completada con patrones y simetría." },
      { sesion: 5, tema: "Componentes y ensamblaje", contenido: "Components, Browser, movimiento, Joints, Rigid Joint y Revolute Joint.", practica: "Pequeño mecanismo de pocas piezas." },
      { sesion: 6, tema: "Drawing y ejercicio integrador", contenido: "Vistas, escala, dimensiones, anotaciones y exportación.", practica: "Plano de una pieza trabajada." }
    ]
  },

  // ── ANÁLISIS Y CÁLCULO ───────────────────────────────────
  {
    id: 9,
    nombre: "Minitab Básico",
    categoria: "Análisis y cálculo",
    precio: 80,
    precioRegular: 100,
    docente: "Jeremy García Flores",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    descripcion: "Curso práctico para organizar datos, aplicar estadística descriptiva, visualizar información, comparar grupos y utilizar pruebas estadísticas fundamentales mediante la interfaz de Minitab.",
    objetivo: "Desarrollar competencias básicas para utilizar Minitab en la organización, exploración, visualización y análisis estadístico de datos, interpretando correctamente los resultados.",
    publico: "Estudiantes, técnicos, egresados y profesionales de ingeniería, administración, calidad, producción, logística, economía, ciencias e investigación.",
    resultados: [
      "Preparar y explorar bases de datos.",
      "Construir e interpretar gráficos estadísticos.",
      "Aplicar intervalos, pruebas de hipótesis y comparación de medias.",
      "Analizar relaciones mediante correlación y regresión lineal."
    ],
    requisitos: "Laptop o PC con Minitab instalado. No se requiere experiencia previa en el programa; se recomiendan conocimientos básicos de estadística.",
    evaluacion: "Ejercicios prácticos por sesión 40%, participación y casos 20%, proyecto integrador 40%.",
    productoFinal: "Análisis estadístico básico de una base de datos con gráficos, resultados e interpretación.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "18/09/2026",
    fechaFin: "27/09/2026",
    diasClase: "Viernes, sábado y domingo",
    horarioClase: "5:00 p. m. – 7:00 p. m.",
    estadoCurso: "Inscripciones Abiertas",
    silabo: [
      { sesion: 1, tema: "Introducción y estadística descriptiva", contenido: "Interfaz, hojas de trabajo, variables, importación, organización, tendencia central y dispersión.", practica: "Análisis descriptivo de una base de datos." },
      { sesion: 2, tema: "Visualización y distribución", contenido: "Histogramas, boxplots, barras, dispersión, atípicos, distribución normal y gráfica de probabilidad.", practica: "Exploración visual y diagnóstico inicial." },
      { sesion: 3, tema: "Intervalos y pruebas de hipótesis", contenido: "Población, muestra, estimación, intervalos, hipótesis, significancia, valor p y pruebas de una y dos muestras.", practica: "Decisión estadística a partir de datos." },
      { sesion: 4, tema: "Comparación de grupos", contenido: "Prueba t de dos muestras, introducción a ANOVA, supuestos y gráficos comparativos.", practica: "Determinación de diferencias entre grupos." },
      { sesion: 5, tema: "Correlación y regresión", contenido: "Correlación, regresión lineal, ecuación, R², predicciones y revisión de residuos.", practica: "Modelo de relación entre dos variables." },
      { sesion: 6, tema: "Proyecto integrador y evaluación", contenido: "Preparación de datos, selección de técnicas, análisis, visualización, interpretación y conclusiones.", practica: "Caso práctico con resultados y presentación." }
    ]
  },
  {
    id: 10,
    nombre: "MATLAB Básico",
    categoria: "Análisis y cálculo",
    precio: 80,
    precioRegular: 100,
    docente: "Jeremy García Flores",
    duracion: "12 horas · 6 sesiones",
    modalidad: "Virtual en vivo (Google Meet)",
    nivel: "Básico",
    imagen: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80",
    descripcion: "Curso práctico para iniciarse en cálculo numérico, programación y visualización de datos con MATLAB, desde el entorno de trabajo hasta la creación de scripts, funciones y gráficos.",
    objetivo: "Desarrollar competencias fundamentales para utilizar MATLAB como herramienta de cálculo, programación, análisis de datos y visualización, resolviendo problemas básicos con código claro y reproducible.",
    publico: "Estudiantes universitarios y técnicos, egresados y profesionales de ingeniería, ciencias, economía, tecnología y áreas afines.",
    resultados: [
      "Utilizar el entorno y organizar archivos de trabajo.",
      "Manipular vectores, matrices y arreglos.",
      "Crear scripts, estructuras de control y funciones.",
      "Importar, analizar y visualizar datos básicos."
    ],
    requisitos: "Laptop o PC con MATLAB instalado. Se requieren conocimientos básicos de matemática y manejo de computadora; no se requiere experiencia previa en programación.",
    evaluacion: "Ejercicios prácticos por sesión 40%, participación y resolución de problemas 20%, proyecto integrador 40%.",
    productoFinal: "Programa sencillo que resuelva un problema aplicado y presente resultados mediante gráficos.",
    disponible: "SI",
    destacado: "SI",
    fechaInicio: "02/10/2026",
    fechaFin: "11/10/2026",
    diasClase: "Viernes, sábado y domingo",
    horarioClase: "5:00 p. m. – 7:00 p. m.",
    estadoCurso: "Próxima Edición",
    silabo: [
      { sesion: 1, tema: "Introducción y fundamentos", contenido: "Entorno, archivos, Command Window, Workspace, Editor, Figure, variables, tipos, operaciones y ayuda integrada.", practica: "Calculadora de ingeniería." },
      { sesion: 2, tema: "Vectores matrices y arreglos", contenido: "Vectores, matrices, indexación, operaciones matriciales y elemento a elemento, dimensiones y funciones básicas.", practica: "Análisis numérico de un conjunto de datos." },
      { sesion: 3, tema: "Scripts y programación básica", contenido: "Scripts, comentarios, operadores, if, elseif, else, for, while, break y continue.", practica: "Automatización de cálculos." },
      { sesion: 4, tema: "Funciones y visualización", contenido: "Funciones, entradas, salidas, funciones locales, plot, títulos, ejes, leyendas, estilos y subplots.", practica: "Función propia con representación gráfica." },
      { sesion: 5, tema: "Datos y análisis básico", contenido: "Importación, tablas, limpieza, selección, estadística descriptiva, gráficos, exportación e introducción a integración con Python.", practica: "Análisis y presentación de datos." },
      { sesion: 6, tema: "Proyecto integrador y evaluación", contenido: "Problema aplicado, diseño, scripts o funciones, cálculo, visualización, interpretación y presentación.", practica: "Programa aplicado con resultados y gráficos." }
    ]
  }

];
