"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // Especificación OpenAPI
        info: {
            title: 'API de Gestión de Inventario',
            version: '1.0.0',
            description: 'Documentación de API para un sistema de gestión de inventario',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerDocs;
