"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        host: process.env.MONGO_HOST || 'localhost',
        db: process.env.MONGO_DB || 'inventory_manager',
        user: process.env.MONGO_USER || '',
        pass: process.env.MONGO_PASS || '',
        port: process.env.MONGO_PORT || 27017,
    },
};
exports.default = config;
