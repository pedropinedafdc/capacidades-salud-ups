import React, { useMemo, useState } from "react";
import { Search, ExternalLink, Mail, ArrowLeft, HeartHandshake, Filter, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const COLORS = {
  primary: "#003B82",
  dark: "#001F5B",
  light: "#DCE8F5",
  bg: "#F8FAFC",
  text: "#0F172A",
  muted: "#475569",
};

const KEY_INTEREST_OPTIONS = [
  "Inteligencia Artificial y Analítica de Datos",
  "Ciberseguridad y Protección de Datos",
  "Ingeniería Biomédica y Tecnologías para la Salud",
  "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
  "Agua, Medio Ambiente y Salud Pública Ambiental",
  "Agricultura Inteligente, Agroecología e Inocuidad",
  "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
  "Psicología, Salud Mental y Bienestar Social",
  "Movilidad Sostenible y Ciudades Inteligentes",
  "Materiales, Manufactura e Infraestructura",
  "Gestión Empresarial, Economía y Desarrollo Productivo",
];



function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function inferKeyInterest(item) {
  const text = normalizeText(`${item.key_topics} ${item.research_interest}`);
  const interests = [];

if (/inteligencia artificial|machine learning|deep learning|ia|nlp|llm|datos|analitica|analisis de datos|software|chatbot|transformer|mineria|vision artificial|modelos de lenguaje|redes neuronales/.test(text)) {
  interests.push("Inteligencia Artificial y Analítica de Datos");
}

if (/ciberseguridad|seguridad informatica|proteccion de datos|privacidad|auditoria regulatoria|antidelitos|ciberterrorismo|intrusos|contrasenas|delitos informaticos/.test(text)) {
  interests.push("Ciberseguridad y Protección de Datos");
}


  if (/biomedic|salud|medic|clinica|diagnostic|protesis|sensor medic|rehabilit|neuro|eeg|bci|implante|odontolog|biosenal|tomografia|cancer/.test(text)) {
    interests.push("Ingeniería Biomédica, Salud, Prótesis y Sensores Médicos");
  }

if (/telecomunic|iot|electronica|redes|inalambric|lora|lorawan|uwb|radiofrecuencia|antena|edge|fog|esp32|sensores/.test(text)) {
  interests.push("Telecomunicaciones, IoT, Electrónica y Redes");
}


  if (/agricultura|agua|ambiente|medio ambiente|pesticida|hidric|microplastico|sustentable|sostenible|clima|ecosistema|cultivo|agro/.test(text)) {
    interests.push("Agricultura Inteligente, Medio Ambiente y Agua");
  }

  if (/educacion|pedagog|inclusion|psicolog|bienestar|salud mental|violencia|demencia|autismo|discapacidad|social/.test(text)) {
    interests.push("Educación Inclusiva, Psicología y Bienestar Social");
  }

  if (/movilidad|ciudad|smart city|smart cities|transporte|urbana|gps|flota|vehiculo|conduccion|emisiones/.test(text)) {
    interests.push("Movilidad Sostenible y Ciudades Inteligentes (Smart Cities)");
  }

  if (/material|construccion|manufactura|impresion 3d|cad|cam|resina|polimero|compuesto|fractura|estructura|fem|cemento|ceram/.test(text)) {
    interests.push("Ingeniería de Materiales, Construcción y Manufactura");
  }

  if (/gestion|empresa|economia|pymes|pyme|emprendedor|productiv|financier|turismo|calidad|qfd|organizacional/.test(text)) {
    interests.push("Gestión Empresarial, Economía y Pymes");
  }

  return interests.length ? interests : ["Gestión Empresarial, Economía y Pymes"];
}


const rawResearchers = [
  {
    "id": "1",
    "nombre": "Adrian Eugenio Ñauta Ñauta",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26415410/auta_auta_adrian_eugenio.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/adrian-eugenio-%C3%B1auta-%C3%B1auta/",
    "research_interest": "Su labor investigativa se dirige a evaluar la calidad integral, medir los riesgos laborales y examinar los impactos ambientales generados por las pequeñas y medianas empresas (pymes) dedicadas al sector manufacturero, centrándose particularmente en la ciudad de Cuenca",
    "key_topics": "Gestión empresarial y economía",
    "sdg": [
      "No especificado"
    ]
  },
  {
    "id": "2",
    "nombre": "Ana Cecilia Villa Parra",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26423971/villa_parra_ana_cecilia.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/ana-cecilia-villa-parra-3/",
    "research_interest": "Consolida un enfoque multidisciplinario combinando ingeniería biomédica, rehabilitación, neurotecnología y sistemas de detección inteligente Evalúa protocolos de neurorrehabilitación que utilizan interfaces cerebro-computadora (BCI), imaginación motora (MI) y estimulación no invasiva para pacientes que han sufrido accidentes cerebrovasculares (ictus) Integra el uso de guantes robóticos, exoesqueletos, monociclos y sensores portátiles (EEG/sEMG) impulsados por aprendizaje automático para decodificar intenciones neuronales, monitorear la salud deportiva y crear diagnósticos médicos rápidos como el IPMA",
    "key_topics": "Ingeniería Biomédica, Rehabilitación, Neurotecnología",
    "sdg": [
      "3",
      "7"
    ]
  },
  {
    "id": "3",
    "nombre": "Andrea Karina Bermeo Naula",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26400924/bermeo_naula_andrea_karina.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/andrea-karina-bermeo-naula-2/",
    "research_interest": "Presenta un programa enfocado en comprender y optimizar la movilidad urbana en la ciudad de Cuenca fusionando ingeniería de transporte, analítica geoespacial y tecnologías inteligentes Recolecta grandes volúmenes de datos usando biosensores de vehículos, telemetría (OBD-II) y análisis de GPS para implementar arquitecturas de Machine Learning, como redes neuronales, que permitan cuantificar inventarios de emisiones (CO, NOx), eficiencia energética y hábitos de conducción en contextos urbanos Estudia igualmente los impactos ambientales y la optimización del uso de flotas de autobuses eléctricos y corredores de movilidad verde",
    "key_topics": "Transporte, Movilidad Sostenible y Emisiones",
    "sdg": [
      "3",
      "7",
      "9",
      "11",
      "13"
    ]
  },
  {
    "id": "4",
    "nombre": "Andres Alexis Ramirez Coronel",
    "url_photo": "https://pure.ups.edu.ec/files-asset/71782723/prssgi5127.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/andres-alexis-ramirez-coronel/",
    "research_interest": "Desarrolla un robusto programa clínico y epidemiológico de psicología, centrado en medir factores como el bienestar social, dinámica familiar, el impacto del envejecimiento y la salud mental Su trabajo prioriza el desarrollo y la estricta validación psicométrica y estructural de instrumentos de medición para investigar temas críticos en Latinoamérica: comportamientos suicidas, diversas expresiones de violencia (infantil, hacia los padres y en el noviazgo), demencia y estrés en poblaciones vulnerables Explora terapias modernas incluyendo telepsicología, tecnologías inmersivas como realidad virtual y juegos serios orientados a la psicología educativa",
    "key_topics": "Psicología, Salud Mental, Bienestar Social y Prevención de Violencia",
    "sdg": [
      "1",
      "3",
      "5",
      "10",
      "16"
    ]
  },
  {
    "id": "5",
    "nombre": "Angel Andres Perez Muñoz",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26416540/perez_mu_oz_angel_andres.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/angel-andres-perez-mu%C3%B1oz-3/",
    "research_interest": "Propone soluciones enfocadas a democratizar la educación y la salud pública integrando accesibilidad, herramientas inclusivas y análisis impulsados por IA En el sector salud, se dedica a la investigación de aparatos portables de sensores de bajo costo para diagnósticos de pie plano o arco alto e imaginería médica en odontología A nivel inclusivo y pedagógico, diseña mapas de imágenes para accesibilidad web usando reconocimiento de caracteres (YOLO-OCR) y promueve el diseño de sistemas y simuladores laborales accesibles en cumplimiento de rigurosos estándares de la WAI para fomentar oportunidades de empleo hacia grupos discapacitados",
    "key_topics": "Pedagogía, Educación e Inclusión Tecnológica",
    "sdg": [
      "3",
      "4"
    ]
  },
  {
    "id": "6",
    "nombre": "Angelica Geovanna Zea Cobos",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26424364/zea_cobos_angelica_geovanna.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/angelica-geovanna-zea-cobos-2/",
    "research_interest": "Formula aproximaciones interdisciplinares hacia el monitoreo analítico del ambiente, seguridad hídrica y cuidado en la salud pública Destaca por perfeccionar métodos escalables de detección de contaminantes emergentes (como metales pesados o microplásticos) y turbidez del agua, utilizando tanto infraestructura del Internet de las Cosas (IoT) como espectrometría (FTIR) y visión artificial Asimismo, coordina estudios que establecen vínculos entre las prácticas agrícolas con pesticidas y las secuelas en la salud comunitaria, elaborando simultáneamente guías etnobotánicas para rescatar el conocimiento de plantas medicinales nativas en Ecuador",
    "key_topics": "Monitoreo y Calidad del Agua, Epidemiología Pública, Comunidades, Uso de Pesticidas, Gestión Sustentable, Análisis Químico",
    "sdg": [
      "3",
      "4",
      "6",
      "7",
      "12",
      "13",
      "14",
      "15"
    ]
  },
  {
    "id": "7",
    "nombre": "Cesar Antonio Paltan Zhingre",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37377484/cesar_antonio_paltan_zhingre.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/cesar-antonio-paltan-zhingre-2/",
    "research_interest": "Estudia el comportamiento mecánico, resistencia estructural y la durabilidad de novedosos compuestos a través de ensayos de laboratorio y simulaciones paramétricas Un aspecto fundamental recae en la manufactura biomédica y la restauración dental, probando redes cerámicas infiltradas por polímeros y resinas de impresión 3D mediante fresado y manufactura aditiva frente a envejecimiento termomecánico y fracturas de carga A nivel ambiental e industrial, investiga biocompuestos que combinan termoplásticos y fibras naturales (como el bambú y nanocristales de celulosa de residuos agroindustriales) diseñados para impresión 3D e inyección",
    "key_topics": "Ingeniería de Materiales y Biomédica, Compuestos Poliméricos, Impresión 3D, Resinas CAD/CAM y Restauraciones Dentales, Fibras Naturales y Fracturas",
    "sdg": [
      "8",
      "12"
    ]
  },
  {
    "id": "8",
    "nombre": "Christian Raul Salamea Palacios",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37383574/christian_raul_salamea_palacios.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/christian-raul-salamea-palacios-2/",
    "research_interest": "Su trayectoria se apoya en el uso del Procesamiento de Lenguaje Natural (NLP), el Deep Learning (modelos generativos como GPT-2 y transformers) y arquitecturas de transferencia para resolver problemas de inclusión social, minería de datos legales y de salud clínica Construye sistemas orientados a la traducción automática de lenguajes de señas y estimadores de salud como medidores no invasivos de glucosa o clasificadores acústicos para diagnosticar COVID-19 o asma a través del sonido pulmonar Empuja la aplicación de la IA en chats interactivos y entornos IoT",
    "key_topics": "NLP y Analítica de Texto",
    "sdg": [
      "3",
      "6",
      "7",
      "16"
    ]
  },
  {
    "id": "9",
    "nombre": "Daniel Javier Pulla Sanchez",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26417099/pulla_sanchez_daniel_javier.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/daniel-javier-pulla-sanchez-2/",
    "research_interest": "Aplica el poder del análisis masivo de datos e IA en la interpretación de interacciones sociales y educativas Construye líneas base combinando la minería de textos, modelado de temas (BERTopic, LangChain) e instrumentaciones con Modelos de Lenguaje Grande (LLMs) para mapear redes semánticas sobre problemas urbanos en Twitter como la inseguridad ciudadana y la violencia, además del discurso político de campañas Transfiere tecnologías similares al contexto académico creando entornos digitales educativos, agentes para aprendizaje personalizado y analítica bibliométrica a nivel institucional",
    "key_topics": "Conversational AI, NLP y Analítica Textual",
    "sdg": [
      "3",
      "10",
      "16"
    ]
  },
  {
    "id": "10",
    "nombre": "Diana Carolina Zuñiga Ortega",
    "url_photo": "https://pure.ups.edu.ec/files-asset/71782083/prssgi1430.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/diana-carolina-zu%C3%B1iga-ortega-2/",
    "research_interest": "Investiga a profundidad las variables en la psicología organizacional y recursos humanos en trabajadores dentro de contextos latinoamericanos, particularmente Chile y Ecuador Sus contribuciones se centran en establecer cómo el compromiso activo y las perspectivas generacionales (X, Y y Z) definen la ética del comportamiento en la empresa y el desempeño ciudadano de los empleados ante culturas organizacionales inclusivas También incorpora validaciones aplicadas hacia estudios como la percepción pública de seguridad vial",
    "key_topics": "Ética Organizacional y de Trabajo",
    "sdg": [
      "3"
    ]
  },
  {
    "id": "11",
    "nombre": "Diego Rene Urgiles Contreras",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26423242/urgiles_contreras_diego_rene.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/diego-rene-urgiles-contreras-2/",
    "research_interest": "Participa en la conceptualización, caracterización física y construcción ingenieril de vehículos mecánicos sostenibles y competentes, en especial los eléctricos tipo Formula SAE para certámenes estudiantiles y de investigación analítica Destaca su involucramiento en determinar propiedades de tensión y fracturas en paneles y laminados compuestos a base de fibra de carbono incrustada en epoxi que brindan soporte y rigidez estructural sin afectar el peso",
    "key_topics": "Compuestos Laminados",
    "sdg": [
      "No especificado"
    ]
  },
  {
    "id": "12",
    "nombre": "Efren Vazquez Silva",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37413832/efren_vazquez_silva.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/efren-vazquez-silva-3/",
    "research_interest": "Lidera el desarrollo de flujos de trabajo orientados a la medicina e implantes bio-personalizados usando manufactura aditiva y escaneo anatómico 3D Segmentando tomografías computarizadas e implementando simulaciones por Método de Elementos Finitos (FEM), diseña y evalúa prototipos estructurales de PEEK, PMMA y ácido poliláctico con capacidades biomecánicas equivalentes a los huesos de los pacientes en escenarios ortopédicos o maxilofaciales, ayudando así a abaratar costos de atención para los sistemas médicos locales Complementa el estudio analizando infraestructuras, como soldaduras y el comportamiento sísmico en aceros estructurales, validando los análisis por estándares AISC/FEM",
    "key_topics": "Ingeniería Médica e Implantes Personalizados",
    "sdg": [
      "3"
    ]
  },
  {
    "id": "13",
    "nombre": "Erwin Jairo Sacoto Cabrera",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26419971/sacoto_cabrera_erwin_jairo.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/erwin-jairo-sacoto-cabrera-3/",
    "research_interest": "Su interés combina sistemas de control y de Edge y Fog computing en soluciones conectadas a plataformas de monitoreo como Internet de las Cosas (IoT) para promover entornos inteligentes y transformación urbana digital Implementa algoritmos de aprendizaje profundo en tareas que van desde medición inteligente y control de caudales urbanos de agua mediante Digital Twins hasta monitoreos de fallas en matrices fotovoltaicas Además, sus diseños impulsan redes estables, observatorios digitales y estándares eficientes en agroecología de precisión y telecomunicaciones unificadas",
    "key_topics": "Arquitectura Fog/Edge e IoT",
    "sdg": [
      "3",
      "6",
      "7",
      "11",
      "12",
      "16",
      "17"
    ]
  },
  {
    "id": "14",
    "nombre": "Esteban Fernando Ordoñez Morales",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37376198/esteban_fernando_ordonez_morales.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/esteban-fernando-ordo%C3%B1ez-morales-3/",
    "research_interest": "Emplea de manera interdisciplinaria la instrumentación sensorial y las telecomunicaciones inalámbricas (IoT) para crear intervenciones robustas Su cartera tecnológica aborda bioseñales y visión computarizada para asistir y analizar estrés de conducción, aplicaciones de apoyo educativo-parental destinadas a menores dentro del espectro autista, así como el monitoreo y cuidado de la población geriátrica En el área industrial/agrícola implementa herramientas automatizadas, como el proyecto \"SISMO-ROSAS\", para medir variables edáficas, optimizar cultivos, contar capullos y regular sistemas de refrigeración",
    "key_topics": "Instrumentación y Sensores Biológicos",
    "sdg": [
      "2",
      "3",
      "7",
      "8",
      "11",
      "12",
      "13"
    ]
  },
  {
    "id": "15",
    "nombre": "Freddy Leonardo Bueno Palomeque",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37331130/freddy_leonardo_bueno_palomeque.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/freddy-leonardo-bueno-palomeque-3/",
    "research_interest": "Consolida investigaciones en torno a electrofisiología humana, neurotecnologías e instrumentación médica computarizada Realiza exhaustivos mapeos e inyecciones de modelado sintético de variaciones electrocardiográficas a pacientes jóvenes y su relación con alteraciones uterinas y de arritmia Conjuga estas adquisiciones neuronales y cardiovasculares con estudios de estímulos interactivos y herramientas de software aplicados al análisis del deporte en laboratorio, validación funcional de exoesqueletos y métricas operacionales de mantención técnica sobre equipamiento de las clínicas u hospitales",
    "key_topics": "Computación de Señales Médicas, Rehabilitación y Biomecánica",
    "sdg": [
      "3",
      "7"
    ]
  },
  {
    "id": "16",
    "nombre": "Gabriel Alejandro Leon Paredes",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26413652/leon_paredes_gabriel_alejandro.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/gabriel-alejandro-leon-paredes-3/",
    "research_interest": "Procesa modelos de inteligencia computacional híbrida uniendo el Machine Learning predictivo de imágenes de resonancias en la nube y el mapeo explicable para dar apoyo clínico contra células de cáncer tumoral, mitigando posibles errores diagnósticos Especialista en técnicas de NLP masivo (LLMs preentrenados y transformers como DeepSeek o RoBERTa), creando chatbots, detectando desinformación (Fake News) o analizando interacciones del idioma español a partir de ecosistemas de plataformas como TikTok para la lectura sociopolítica También modela infraestructuras telemáticas y protocolos distribuidos",
    "key_topics": "Procesamiento Textual (NLP) y Conversacional",
    "sdg": [
      "3",
      "7",
      "11",
      "17"
    ]
  },
  {
    "id": "17",
    "nombre": "Jessica Vanessa Quito Calle",
    "url_photo": "https://www.ups.edu.ec/documents/20121/41810/1892.jpg",
    "url": "https://pure.ups.edu.ec/en/persons/jessica-vanessa-quito-calle/",
    "research_interest": "Despliega investigación rigurosa alrededor de problemas complejos de la conducta psicológica en Latinoamérica, desde vulnerabilidades familiares, hasta afecciones neuronales por demencia geriátrica, suicidio adulto y violencia adolescente Emplea potentes metodologías estructurales mixtas de evaluación de estrés y perfiles psicológicos o de perfiles de asesinos seriales Empuja a la práctica docente herramientas vanguardistas apoyadas sobre la virtualización 3D y juegos de neurofeedback donde jóvenes o víctimas de agresión pueden aprender pautas de autoprotección y terapia en entornos mitigados por tecnologías emergentes",
    "key_topics": "Psicología Clínica y Geriatría, Bienestar Social, Desórdenes Mentales y Violencia, Realidad Virtual e Intervención, Teleterapias y Neurofeedback Educativo",
    "sdg": [
      "1",
      "3",
      "5",
      "10",
      "16"
    ]
  },
  {
    "id": "18",
    "nombre": "Jonnathan Dario Santos Benitez",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26422401/santos_benitez_jonnathan_dario.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/jonnathan-dario-santos-benitez-3/",
    "research_interest": "Analiza rigurosamente la micromecánica constructiva y los umbrales de propagación de fracturas interlaminares sobre compuestos de polímeros reforzados en la fabricación aditiva (Impresión 3D continua) y estructuras tradicionales Modeliza, a nivel numérico o con validaciones de microscopía de rayos-x y metodologías estandarizadas de fractura, cómo reaccionan las estructuras mecánicas complejas al deslaminado cuando se construyen por ejemplo con ensambles híbridos, llantas recicladas o fibras de cerámica orientadas",
    "key_topics": "Tenacidad contra Fracturas",
    "sdg": [
      "No especificado"
    ]
  },
  {
    "id": "19",
    "nombre": "Jorge Antonio Perez Torres",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26416628/perez_torres_jorge_antonio.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/jorge-antonio-perez-torres-2/",
    "research_interest": "Procesa el análisis computacional del \"PHM\" (Mantenimiento basado en pronósticos), capturando bioseñales o vibraciones y empleando Machine Learning y Deep Learning multimodales para vaticinar fallas e integridades sobre los rodamientos de plantas industriales 4.0 Promueve el diseño teórico-práctico de las ciudades Smart basadas en mapeos temáticos o Gemelos Digitales (IoT) y explora activamente temas de la gerencia corporativa en economía circular, bienestar de la red de los trabajadores y tratados comerciales como estrategias para crear economías organizadas en pos de \"la felicidad\" y una mercadotecnia equitativa",
    "key_topics": "Mantenimiento Predictivo 4.0",
    "sdg": [
      "4",
      "7",
      "8",
      "10",
      "11",
      "12"
    ]
  },
  {
    "id": "20",
    "nombre": "Jorge Isaac Fajardo Seminario",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26410620/fajardo_seminario_jorge_isaac.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/jorge-isaac-fajardo-seminario-3/",
    "research_interest": "Realiza ensayos físicos que correlacionan resinas sostenibles y técnicas complejas de conformado de materiales termomecánicos Compara coronas, mallas o implantes cerámicos creados en polímeros mediante tecnologías CNC / Impresión 3D, evaluando la resistencia mecánica post-envejecimiento por ciclos térmicos y la microdureza Desarrolla también alternativas limpias con fibras vegetales de guadua integradas en polímeros por extrusión, apoyando las tecnologías y biorrefinerías en base a descartes agro-biológicos en pro del sector automotriz o ingenieril",
    "key_topics": "Materiales Odontológicos Impresos en 3D (CAD/CAM)",
    "sdg": [
      "7",
      "8",
      "9",
      "12"
    ]
  },
  {
    "id": "21",
    "nombre": "Jorge Osmani Ordoñez Ordoñez",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26415613/ordo_ez_ordo_ez_jorge_osmani.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/jorge-osmani-ordo%C3%B1ez-ordo%C3%B1ez-2/",
    "research_interest": "Emplea algoritmos biológicos-heurísticos para la validación numérica de componentes y topologías de antenas de parche inalámbrico súper-anchas (UWB) en frecuencias altas y textiles wearables Los espectros medidos logran analizar fluidos en la piel humana o parámetros de carnes y patologías mediante radiofrecuencias incrustadas con alta eficiencia energética Integra estas visualizaciones inalámbricas para entornos virtuales inmersivos orientados al laboratorio para el sistema y las fábricas educacionales (VR/AR) y gestiona despliegues algorítmicos en arquitecturas y redes híbridas u ópticas",
    "key_topics": "Radiofrecuencia Ultra-Ancha y Telecomunicaciones (UWB)",
    "sdg": [
      "2",
      "3",
      "7",
      "9",
      "11",
      "13",
      "14"
    ]
  },
  {
    "id": "22",
    "nombre": "Juan Pablo Vazquez Loaiza",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37413731/juan_pablo_vazquez_loaiza.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/juan-pablo-vazquez-loaiza-2/",
    "research_interest": "Interviene localmente analizando cómo se desarrollan competitivamente los micro y pequeños emprendedores y el artesanado de Ecuador (ej. turismo, licores, sombreros de paja y cueros, y cárnicos), estructurando procesos productivos de aseguramiento de la calidad mediante herramientas y auditorías QFD o métodos iterativos Aborda exhaustivamente proyectos sobre vinculación e intermediación entre políticas universitarias, desarrollo económico sustentable de la sociedad (economía popular) y el apalancamiento mediante nuevas tendencias de inteligencia artificial en organizaciones",
    "key_topics": "Economía Solidaria Rural y Pymes Turísticas",
    "sdg": [
      "5",
      "7",
      "8",
      "9",
      "12",
      "17"
    ]
  },
  {
    "id": "23",
    "nombre": "Juan Paul Inga Ortega",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26412975/inga_ortega_juan_paul.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/juan-paul-inga-ortega-3/",
    "research_interest": "Provee la base fundamental para sistemas masivos autónomos e internet ciber-físico a nivel urbano rural y agrícola Mediante inteligencia artificial o heurística resuelve redes complejas optimizando infraestructuras como telemetrías celulares (5G), nodos sensores para facturaciones y pérdidas en flujos de contadores de aguas residuales y Smart Grids interconectadas Desarrolla prototipos como Gemelos Digitales de Rovers, y dashboards con visión que detectan desde el nivel del agua en canales, hasta los nutrientes subterráneos de tierras agrícolas en plantaciones de rosas y granjas con energías fotovoltaicas desatendidas",
    "key_topics": "Arquitecturas de Integración Inalámbricas Heterogéneas y LoRaWAN",
    "sdg": [
      "2",
      "6",
      "7",
      "8",
      "11",
      "12",
      "17"
    ]
  },
  {
    "id": "24",
    "nombre": "Luis Javier Serpa Andrade",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26422509/serpa_andrade_luis_javier.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/luis-javier-serpa-andrade-3/",
    "research_interest": "Entremezcla disciplinas de robótica motora de interfaces automatizadas con computación visual o espectroscópica en tiempo real impulsada en las placas de bajo consumo, como los microcontroladores (ESP32, Teensy) y arquitecturas interconectadas vía CAN Implementa plataformas Hardware, Software orientadas a rehabilitaciones para niños autistas mediante chat y dispositivos robóticos (como módulos STEM y cajas multisensoriales que motivan respuestas y controlan estrés) promoviendo a las ciudades inclusivas en Ecuador en un ambiente seguro",
    "key_topics": "Electrónica Biomédica Sensorial (Hardware y Módulos Pedagógicos de Niños)",
    "sdg": [
      "3",
      "4",
      "7",
      "11",
      "12",
      "13"
    ]
  },
  {
    "id": "25",
    "nombre": "Maria Fernanda Guevara Segarra",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26412277/guevara_segarra_maria_fernanda.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/maria-fernanda-guevara-segarra-2/",
    "research_interest": "Articula complejas comparaciones de tendencias macroeconómicas modelando matemáticamente variables de series de tiempo como balanzas comerciales, consumo de variables petrolíferas/formación de capital y su consecuente vínculo histórico con las emisiones nacionales contaminantes o el PIB dentro de Ecuador a lo largo de décadas Extiende sus estudios en bioprocesos empíricos orientados a la inmovilización biológica de descargas que filtran aguas dulces cargadas de metales tóxicos utilizando microalgas y economías solidarias",
    "key_topics": "Variables Financieras Empresariales y Ecosistema Inversionista Latino",
    "sdg": [
      "7",
      "8",
      "10"
    ]
  },
  {
    "id": "26",
    "nombre": "Miguel Arturo Arcos Argudo",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26399513/arcos_argudo_miguel_arturo.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/miguel-arturo-arcos-argudo-3/",
    "research_interest": "Traza comparativas y análisis a profundidad sobre los ecosistemas de privacidad legal, leyes informáticas transfronterizas e implementación real de auditorías regulatorias corporativas e institucionales y sistemas antidelitos y ciberterrorismo digital en Sudamérica Incorpora innovaciones matemáticas como algoritmos híbridos profundos u oversampling contra las desincronizaciones de redes, mejorando la categorización para intrusos y gestionando aplicaciones formativas lúdicas frente a las inseguridades informáticas cotidianas (contraseñas seguras, metaversos educativos en matemática)",
    "key_topics": "Ciberseguridad Gubernamental Corporativa",
    "sdg": [
      "16",
      "17"
    ]
  },
  {
    "id": "27",
    "nombre": "Monica Judith Espadero Bermeo",
    "url_photo": "https://pure.ups.edu.ec/files-asset/28074932/espadero_bermeo_monica_judith.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/monica-judith-espadero-bermeo-2/",
    "research_interest": "Encabeza validaciones microbiológicas para la salubridad y epidemiología comunitaria tanto de plantas curativas (diente de león, romero) investigando extractos antimicrobianos in-vitro (para el acné y conservación en biocosmética), como pruebas de la vigilancia en mercados frente a la polución animal/agrícola Detecta serológicamente parásitos o gripes pandémicas que albergan conejillos locales, leche cruda o verduras (lechugas o papas) integrándose a una perspectiva pública multidisciplinar de sanidad para reducir infecciones",
    "key_topics": "Análisis de Zoonosis y Cultivos",
    "sdg": [
      "3"
    ]
  },
  {
    "id": "28",
    "nombre": "Nestor Diego Rivera Campoverde",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26418187/rivera_campoverde_nestor_diego.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/nestor-diego-rivera-campoverde-2/",
    "research_interest": "Extrae datos mediante instrumentación geoespacial/GPS, encuestas de flujo y lecturas de telemetría OBD-II para diagnosticar ecosistemas de tránsito metropolitano y movilidad sustentable Modeliza algoritmos (regresiones, inteligencia artificial, lógicas neuronales difusas) permitiendo a gestores de redes viales comprender inventarios geolocalizados de emanaciones tóxicas o predecir métricas operacionales reales por descargas híbridas o hábitos de conducción, facilitando alternativas viables en corredores citadinos",
    "key_topics": "Modelos Geoespaciales y Flujos de Ciudades Inteligentes",
    "sdg": [
      "3",
      "7",
      "11",
      "13"
    ]
  },
  {
    "id": "29",
    "nombre": "Paola Jackeline Duque Sarango",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37363981/paola_jackeline_duque_sarango.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/paola-jackeline-duque-sarango-2/",
    "research_interest": "Maneja instrumentaciones e ingeniería de caudales combinando el uso masivo de irradiación LED Ultravioleta (UV) para aniquilar patógenos y hongos del medio acuatilátero, estudiando luego los procesos fotorreactivos frente a desinfecciones en las biopartículas Paralelamente elabora modelos paramétricos automatizados o de \"Machine Learning\", acoplados a cuencas naturales andinas, mapeo geomorfológico, monitoreo hídrico o fotocatálisis que permitan limpiar trihalometanos, estimando los caudales óptimos o la producción agro-inteligente amigable que benefician el recurso de la comunidad rural y sus humedales",
    "key_topics": "Hidráulica Cuantitativa y Predicción Computacional de Aguas",
    "sdg": [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15"
    ]
  },
  {
    "id": "30",
    "nombre": "Remigio Ismael Hurtado Ortiz",
    "url_photo": "https://pure.ups.edu.ec/files-asset/71782192/prssgi800.jpg?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/remigio-ismael-hurtado-ortiz-3/",
    "research_interest": "Implementa flujos en torno a la salud clínica computarizada utilizando modelos transferidos de inteligencia artificial para agrupar análisis volumétricos desde tomografías (CT, PET) o rayos X y lograr altísimos niveles predictivos diagnósticos, localizando enfermedades neurodegenerativas complejas como Alzheimer o segmentando y evaluando malformaciones de cáncer cerebral/pulmonar para decisiones preoperatorias confiables Expande la efectividad lograda de algoritmos Ensembles para guiar visualmente por cámaras y apps a individuos invidentes y pronosticar anomalías o fraudes financieros para sistemas aseguradores y administrativos",
    "key_topics": "Segmentación Computarizada y Explicabilidad Artificial Médica",
    "sdg": [
      "3",
      "7",
      "8"
    ]
  },
  {
    "id": "31",
    "nombre": "Tony Jesus Viloria Avila",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26424154/viloria_avila_tony_jesus.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/tony-jesus-viloria-avila-2/",
    "research_interest": "Resuelve aplicaciones para sectores agroecológicos o vulnerables integrando ensayos en ecosistemas y ciencias mecánicas bioimpresas A nivel alimenticio y ambiental monitorea ecosistemas endémicos o jardines estimando la carga microbiológica o radiológica de riesgos para la salud de poblaciones de bajos recursos frente al desarrollo agrícola-comercial (pesticidas, hongos en vegetales) A nivel biomédico simula y corrobora in-vitro las fuerzas y flexiones operacionales de diseños tridimensionales (elementos finitos en moldes PMMA e impresiones) reduciendo los problemas estéticos o limitantes del uso de injertos reconstructivos osteomédicos maxilofaciales para cirugías en Ecuador",
    "key_topics": "Ingeniería Físico-Mecánica de Implantes de Carga",
    "sdg": [
      "3"
    ]
  },
  {
    "id": "32",
    "nombre": "Zobeida Yaroslava Robles Bykbaev",
    "url_photo": "https://pure.ups.edu.ec/files-asset/37382086/zobeida_yaroslava_robles_bykbaev.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/zobeida-yaroslava-robles-bykbaev-2/",
    "research_interest": "Concentra programas sociales interdisciplinarios construyendo dispositivos e intervenciones tecnológicas para minorías marginadas latinoamericanas e infantes bajo situaciones de riesgo en el sector agro, desinformados y minorías especiales de autismo / discapacidad Por medio de herramientas móviles y análisis computarizado o árboles interactivos, monitorea indicadores médicos (dietas o impulsos andinos y respuestas emocionales mediante cámaras o bioeléctrica local), capacitando granjeros y promoviendo el conocimiento cultural inclusivo adaptativo apoyando desde sus normativas organizacionales",
    "key_topics": "Pedagogía Psicomotriz Inclusiva Tecnológica",
    "sdg": [
      "1",
      "3",
      "4",
      "5",
      "10",
      "16",
      "17"
    ]
  },
  {
    "id": "33",
    "nombre": "Gabriela Isabel Araujo Ochoa",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26399442/araujo_ochoa_gabriela_isabel.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/gabriela-isabel-araujo-ochoa-2/",
    "research_interest": "Explora las dinámicas económicas, organizacionales y productivas de las pequeñas y medianas empresas (PYMES) y de las economías agroecológicas en Ecuador, enfocándose en cadenas de valor, gobernanza y análisis de desempeño dentro de sectores manufactureros, comerciales, agrícolas, turísticos y de distribución Mediante herramientas cuantitativas y econométricas como correlaciones estadísticas, modelos de regresión lineal, juegos de alianzas y marcos de calidad QFD, diagnostica factores que impulsan la competitividad, productividad y sostenibilidad de pequeñas empresas y comunidades rurales Analiza además el impacto de la adopción tecnológica, el acceso al financiamiento, la inclusión en políticas públicas y los procesos de adaptación posteriores a crisis como COVID-19 Desarrolla estrategias basadas en inteligencia de negocios y modelos colaborativos para optimizar recursos, fortalecer redes agroproductivas y promover prácticas inclusivas en educación y mercados laborales para personas con discapacidad dentr...",
    "key_topics": "Economía y gestión empresarial",
    "sdg": [
      "3",
      "7",
      "12",
      "16"
    ]
  },
  {
    "id": "34",
    "nombre": "Pablo Fernando Cevallos Larrea",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26408466/cevallos_larrea_pablo_fernando.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/pablo-fernando-cevallos-larrea",
    "research_interest": "Desarrolla investigaciones en la intersección de la Ingeniería Biomédica y la neurotecnología, enfocándose en interfaces neuronales y sensoriales multimodales, sistemas avanzados de adquisición y estimulación, y tecnologías aplicadas a la rehabilitación y educación Analiza correlatos neuronales de percepción y atención mediante medidas electrofisiológicas como ASSR y lateralidad hemisférica Diseña plataformas programables multicanal capaces de ejecutar estímulos simultáneos y procesamiento en tiempo real, incluyendo sistemas CPT de dos canales y plataformas de estimulación multimodal Integra tecnologías aplicadas para rehabilitación mediante dispositivos de Estimulación Eléctrica Funcional (FES) controlados remotamente y juegos educativos orientados a promover hábitos saludables en poblaciones vulnerables Metodológicamente emplea análisis EEG/ERP, dinámicas ERD/ERS, paradigmas de estimulación eléctrica, interfaces en Python y LabVIEW, caracterización rigurosa de dispositivos biomédicos y experimentos pilot...",
    "key_topics": "Ingeniería Biomédica, Rehabilitación, Prótesis y Neurotecnología|Sensores, Instrumentación y Sistemas de Medición|Atención auditiva selectiva|ASSR|Lateralidad neuronal|Neurotecnología multimodal|Estimulación y registro simultáneo|Sistemas de estimulación eléctrica|CPT|Tecnología educativa|Gamificación|FES|ESP32|Procesamiento en tiempo real",
    "sdg": [
      "2"
    ]
  },
  {
    "id": "35",
    "nombre": "Paul Andres Chasi Pesantez",
    "url_photo": "https://pure.ups.edu.ec/files-asset/26408703/chasi_pesantez_paul_andres.png?w=320&f=webp",
    "url": "https://pure.ups.edu.ec/en/persons/paul-andres-chasi-pesantez",
    "research_interest": "Desarrolla investigaciones orientadas al avance de las telecomunicaciones inalámbricas, la recolección de energía por radiofrecuencia (RF Energy Harvesting), la educación tecnológica y los sistemas inteligentes mediante programas integrales de diseño, medición y aplicación de antenas inalámbricas Enfoca su trabajo en el refinamiento ingenieril de antenas patch y ultra-wideband (UWB) para contextos terrestres y wearables, alcanzando altos niveles de supresión S11 y operaciones multibanda mediante modificaciones geométricas, slots, notches y optimización de planos de tierra Complementa estas investigaciones con métodos avanzados de medición dieléctrica y permitividad usando resonadores de anillo y mediciones en campo lejano para mejorar precisión entre 2–8 GHz Integra además algoritmos de optimización e inteligencia artificial como swarm intelligence, Harris Hawks, Slime Mould y metaheurísticas aplicadas al rendimiento de antenas, monitoreo industrial y sistemas inteligentes en tiempo real También desarrolla...",
    "key_topics": "Telecomunicaciones, Sistemas Inalámbricos y Antenas|Educación, Pedagogía, Formación Docente e Inclusión|Optimización, Investigación Operativa y Soporte a Decisiones|Sensores, Instrumentación y Sistemas de Medición|Robótica, Sistemas Autónomos y Control|Inteligencia Artificial, Machine Learning y Ciencia de Datos|AR/VR y Tecnología Educativa|Manufactura y Ciencia de Materiales|Clima, Resiliencia y Sostenibilidad Urbana|Salud Pública y Epidemiología Clínica",
    "sdg": [
      "2",
      "3",
      "7",
      "9",
      "11",
      "13",
      "14"
    ]
  }
];

function splitTopics(value) {
  return String(value || "")
    .split(/\||,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function summarize(text, max = 190) {
  if (!text) return "Perfil científico disponible para exploración institucional.";
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}

function inferApplications(text) {
  const t = String(text || "").toLowerCase();
  const apps = [];
  if (/rehabilit|neuro|ictus|exoesqueleto|bci|eeg|fes/.test(t)) apps.push("Rehabilitación y neurotecnología");
  if (/diagn[oó]stic|c[aá]ncer|tumor|covid|asma|glucosa|imagen|resonancia/.test(t)) apps.push("Diagnóstico y apoyo clínico");
  if (/salud mental|psicolog|suicid|violencia|demencia|bienestar/.test(t)) apps.push("Salud mental y bienestar");
  if (/iot|sensor|monitoreo|bioseñal|telemetría|wearable|port[aá]til/.test(t)) apps.push("Monitoreo, sensores e IoT");
  if (/agua|pesticida|epidemiolog|comunitaria|salud p[uú]blica|ambiente/.test(t)) apps.push("Salud pública y ambiente");
  if (/odontolog|dental|implante|maxilofacial|biom[eé]dic|biomaterial|3d|manufactura aditiva/.test(t)) apps.push("Biomateriales, odontología e implantes");
  if (/nlp|lenguaje|chatbot|llm|texto|conversational|transformer/.test(t)) apps.push("IA, NLP y analítica clínica");
  return [...new Set(apps)].slice(0, 4);
}

function inferOds(item) {
  const name = item.nombre.toLowerCase();

  if (name.includes("adrian eugenio ñauta")) {
    return ["8", "9", "12"];
  }

  if (name.includes("diego rene urgiles") || name.includes("diego rené urgiles")) {
    return ["7", "9", "11", "13"];
  }

  if (name.includes("jonnathan dario santos") || name.includes("jonnathan darío santos")) {
    return ["9", "11", "12"];
  }

  return item.sdg;
}

const KEY_INTEREST_BY_ID = {
  "1": [
    "Gestión Empresarial, Economía y Desarrollo Productivo",
  ],
  "2": [
    "Ingeniería Biomédica y Tecnologías para la Salud",
    "Inteligencia Artificial y Analítica de Datos",
  ],
  "3": [
    "Movilidad Sostenible y Ciudades Inteligentes",
    "Inteligencia Artificial y Analítica de Datos",
  ],
  "4": [
    "Psicología, Salud Mental y Bienestar Social",
  ],
  "5": [
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "6": [
    "Agua, Medio Ambiente y Salud Pública Ambiental",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
  "7": [
    "Materiales, Manufactura e Infraestructura",
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "8": [
    "Inteligencia Artificial y Analítica de Datos",
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "9": [
    "Inteligencia Artificial y Analítica de Datos",
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
  ],
  "10": [
    "Psicología, Salud Mental y Bienestar Social",
    "Gestión Empresarial, Economía y Desarrollo Productivo",
  ],
  "11": [
    "Materiales, Manufactura e Infraestructura",
    "Movilidad Sostenible y Ciudades Inteligentes",
  ],
  "12": [
    "Ingeniería Biomédica y Tecnologías para la Salud",
    "Materiales, Manufactura e Infraestructura",
  ],
  "13": [
    "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
    "Movilidad Sostenible y Ciudades Inteligentes",
  ],
  "14": [
    "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
    "Agricultura Inteligente, Agroecología e Inocuidad",
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "15": [
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "16": [
    "Inteligencia Artificial y Analítica de Datos",
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "17": [
    "Psicología, Salud Mental y Bienestar Social",
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
  ],
  "18": [
    "Materiales, Manufactura e Infraestructura",
  ],
  "19": [
    "Inteligencia Artificial y Analítica de Datos",
    "Movilidad Sostenible y Ciudades Inteligentes",
    "Gestión Empresarial, Economía y Desarrollo Productivo",
  ],
  "20": [
    "Materiales, Manufactura e Infraestructura",
    "Ingeniería Biomédica y Tecnologías para la Salud",
  ],
  "21": [
    "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
  ],
  "22": [
    "Gestión Empresarial, Economía y Desarrollo Productivo",
  ],
  "23": [
    "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
  "24": [
    "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
  ],
  "25": [
    "Gestión Empresarial, Economía y Desarrollo Productivo",
    "Agua, Medio Ambiente y Salud Pública Ambiental",
  ],
  "26": [
    "Ciberseguridad y Protección de Datos",
  ],
  "27": [
    "Agua, Medio Ambiente y Salud Pública Ambiental",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
  "28": [
    "Movilidad Sostenible y Ciudades Inteligentes",
  ],
  "29": [
    "Agua, Medio Ambiente y Salud Pública Ambiental",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
  "30": [
    "Ingeniería Biomédica y Tecnologías para la Salud",
    "Inteligencia Artificial y Analítica de Datos",
  ],
  "31": [
    "Ingeniería Biomédica y Tecnologías para la Salud",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
  "32": [
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
    "Psicología, Salud Mental y Bienestar Social",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
  "33": [
    "Gestión Empresarial, Economía y Desarrollo Productivo",
  ],
  "34": [
    "Ingeniería Biomédica y Tecnologías para la Salud",
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
  ],
  "35": [
    "Sensores, IoT, Telecomunicaciones y Sistemas Embebidos",
    "Educación Inclusiva, Accesibilidad y Tecnologías Educativas",
    "Agricultura Inteligente, Agroecología e Inocuidad",
  ],
};


const researchers = rawResearchers.map((item) => {
  const tecnologias = splitTopics(item.key_topics);
  const aplicaciones = inferApplications(`${item.research_interest} ${item.key_topics}`);
  const keyInterest = KEY_INTEREST_BY_ID[item.id] || [];
  const ods = inferOds(item);

  return {
    ...item,
    ods,
    ods_label: ods.map((s) => `ODS ${s}`),
    ods_inferidos: item.sdg.includes("No especificado"),
    key_interest: keyInterest,
    tecnologias,
    tecnologias_resumidas: tecnologias.slice(0, 4),
    perfil_resumido: summarize(item.research_interest),
    area_estrategica: keyInterest[0] || "Capacidad científica",
    aplicaciones_hospitalarias: aplicaciones.length
      ? aplicaciones
      : ["Exploración de colaboración interdisciplinaria"],
  };
});


const odsOptions = [
  "Todas",
  ...new Set(researchers.flatMap((item) => item.ods_label || [])),
].sort((a, b) => {
  if (a === "Todas") return -1;
  if (b === "Todas") return 1;
  if (a === "No especificado") return 1;
  if (b === "No especificado") return -1;
  return a.localeCompare(b, "es", { numeric: true });
});

function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all ${
        active
          ? "border-transparent text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50"
      }`}
      style={active ? { backgroundColor: COLORS.primary } : {}}
    >
      {children}
    </button>
  );
}

function Header({ onExplore }) {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] text-white" style={{ backgroundColor: COLORS.primary }}>
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-6">
       <div className="mb-16">
  <div className="flex w-full items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm">
     <img
              src="/logo-ups.png"
              alt="Universidad Politécnica Salesiana"
              className="h-14 w-auto object-contain"
            />
            <div>


            </div>
          </div>
        </div>

	  <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Capacidades de investigación e innovación aplicadas al sector salud
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
              Explore capacidades científicas, tecnologías y líneas de investigación aplicables al sector salud.
            </p>

            <button
              onClick={onExplore}
              className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5"
              style={{ color: COLORS.primary }}
            >
              Explorar perfiles
            </button>
          </div>

          <div className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.muted }}
>
              KPIs de pertinencia y aplicabilidad
            </p>

            <div className="mt-6 grid w-full grid-cols-3 gap-4">
              <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: COLORS.light }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.text }}>35</p>
                <p className="mt-2 text-xs leading-5" style={{ color: COLORS.muted }}>Perfiles científicos</p>
              </div>

              <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: COLORS.light }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.text }}>17</p>
                <p className="mt-2 text-xs leading-5" style={{ color: COLORS.muted }}>ODS vinculados</p>
              </div>

              <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: COLORS.light }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.text }}>84</p>
                <p className="mt-2 text-xs leading-5" style={{ color: COLORS.muted }}>Tecnologías</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogCard({ item, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex gap-5 p-5">
        <img src={item.url_photo} alt={item.nombre} className="h-24 w-24 rounded-2xl object-cover" onError={(e) => { e.currentTarget.src = "https://placehold.co/320x320/DCE8F5/003B82?text=UPS"; }} />
        <div className="min-w-0 flex-1">
          <p className="line-clamp-1 text-xs font-medium uppercase tracking-wide" style={{ color: COLORS.primary }}>{item.area_estrategica}</p>
          <h3 className="mt-1 text-xl font-semibold" style={{ color: COLORS.text }}>{item.nombre}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6" style={{ color: COLORS.muted }}>{item.perfil_resumido}</p>
        </div>
      </div>
      <div className="border-t border-slate-100 px-5 py-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {item.aplicaciones_hospitalarias.slice(0, 2).map((app) => <span key={app} className="rounded-full px-3 py-1 text-xs" style={{ backgroundColor: COLORS.light, color: COLORS.primary }}>{app}</span>)}
        </div>
<div className="flex flex-wrap gap-2">
  {item.key_interest.slice(0, 2).map((interest) => (
    <span
      key={interest}
      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
    >
      {interest}
    </span>
  ))}
</div>

        <button onClick={() => onOpen(item)} className="mt-5 w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white transition group-hover:shadow-md" style={{ backgroundColor: COLORS.primary }}>Ver perfil</button>
      </div>
    </article>
  );
}

function Profile({ selected, onBack, onCollaborate }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"><ArrowLeft size={16} /> Volver al catálogo</button>
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <img src={selected.url_photo} alt={selected.nombre} className="h-72 w-full rounded-3xl object-cover" onError={(e) => { e.currentTarget.src = "https://placehold.co/640x640/DCE8F5/003B82?text=UPS"; }} />
          <h2 className="mt-6 text-3xl font-semibold" style={{ color: COLORS.text }}>{selected.nombre}</h2>
          <p className="mt-2" style={{ color: COLORS.primary }}>{selected.area_estrategica}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {selected.ods_label.map((ods) => (
  <span
    key={ods}
    className="rounded-full px-3 py-1 text-sm"
    style={{ backgroundColor: COLORS.light, color: COLORS.primary }}
  >
    {ods}{selected.ods_inferidos ? " inferido" : ""}
  </span>
))}

          </div>
          <a href={selected.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.primary }}>Ver perfil PURE <ExternalLink size={16} /></a>
        </aside>

        <main className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.muted }}>Perfil resumido</p>
          <p className="mt-3 text-lg leading-8" style={{ color: COLORS.text }}>{selected.perfil_resumido}</p>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.muted }}>Potencial de aplicación hospitalaria</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {selected.aplicaciones_hospitalarias.map((app) => <div key={app} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{app}</div>)}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.muted }}>Research interest completo</p>
            <p className="mt-3 leading-8" style={{ color: COLORS.muted }}>{selected.research_interest}</p>
          </div>

<div className="mt-8">
  <p
    className="text-sm font-semibold uppercase tracking-wide"
    style={{ color: COLORS.muted }}
  >
    Temas específicos de investigación
  </p>

  <div className="mt-3 flex flex-wrap gap-2">
    {(selected.tecnologias || []).map((topic) => (
      <span
        key={topic}
        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
      >
        {topic}
      </span>
    ))}
  </div>
</div>


          <button onClick={() => onCollaborate(selected)} className="mt-10 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm" style={{ backgroundColor: COLORS.primary }}><HeartHandshake size={18} /> Registrar interés de colaboración</button>
        </main>
      </div>
    </section>
  );
}

function InterestModal({ researcher, onClose }) {
  if (!researcher) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm" style={{ color: COLORS.muted }}>Registro de interés de colaboración</p>
            <h3 className="mt-1 text-2xl font-semibold" style={{ color: COLORS.text }}>{researcher.nombre}</h3>
          </div>
          <button onClick={onClose} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">Cerrar</button>
        </div>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300" placeholder="Nombre de la persona interesada" />
          <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300" placeholder="Cargo o área hospitalaria" />
          <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300" placeholder="Correo" type="email" />
          <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" value={researcher.nombre} readOnly />
          <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 md:col-span-2"><option>Nivel de interés</option><option>Exploratorio</option><option>Alto</option><option>Prioritario</option></select>
          <textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 md:col-span-2" placeholder="Comentario o necesidad detectada" />
          <button type="button" className="rounded-2xl px-5 py-3 text-sm font-semibold text-white md:col-span-2" style={{ backgroundColor: COLORS.primary }}>Enviar registro</button>
        </form>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [selectedOds, setSelectedOds] = useState("Todas");
  const [selectedKeyInterest, setSelectedKeyInterest] = useState("Todas");
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  const [interestResearcher, setInterestResearcher] = useState(null);
  const [query, setQuery] = useState("");

const availableKeyInterests = useMemo(() => {
  const base =
    selectedOds === "Todas"
      ? researchers
      : researchers.filter((item) => item.ods_label.includes(selectedOds));

  return [
    "Todas",
    ...KEY_INTEREST_OPTIONS.filter((interest) =>
      base.some((item) => item.key_interest.includes(interest))
    ),
  ];
}, [selectedOds]);


const filteredResearchers = useMemo(() => {
  return researchers.filter((item) => {
    const content = normalizeText(
      `${item.nombre} ${item.area_estrategica} ${item.key_interest.join(" ")} ${item.key_topics} ${item.research_interest}`
    );

    const matchOds =
      selectedOds === "Todas" || item.ods_label.includes(selectedOds);

    const matchKeyInterest =
      selectedKeyInterest === "Todas" ||
      item.key_interest.includes(selectedKeyInterest);

    const matchSearch = content.includes(normalizeText(query));

    return matchOds && matchKeyInterest && matchSearch;
  });
}, [selectedOds, selectedKeyInterest, query]);


const handleOds = (ods) => {
  setSelectedOds(ods);
  setSelectedKeyInterest("Todas");
};

  if (selectedResearcher) {
    return <main style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}><Profile selected={selectedResearcher} onBack={() => setSelectedResearcher(null)} onCollaborate={setInterestResearcher} /><InterestModal researcher={interestResearcher} onClose={() => setInterestResearcher(null)} /></main>;
  }

  return (
    <main style={{ backgroundColor: COLORS.bg, minHeight: "100vh" }}>
      <Header onExplore={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })} />
      <section id="catalogo" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.primary }}><Filter size={16} /> Catálogo de capacidades</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight" style={{ color: COLORS.text }}>Investigadores pertinentes para colaboración en salud</h2>
            <p className="mt-3 max-w-3xl" style={{ color: COLORS.muted }}>Filtre por ODS, tecnología o potencial de aplicación hospitalaria para identificar perfiles de colaboración.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar investigador, tecnología o área" className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-300" />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 text-sm font-semibold text-slate-700">ODS</p>

          <div className="flex flex-wrap gap-2">
  {odsOptions.map((ods) => (
    <Chip
      key={ods}
      active={selectedOds === ods}
      onClick={() => handleOds(ods)}
    >
      {ods}
    </Chip>
  ))}
</div>
<p className="mb-3 mt-6 text-sm font-semibold text-slate-700">Áreas estratégicas</p>
<div className="flex max-h-40 flex-wrap gap-2 overflow-auto pr-2">
  {availableKeyInterests.map((interest) => (
    <Chip
      key={interest}
      active={selectedKeyInterest === interest}
      onClick={() => setSelectedKeyInterest(interest)}
    >
      {interest}
    </Chip>
  ))}
</div>
        </div>

        <div className="mt-6 text-sm" style={{ color: COLORS.muted }}>{filteredResearchers.length} perfiles encontrados</div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredResearchers.map((item) => <CatalogCard key={item.id} item={item} onOpen={setSelectedResearcher} />)}</div>
        {filteredResearchers.length === 0 && <div className="mt-8 rounded-3xl bg-white p-10 text-center ring-1 ring-slate-200"><p className="text-lg font-medium" style={{ color: COLORS.text }}>No se encontraron perfiles con esos filtros.</p><p className="mt-2" style={{ color: COLORS.muted }}>Pruebe con otro ODS, tecnología o palabra clave.</p></div>}
      </section>
<footer className="mx-auto max-w-7xl px-6 pb-10">
  <div
    className="rounded-3xl px-6 py-8 text-white"
    style={{ backgroundColor: COLORS.dark }}
  >
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-2xl font-semibold">
          Selección de investigadores prioritarios
        </h3>

        <p className="mt-2 text-blue-100">
          Marque los perfiles con mayor potencial de colaboración para el
          Hospital José Carrasco Arteaga.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {researchers.slice(0, 6).map((item) => (
          <label
            key={item.id}
            className="flex items-start gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"
          >
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-white/30"
            />

            <div>
              <p className="font-semibold text-white">
                {item.nombre}
              </p>

              <p className="mt-1 text-sm text-blue-100">
                {item.area_estrategica}
              </p>
            </div>
          </label>
        ))}
      </div>

      <button
        className="w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold"
        style={{ color: COLORS.primary }}
      >
        Registrar selección
      </button>
    </div>
  </div>
</footer>
    </main>
  );
}
