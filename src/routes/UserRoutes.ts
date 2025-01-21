import { Router } from 'express';
import * as UserController from '../controllers/UserController';

const router = Router();

// Rutas
router.get('/', UserController.getUsers);
router.post('/login', UserController.getUsers);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de usuario único
 *           example: admin123
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *           example: "123456"
 *         confirmPassword:
 *           type: string
 *           description: Confirmación de la contraseña
 *           example: "123456"
 *         role:
 *           type: string
 *           description: Rol del usuario
 *           enum:
 *             - admin
 *             - operator
 *           example: admin
 *       required:
 *         - username
 *         - password
 *         - confirmPassword
 *         - role
 * 
 * /register:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre único del usuario
 *                 example: usuario123
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: "123456"
 *               confirmPassword:
 *                 type: string
 *                 description: Confirmación de la contraseña
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 description: Rol del usuario
 *                 enum:
 *                   - admin
 *                   - operator
 *                 example: operator
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Password is required"
 */
router.post('/register', UserController.createUser);

router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
