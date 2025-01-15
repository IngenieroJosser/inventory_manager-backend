import { Router } from 'express';
import * as UserController from '../controllers/UserController';

const router = Router();

// router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/login', UserController.loginUser);
router.post('/register', UserController.registerUser);

export default router;
