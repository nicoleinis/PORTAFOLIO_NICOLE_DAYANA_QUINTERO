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
- Tarjetas de proyectos sin imágenes: institución Campuslands, descripción, tecnologías y hover discreto. Sin enlaces privados ni botones sin acción.
- Sin fuentes, scripts, rastreadores ni bibliotecas de terceros.

## Ejecución local

Clona el repositorio y abre `index.html` directamente en el navegador:

```sh
git clone https://github.com/nicoleinis/PORTAFOLIO_NICOLE_DAYANA_QUINTERO.git
cd PORTAFOLIO_NICOLE_DAYANA_QUINTERO
```

También puedes usar un servidor estático, por ejemplo la extensión Live Server de tu editor. No requiere instalación de dependencias ni compilación.

## Personalización pendiente

No se inventaron datos de contacto ni enlaces de proyectos. En `index.html`:

- Reemplaza los textos «Email / Pendiente de agregar» y «LinkedIn / Pendiente de agregar» por enlaces reales.
- Los repositorios de proyectos son privados. Cada tarjeta contiene un comentario HTML que indica dónde añadir un contenedor `.project-links` con enlaces públicos reales en el futuro. Los enlaces pueden reutilizar `.button` y `.secondary`. No añadas enlaces vacíos ni URLs privadas.
- No se muestran imágenes en las secciones. Las ilustraciones anteriores permanecen archivadas en `assets/images/`, sin cargarse en la página; el favicon existente se conserva.
- El enlace al perfil de GitHub corresponde al propietario del repositorio.

## Git Flow y publicación

`main` contiene la versión de producción. El trabajo se integra en `develop` desde ramas `feature/*`, con Conventional Commits y merges explícitos. Cada etapa se sube a GitHub antes de continuar.

GitHub Pages sirve la raíz de `main`. Todas las rutas internas son relativas y `.nojekyll` permite servir el sitio estático directamente. Los siguientes pushes a `main` actualizan la publicación.

## Revisión

Se revisaron destinos internos, archivos referenciados, estructura semántica, tres tarjetas sin imágenes ni enlaces inactivos y nueve tecnologías. La sintaxis JavaScript y los eventos del menú se comprobaron mediante simulaciones de DOM (abrir, Escape, navegación, cambio de viewport y clic exterior). La comprobación HTTP de producción incluye HTML, CSS y JavaScript.

La revisión visual en navegador, la interacción real por teclado, el responsive y la consola requieren una sesión de navegador disponible. No se consideran comprobados solo por revisar el código.

## Adaptación responsive

Las tarjetas de proyectos usan una cuadrícula automática con ancho mínimo de 300 px limitado al espacio disponible. Las tecnologías pasan de tres a dos columnas y a una en pantallas muy estrechas. El menú cambia a navegación móvil a 760 px; sus enlaces mantienen áreas táctiles de al menos 44 px y el panel permite desplazamiento vertical en pantallas bajas. Las decoraciones del Hero quedan contenidas en su columna y los botones se apilan cuando falta espacio.

## Autor

Nicole · Campuslands
