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
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrders = exports.createOrder = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new Order_1.default(orderData);
    return yield order.save();
});
exports.createOrder = createOrder;
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Order_1.default.find().populate('productId').exec();
});
exports.getOrders = getOrders;
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Order_1.default.findById(id).populate('productId').exec();
});
exports.getOrderById = getOrderById;
const updateOrder = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Order_1.default.findByIdAndUpdate(id, updateData, { new: true }).exec();
});
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Order_1.default.findByIdAndDelete(id).exec();
});
exports.deleteOrder = deleteOrder;
