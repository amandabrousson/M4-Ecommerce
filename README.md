🌟 Cuarto proyecto del bootcamp de programación fullstack SoyHenry - orientación frontend.

Página web con estructura fullstack. Se encuentra comprendida por un backend preexistente y un frontend desarrollado posteirormente. El desafío es armar la Single Page Application de un E-commerce en funcion del codigo del backend puesto a disposición.   

🛠️ Tecnologías utilizadas:
- NextJs
- Tailwind
- Microfrontend

🎯 Objetivos:
- Diseñar una aplicación de E-commerce, dentro de la cual se puedan consultar productos según sus categorías, agregarlos al carrito (una vez autenticados) y comprarlos. Posteriormente poder visualizar los datos de compra en un historial de compras del usuario. 
- Manejo de repositorios con Git y Github.
- Manejo de protocolos de comunicación.
- Manejo de bases de datos. 

🚀 Desarrollo:

⭐ NextTech ⭐

![image](https://github.com/user-attachments/assets/1aa8e8d5-bcb6-4bcc-9a79-460f8d1c926d)

Se compone por:

- Sección “Home”, la cual ejecuta un producto de manera introductoria, teniendo a su lado un botón que redirige a la categoría a la cual pertenece el producto.

  ![image](https://github.com/user-attachments/assets/58ef3d74-07c1-4913-92aa-5e3bf8a3556f)

- Sección “Products”, la cual ejecuta información como novedades, así como información de compra.

![image](https://github.com/user-attachments/assets/86df244d-83b1-4098-bdfb-2a0d1671fbf5)

  asimismo, ejecuta un buscador, el cual busca a partir del término proporcionado:

  ![image](https://github.com/user-attachments/assets/ce8fede7-037f-4e6b-8705-47fe17834ef6)

  y por debajo del buscador se encuentran las categorías que contienen a los productos disponibles en la página:

![image](https://github.com/user-attachments/assets/03dd06a7-9f1a-4c7b-bfb7-c816442320e7)

  
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
