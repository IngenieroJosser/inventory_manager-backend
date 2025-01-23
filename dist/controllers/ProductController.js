"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableProduct_ = exports.disableProduct_ = exports.deleteProduct_ = exports.updateProduct_ = exports.getAllProduct_ = exports.addProduct = exports.getLowStock = void 0;
const ProductService_1 = require("../services/ProductService");
const getLowStock = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, ProductService_1.getLowStockProducts)();
    res.status(200).json(products);
});
exports.getLowStock = getLowStock;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, ProductService_1.createProduct)(req.body);
    res.status(201).json(product);
});
exports.addProduct = addProduct;
const getAllProduct_ = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, ProductService_1.getAllProduct)();
        res.json(product);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getAllProduct_ = getAllProduct_;
const updateProduct_ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codeProduct = req.params.code;
        const productData = req.body;
        const updatedProduct = yield (0, ProductService_1.updateProduct)(productData, codeProduct);
        res.status(200).json({
            message: 'Producto actualizado exitosamente',
            product: updatedProduct,
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        res.status(400).json({ error: errorMessage });
    }
});
exports.updateProduct_ = updateProduct_;
const deleteProduct_ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codeProduct = req.params.code;
        yield (0, ProductService_1.deleteProduct)(codeProduct);
        res.status(200).json({
            message: 'Product deleted successfully',
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
});
exports.deleteProduct_ = deleteProduct_;
const disableProduct_ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const product = (0, ProductService_1.disableProduct)(code);
        if (!product) {
            res.status(404).json({ error: `Producto con código ${code} no se encontro` });
            return;
        }
        res.status(200).json({ message: `El producto con el código ${code} ha sido deshabilitado exitosamente`, product });
    }
    catch (error) {
        res.status(500).json({ err: 'Error al deshabilitar el producto', error });
    }
});
exports.disableProduct_ = disableProduct_;
const enableProduct_ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.params;
        const product = yield (0, ProductService_1.enableProduct)(code);
        if (!product) {
            res.status(404).json({ error: `Producto con código ${code} no se encontro` });
            return;
        }
        res.status(200).json({ message: `El producto con el código ${code} ha sido habilitado exitosamente` });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al reactivar el producto' });
    }
});
exports.enableProduct_ = enableProduct_;
