import express from 'express';
import cors from 'cors'; // Importar cors
import connectDatabase from './shared/database';
import config from './shared/config';
import userRoutes from './routes/UserRoutes';

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

// Conectar la base de datos y arrancar el servidor
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`🌐 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
