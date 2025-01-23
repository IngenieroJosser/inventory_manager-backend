"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/orders/:
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: La cantidad del producto en el pedido.
 *                 example: 10
 *               supplier:
 *                 type: string
 *                 description: El nombre del proveedor del producto.
 *                 example: "Proveedor Inc."
 *               orderDate:
 *                 type: string
 *                 format: date-time
 *                 description: La fecha en la que se realizó el pedido.
 *                 example: "2025-01-22T15:00:00Z"
 *               status:
 *                 type: string
 *                 enum:
 *                   - Pending
 *                   - Completed
 *                 description: El estado actual del pedido, puede ser `Pending` (Pendiente) o `Completed` (Completado).
 *                 example: "Pending"
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productId:
 *                   type: string
 *                   description: El ID del producto generado automáticamente (opcional).
 *                   example: "60f5c07d4d7a2c001c4b5b2e"
 *                 quantity:
 *                   type: integer
 *                   example: 10
 *                 supplier:
 *                   type: string
 *                   example: "Proveedor Inc."
 *                 orderDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-22T15:00:00Z"
 *                 status:
 *                   type: string
 *                   example: "Pending"
 *       400:
 *         description: Error en la solicitud, faltan o son incorrectos algunos datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Product ID es requerido"
 *       500:
 *         description: Error interno del servidor, algo salió mal al procesar la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
router.post('/', OrderController_1.createOrder);
router.get('/', OrderController_1.getOrders);
router.get('/:id', OrderController_1.getOrderById);
router.put('/:id', OrderController_1.updateOrder);
router.delete('/:id', OrderController_1.deleteOrder);
exports.default = router;
