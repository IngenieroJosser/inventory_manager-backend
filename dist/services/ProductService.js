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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableProduct = exports.disableProduct = exports.deleteProduct = exports.updateProduct = exports.getAllProduct = exports.createProduct = exports.getLowStockProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getLowStockProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return Product_1.default.find({
        variants: { $elemMatch: { stock: { $lt: '$lowStockThreshold' } } }
    });
});
exports.getLowStockProducts = getLowStockProducts;
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    return Product_1.default.create(productData);
});
exports.createProduct = createProduct;
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Product_1.default.find().exec();
});
exports.getAllProduct = getAllProduct;
const updateProduct = (productData, codeProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield Product_1.default.findOneAndUpdate({ code: codeProduct }, // Filtro para encontrar el producto por su código
    productData, // Datos que se actualizarán
    { new: true } // Devuelve el documento actualizado
    );
    if (!updatedProduct) {
        throw new Error(`El producto con el código ${codeProduct} no se encontro`);
    }
    return updatedProduct;
});
exports.updateProduct = updateProduct;
const deleteProduct = (codeProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield Product_1.default.findOneAndDelete({ code: codeProduct });
    if (!deletedProduct) {
        throw new Error(`Producto con código ${codeProduct} no encontrado`);
    }
});
exports.deleteProduct = deleteProduct;
const disableProduct = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product_1.default.findOneAndUpdate({ code }, { isActive: false }, { new: true } // Retorna el prodcuto actualizado (para que se desactive)
    );
    return product;
});
exports.disableProduct = disableProduct;
const enableProduct = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product_1.default.findOneAndUpdate({ code }, { isActive: true }, { new: true } // Retorna el producto actualizado (para que se active)
    );
    return product;
});
exports.enableProduct = enableProduct;
