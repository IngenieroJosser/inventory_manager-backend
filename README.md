
# API en Express.js con TypeScript y Mongoose

Este es un proyecto de API construido con **Express.js**, **TypeScript** y **Mongoose** para interactuar con una base de datos **MongoDB**. Esta API está diseñada para manejar operaciones CRUD y puede ser expandida para ser utilizada en diversas aplicaciones.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (Versión recomendada: 16 o superior)
- [MongoDB](https://www.mongodb.com/) o una instancia de MongoDB en la nube (por ejemplo, [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instala las dependencias:**

   Usa `npm` o `yarn` para instalar las dependencias necesarias.

   ```bash
   npm install
   ```

   O si prefieres usar `yarn`:

   ```bash
   yarn install
   ```

## Configuración de las variables de entorno

Copia el archivo `.env.example` a un nuevo archivo `.env`:

```bash
cp .env.example .env
```

Luego, abre el archivo `.env` y configura las siguientes variables:

- `MONGO_URI`: La URI de conexión a tu base de datos MongoDB. Ejemplo para MongoDB local:
  
  ```bash
  MONGO_URI=mongodb://localhost:27017/tu-base-de-datos
  ```

- `PORT`: El puerto donde la API escuchará (puedes dejarlo como `3000` por defecto o cambiarlo según tu preferencia).

  ```bash
  PORT=3000
  ```

## Dependencias

Estas son las dependencias necesarias para el funcionamiento del proyecto:

- **express**: Framework web para Node.js.
- **mongoose**: ORM de MongoDB para Node.js.
- **typescript**: Para usar TypeScript en el proyecto.
- **ts-node**: Herramienta para ejecutar archivos TypeScript.
- **dotenv**: Para cargar variables de entorno desde un archivo `.env`.
- **nodemon**: Para reiniciar automáticamente el servidor durante el desarrollo.
- **@types/express**: Tipos de TypeScript para Express.
- **@types/mongoose**: Tipos de TypeScript para Mongoose.

Puedes instalar estas dependencias utilizando:

```bash
npm install express mongoose dotenv
npm install --save-dev typescript ts-node @types/express @types/mongoose nodemon
```

## Uso

Para ejecutar la API en modo desarrollo, usa el siguiente comando:

```bash
npm run dev
```

Este comando ejecutará el servidor en modo de desarrollo y, normalmente, se abrirá en `http://localhost:3000`.

Para construir y ejecutar la API en modo producción, utiliza:

```bash
npm run build
npm run start
```

## Endpoints

Aquí hay algunos ejemplos de los endpoints que puedes usar en la API:

### 1. **GET** `/api/users`

Obtiene todos los usuarios de la base de datos.

```http
GET /api/users
```

### 2. **POST** `/api/users`

Crea un nuevo usuario en la base de datos.

```http
POST /api/users
```

**Body:**

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "contraseña-segura"
}
```

### 3. **GET** `/api/users/:id`

Obtiene un usuario por su ID.

```http
GET /api/users/:id
```

### 4. **PUT** `/api/users/:id`

Actualiza un usuario existente.

```http
PUT /api/users/:id
```

**Body:**

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "nueva-contraseña-segura"
}
```

### 5. **DELETE** `/api/users/:id`

Elimina un usuario por su ID.

```http
DELETE /api/users/:id
```

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:

```
/src
  /controllers      # Controladores para manejar las solicitudes HTTP
  /models           # Modelos de Mongoose
  /routes           # Definición de rutas de la API
  /middleware       # Middleware (validaciones, autenticación, etc.)
  config.ts         # Configuración de la base de datos y otras configuraciones
  server.ts         # Configuración y arranque del servidor
```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b mi-feature`).
3. Realiza tus cambios y confirma (`git commit -am 'Agregué una nueva característica'`).
4. Empuja tu rama (`git push origin mi-feature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta, no dudes en contactarme.

Correo electrónico: developerjosser@gmail.com
