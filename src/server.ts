import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import productRoutes from './routes/ProductRoutes';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON.

app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// Ruta principal
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, Express with TypeScript!");
// });

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
