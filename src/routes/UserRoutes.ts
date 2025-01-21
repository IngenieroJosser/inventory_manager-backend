import { Router } from 'express';
import * as UserController from '../controllers/UserController';

const router = Router();

// Rutas
router.get('/', UserController.getUsers);
router.post('/login', UserController.getUsers);
router.post('/register', UserController.createUser);

router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
