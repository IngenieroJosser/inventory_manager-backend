import express from 'express';
import cors from 'cors'; // Importar cors
import connectDatabase from './shared/database';
import config from './shared/config';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swaggerConfig';
import userRoutes from './routes/UserRoutes';
import orderRoutes from './routes/OrderRoutes';
import productRoutes from './routes/ProductRoutes';

const app = express();
const PORT = config.port;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173', // Dominio del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true, // Si necesitas enviar cookies o encabezados como Authorization
  })
);

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/product', productRoutes);

app.use('/api-docs-inventory_manager', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
