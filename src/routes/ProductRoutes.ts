import { Router } from 'express';
import { getLowStock, addProduct, updateProduct_, deleteProduct_, disableProduct_, enableProduct_} from '../controllers/ProductController';

const router = Router();

router.get('/low-stock', getLowStock);
router.post('/', addProduct);
router.put('/product-disable', disableProduct_);
router.put('/enable-product', enableProduct_);
router.put('/:code', updateProduct_);
router.delete('/:code', deleteProduct_);

export default router;
