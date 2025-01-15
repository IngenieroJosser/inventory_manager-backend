import dotenv from 'dotenv';
dotenv.config();  // Cargar las variables de entorno desde el archivo .env

import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import productRoutes from './routes/ProductRoutes';
import orderRoutes from './routes/OrderRoutes';
import userRoutes from './routes/UserRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
