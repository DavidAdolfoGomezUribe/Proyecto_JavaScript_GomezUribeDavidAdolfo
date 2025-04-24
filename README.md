# Requerimientos

GameCampus está desarrollando un ambicioso videojuego de fantasía épica. Para ello, han solicitado la creación de una plataforma avanzada de generación de personajes que permita a los usuarios filtrar a sus héroes basado en las opciones que este escoja (Dicho dataset estará basado en el mundo de Dungeons & Dragons).

El objetivo de este proyecto es construir una aplicación web interactiva y visualmente impresionante que permita a los usuarios escoger la raza, clase, género, equipo, armas, habilidades especiales y estadísticas personalizadas.

## Especificaciones del Proyecto

### Requisitos Funcionales

Página de Inicio (Landing Page)
Explicación de la plataforma con una introducción visual.
Filtración de Personajes
Los usuarios podrán filtrar los personaje desde cero eligiendo:
Nombre del personaje (personalizado).
Raza (obtenida de la API de razas de fantasía).
Clase (obtenida de la API de clases de fantasía).
Género (Masculino, Femenino, Otros).
Armadura y Armas (obtenidas de una API o creadas por el usuario).
Estadísticas Personalizadas (fuerza, destreza, inteligencia, etc.).
Habilidades Especiales (poderes, magias y habilidades obtenidas de la API).
Accesorios (cascos, anillos, medallas, etc.).
El personaje que al usuario le quede gustando tendrá la función de guardar para ser revisado luego en otra parte de la página.
Vista de Lista de Personajes
Se muestra una lista de todos los personajes filtrados por el usuario.
Cada personaje tendrá una opción de "Ver detalles".


### Requisitos No Funcionales
Compatibilidad:
La aplicación debe ser funcional en navegadores modernos (Chrome, Firefox, Edge).
Diseño Responsivo:
La aplicación debe ser totalmente funcional en dispositivos móviles, tablets y desktop.

API Pública Sugeridas
D&D 5e API - Información completa de razas, clases y habilidades.
Opción Avanzada: Usar MockAPI o JSONPlaceholder para crear una base de datos ficticia de armas, habilidades y razas.

Estructura de Entrega
Carpeta del Proyecto:
/src: Código fuente principal.
/assets: Imágenes, íconos y recursos gráficos.
/styles: Hojas de estilo CSS o SASS.
Repositorio GitHub:
Proyecto entregado en un repositorio público.
Commit regulares para evidenciar el progreso.
README.md:
Descripción del proyecto y cómo ejecutarlo.
Instrucciones para la configuración de la API (Si aplica).




# Next Readme

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
