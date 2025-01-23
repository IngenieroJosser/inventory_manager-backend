import { Router } from 'express';
import { 
    getUsers, 
    createUser, 
    getUserById, 
    updateUser, 
    deleteUser,
    // logout
} from '../controllers/UserController'

const router = Router();


// router.post('/logout', logout);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Obtener la lista de usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                 error: "Error al obtener usuarios"
 */
router.post('/login', getUsers);

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
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
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: usuario123
 *                 role:
 *                   type: string
 *                   example: operator
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
router.post('/register', createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario en MongoDB
 *         schema:
 *           type: string
 *           example: "64fa1b2c1c4e4a2f8c7a5e3b"
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             example:
 *               _id: "64fa1b2c1c4e4a2f8c7a5e3b"
 *               username: "admin123"
 *               password: "$2b$10$uM/eo6RZrEkmH2DzW8GReO3FyJzpVnkOj2Zl2wRXC1LmXgH6DWzxy"
 *               role: "admin"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             example:
 *               error: "Unknown error"
 */
router.get('/:id', getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un usuario por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario en MongoDB
 *         schema:
 *           type: string
 *           example: "64fa1b2c1c4e4a2f8c7a5e3b"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             username: "nuevoUsuario123"
 *             password: "nuevaContraseña123"
 *             role: "operator"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               _id: "64fa1b2c1c4e4a2f8c7a5e3b"
 *               username: "nuevoUsuario123"
 *               password: "$2b$10$uM/eo6RZrEkmH2DzW8GReO3FyJzpVnkOj2Zl2wRXC1LmXgH6DWzxy"
 *               role: "operator"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             example:
 *               error: "User not found"
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             example:
 *               error: "Invalid input data"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             example:
 *               error: "Unknown error"
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por su ID
 *     description: Elimina un usuario de la base de datos utilizando su ObjectID único.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ObjectID del usuario que se desea eliminar.
 *         schema:
 *           type: string
 *           example: 64c8f8e4bfcdfb1207c8a912
 *     responses:
 *       204:
 *         description: Usuario eliminado exitosamente. No se devuelve contenido.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/:id', deleteUser);

export default router;
