import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Especificación OpenAPI
    info: {
      title: 'API de Gestión de Inventario',
      version: '1.0.0',
      description: 'Documentación de API para un sistema de gestión de inventario',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
