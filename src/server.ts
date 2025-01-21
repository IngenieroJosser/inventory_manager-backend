import express from 'express';
import cors from 'cors'; // Importar cors
import connectDatabase from './shared/database';
import config from './shared/config';
import userRoutes from './routes/UserRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swaggerConfig';

const app = express();
const PORT = config.port;

// Middleware para manejar JSON
app.use(express.json());

// Configuración de CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Dominio del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true, // Si necesitas enviar cookies o encabezados como Authorization
  })
);

// Rutas de usuarios
app.use('/api/users', userRoutes);

app.use('/api-docs-inventory_manager', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Conectar la base de datos y arrancar el servidor
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`🌐 Server running on http://localhost:${PORT}`);
      console.log(`📻 Documentación disponible en http://localhost:${PORT}/api-docs-inventory_manager`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
