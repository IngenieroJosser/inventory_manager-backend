"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
const router = (0, express_1.Router)();
router.get('/low-stock', ProductController_1.getLowStock);
/**
 * @swagger
 * /api/product/:
 *   post:
 *     summary: Crea un nuevo producto.
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Código único del producto.
 *                 example: P12345
 *               name:
 *                 type: string
 *                 description: Nombre del producto.
 *                 example: Camiseta
 *               category:
 *                 type: string
 *                 description: Categoría del producto.
 *                 example: Ropa
 *               price:
 *                 type: number
 *                 description: Precio del producto.
 *                 example: 19.99
 *               variants:
 *                 type: array
 *                 description: Variantes del producto.
 *                 items:
 *                   type: object
 *                   properties:
 *                     size:
 *                       type: string
 *                       description: Tamaño de la variante.
 *                       example: M
 *                     color:
 *                       type: string
 *                       description: Color de la variante.
 *                       example: Azul
 *                     stock:
 *                       type: number
 *                       description: Cantidad en stock.
 *                       example: 50
 *               lowStockThreshold:
 *                 type: number
 *                 description: Umbral para considerar bajo stock.
 *                 example: 5
 *               description:
 *                 type: string
 *                 description: Descripción del producto.
 *                 example: Camiseta de algodón 100%.
 *               isActive:
 *                 type: boolean
 *                 description: Estado activo o inactivo del producto.
 *                 example: true
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID único del producto creado.
 *                   example: 64c9a02f2f4a2c001c8e4567
 *                 code:
 *                   type: string
 *                   description: Código único del producto.
 *                   example: P12345
 *                 name:
 *                   type: string
 *                   description: Nombre del producto.
 *                   example: Camiseta
 *                 category:
 *                   type: string
 *                   description: Categoría del producto.
 *                   example: Ropa
 *                 price:
 *                   type: number
 *                   description: Precio del producto.
 *                   example: 19.99
 *                 variants:
 *                   type: array
 *                   description: Variantes del producto.
 *                   items:
 *                     type: object
 *                     properties:
 *                       size:
 *                         type: string
 *                         description: Tamaño de la variante.
 *                         example: M
 *                       color:
 *                         type: string
 *                         description: Color de la variante.
 *                         example: Azul
 *                       stock:
 *                         type: number
 *                         description: Cantidad en stock.
 *                         example: 50
 *                 lowStockThreshold:
 *                   type: number
 *                   description: Umbral para considerar bajo stock.
 *                   example: 5
 *                 description:
 *                   type: string
 *                   description: Descripción del producto.
 *                   example: Camiseta de algodón 100%.
 *                 isActive:
 *                   type: boolean
 *                   description: Estado activo o inactivo del producto.
 *                   example: true
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/', ProductController_1.addProduct);
router.get('/', ProductController_1.getAllProduct_);
router.put('/product-disable', ProductController_1.disableProduct_);
router.put('/enable-product', ProductController_1.enableProduct_);
router.put('/:code', ProductController_1.updateProduct_);
router.delete('/:code', ProductController_1.deleteProduct_);
exports.default = router;
