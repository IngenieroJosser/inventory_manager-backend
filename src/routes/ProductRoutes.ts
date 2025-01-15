import { Router } from 'express';
import { getLowStock, addProduct } from '../controllers/ProductController';

const router = Router();

router.get('/low-stock', getLowStock);
router.post('/', addProduct);

export default router;
