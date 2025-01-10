# Mi Red Social

Mi Red Social es una aplicación web desarrollada con Vue 3, TailwindCSS, y Vite. Este proyecto permite a los usuarios crear un perfil, iniciar sesión, compartir publicaciones, y realizar interacciones como likes y comentarios. Además, cada usuario puede gestionar sus publicaciones desde su perfil (editar o eliminar).

## Características principales

- **Gestión de perfiles:**
  - Registro e inicio de sesión.
  - Personalización del perfil.
- **Publicaciones:**
  - Crear publicaciones con texto e imágenes.
  - Visualizar publicaciones propias y de otros usuarios.
  - Editar y eliminar publicaciones desde el perfil del usuario.
- **Interacciones sociales:**
  - Dar "Me gusta" a publicaciones.
  - Comentar en publicaciones.

## Tecnologías utilizadas

- **Frontend:**

  - [Vue 3](https://vuejs.org/): Framework JavaScript progresivo.
  - [Vue Router](https://router.vuejs.org/): Manejo de rutas dentro de la aplicación.
  - [TailwindCSS](https://tailwindcss.com/): Framework CSS para diseño y estilos.
  - [Flowbite](https://flowbite.com/) y [Flowbite Vue](https://flowbite-vue.com/): Componentes preconstruidos integrados con TailwindCSS.

- **Backend y almacenamiento:**

  - [Firebase](https://firebase.google.com/): Autenticación y almacenamiento en tiempo real.

- **Herramientas de desarrollo:**
  - [Vite](https://vitejs.dev/): Herramienta rápida de construcción.
  - [PostCSS](https://postcss.org/): Transformaciones CSS con plugins como Autoprefixer.

## Instalación y configuración

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/MiguelSJimenezV/SocialNetworkProject.git
   cd mi-red-social
   ```

2. **Instalar dependencias:**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

   ```bash
   npm install
   ```

3. **Configurar Firebase:**

   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Habilita la autenticación y el almacenamiento en Firestore.
   - Descarga el archivo `firebaseConfig` y colócalo en el proyecto (por ejemplo, en `src/firebase.js`).
   - Modifica el archivo para inicializar Firebase:
     ```javascript
     import { initializeApp } from "firebase/app";
     const firebaseConfig = {
       /* tu configuración */
     };
     const app = initializeApp(firebaseConfig);
     ```

4. **Ejecutar la aplicación en desarrollo:**

   ```bash
   npm run dev
   ```

5. **Construir la aplicación para producción:**

   ```bash
   npm run build
   ```

6. **Vista previa de producción:**
   ```bash
   npm run preview
   ```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas colaborar, por favor:

1. Realiza un fork del repositorio.
2. Crea una rama para tu feature/bugfix:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y realiza un commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Envía un pull request.

---

**Desarrollado por Miguel Jiménez**
