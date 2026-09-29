# Portfolio personal de Nicole

One page de Nicole, Desarrolladora de Software en Formación en Campuslands. Presenta su perfil, tecnologías y tres proyectos para conectar con reclutadores y oportunidades de aprendizaje.

## Sitio web

[Ver portafolio](https://nicoleinis.github.io/PORTAFOLIO_NICOLE_DAYANA_QUINTERO/)

## Objetivo

Mostrar el proceso de formación de Nicole con una presentación profesional, accesible y adaptable a móvil, tablet, laptop y escritorio.

## Tecnologías

Implementado exclusivamente con HTML5, CSS3 y JavaScript puro, sin frameworks ni dependencias externas. Incluye Flexbox, CSS Grid y media queries.

El perfil presenta HTML5, CSS3, JavaScript, SQL, MySQL, Git, GitHub, JSON Server y TMDB API. Estas dos últimas tecnologías pertenecen a los proyectos presentados; este sitio estático no necesita claves API ni un servidor de datos.

## Estructura

```text
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── nicole-portfolio.webp
│       ├── favicon.svg
│       ├── batalla-cartas.svg
│       ├── cine-boletas.svg
│       └── base-datos.svg
├── .nojekyll
└── README.md
```

## Funcionalidades

- Navegación por secciones, scroll suave y sección activa.
- Menú móvil con estado accesible, cierre con Escape y manejo de foco.
- Hero, sobre mí, nueve tecnologías, tres proyectos y contacto.
- Contenido y navegación disponibles incluso sin JavaScript.
- Enlace para saltar al contenido, foco visible y respeto por movimiento reducido.
- Proyectos editoriales con numeración grande, composiciones alternadas, institución, descripción y tecnologías. Sin imágenes de proyectos, enlaces privados ni botones sin acción.
- Sin fuentes, scripts, rastreadores ni bibliotecas de terceros.

## Ejecución local

Clona el repositorio y abre `index.html` directamente en el navegador:

```sh
git clone https://github.com/nicoleinis/PORTAFOLIO_NICOLE_DAYANA_QUINTERO.git
cd PORTAFOLIO_NICOLE_DAYANA_QUINTERO
```

También puedes usar un servidor estático, por ejemplo la extensión Live Server de tu editor. No requiere instalación de dependencias ni compilación.

## Contacto y personalización

No se inventaron datos de contacto ni enlaces de proyectos. En `index.html`:

- Email: [nicolequintero200@gmail.com](mailto:nicolequintero200@gmail.com). LinkedIn: [nicoleinis](https://www.linkedin.com/in/nicoleinis/). GitHub: [nicoleinis](https://github.com/nicoleinis).
- Los repositorios de proyectos son privados. Cada tarjeta contiene un comentario HTML que indica dónde añadir un contenedor `.project-links` con enlaces públicos reales en el futuro. Los enlaces pueden reutilizar `.button` y `.secondary`. No añadas enlaces vacíos ni URLs privadas.
- Retrato personal en `assets/images/nicole-portfolio.webp`: 960 × 1200 px, aproximadamente 70 KB, proporción conservada y carga prioritaria. Las ilustraciones anteriores permanecen archivadas sin cargarse en la página.
- El enlace al perfil de GitHub corresponde al propietario del repositorio.

## Git Flow y publicación

`main` contiene la versión de producción. El trabajo se integra en `develop` desde ramas `feature/*`, con Conventional Commits y merges explícitos. Cada etapa se sube a GitHub antes de continuar.

GitHub Pages sirve la raíz de `main`. Todas las rutas internas son relativas y `.nojekyll` permite servir el sitio estático directamente. Los siguientes pushes a `main` actualizan la publicación.

## Revisión

Se revisaron destinos internos, archivos referenciados, estructura semántica, tres proyectos sin imágenes ni enlaces inactivos, un retrato con alt descriptivo y nueve tecnologías agrupadas. La sintaxis JavaScript y los eventos del menú se comprobaron mediante simulaciones de DOM (abrir, Escape, navegación, cambio de viewport y clic exterior). La comprobación HTTP de producción incluye HTML, CSS y JavaScript.

La revisión visual en navegador, la interacción real por teclado, el responsive y la consola requieren una sesión de navegador disponible. No se consideran comprobados solo por revisar el código.

## Identidad visual y responsive

Diseño editorial con carbón, blanco cálido y rosa empolvado. La tipografía combina la familia sans del sistema con Georgia en frases destacadas, sin descargas de fuentes externas. Hero asimétrico con retrato vertical, relato personal sobre fondo cálido, tecnologías agrupadas y proyectos alternados. El contacto cierra con enlaces tipográficos.

A 1050 px se reduce la separación y el texto personal pasa a una columna. A 760 px el Hero se apila, las tecnologías se muestran por grupos y los proyectos conservan número lateral. En móviles estrechos, los proyectos pasan a una sola columna. La imagen mantiene su proporción; las animaciones de entrada se desactivan con movimiento reducido.

Se verificaron contenidos originales, destinos internos, archivos, cantidad de proyectos, imagen y sintaxis JavaScript. La revisión visual y de consola requiere un navegador conectado, no disponible durante este rediseño.
## Autor

Nicole · Campuslands
