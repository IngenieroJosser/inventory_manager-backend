import { Router } from 'express';
import * as OrderController from '../controllers/OrderController';

const router = Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.get('/:id', OrderController.getOrderById);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

export default router;
