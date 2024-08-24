🌟 Cuarto proyecto del bootcamp de programación fullstack SoyHenry - orientación frontend.

Página web con estructura fullstack. Se encuentra comprendida por un backend preexistente y un frontend desarrollado posteirormente. El desafío es armar la Single Page Application de un E-commerce en funcion del codigo del backend puesto a disposición.   

🛠️ Tecnologías utilizadas:
- Javascript
- CSS
- Express
- Node
- Jest
- Ajax
- Base de datos (MongoDB ATLAS, MongoDB COMPASS, mongoose). 

🎯 Objetivos:
- Diseñar una aplicación de películas, dentro de la cual se puedan consultar, agregar o eliminar películas.
- Manejo de repositorios con Git y Github.
- Manejo de protocolos de comunicación.
- Manejo de bases de datos. 

🚀 Desarrollo:

⭐ HomeMovies ⭐

![image](https://github.com/user-attachments/assets/684ae0df-c16e-4c80-a222-f441d9e1f62b)

Se compone por:

- Sección “Index”, la cual ejecuta el catálogo de películas disponibles.

![image](https://github.com/user-attachments/assets/bbc95d90-f996-4943-9115-3ab7382e1f7c)

  Al hacer click en la portada de la película se podrán visualizar detalles de la misma, tales como director, género, duración, calificación, así como el video de su trailer. Con el botón cerrar puede esconder la   información y visualizar nuevamente la portada de la película.

  ![image](https://github.com/user-attachments/assets/7460c404-3c90-4198-8ced-3ecd4cf22176)

- Sección “Sobre la web”, la cual provee información relativa a la aplicación

![image](https://github.com/user-attachments/assets/d2001b56-cedb-4580-9c16-5b288e5466c7)
  
- Sección “Otras webs”, la cual detalla de qué medios saca la información de su página, así como tambien sugiere la consulta de otras webs vinculadas al mundo del cine:
  
   ![image](https://github.com/user-attachments/assets/f0f45d00-a8b5-4988-b844-1bd1063e3163)

- Finalmente, cuenta con la sección "Agregar películas", la cual permite al usuario agregar nuevas películas. Las mismas se guardan en una base de datos para lograr su persistencia en la página incluso después de   cerrarla.

  Para poder agregar la película será indispensable que rellene todos los campos del formulario.
  
  ![image](https://github.com/user-attachments/assets/4f432e3f-c291-4e7f-8a1c-1b56847d1dbb)
  

  




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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
