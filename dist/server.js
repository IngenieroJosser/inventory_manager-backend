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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importar cors
const database_1 = __importDefault(require("./shared/database"));
const config_1 = __importDefault(require("./shared/config"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./swaggerConfig"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const OrderRoutes_1 = __importDefault(require("./routes/OrderRoutes"));
const ProductRoutes_1 = __importDefault(require("./routes/ProductRoutes"));
const app = (0, express_1.default)();
const PORT = config_1.default.port;
// Middleware para manejar JSON
app.use(express_1.default.json());
// Configuración de CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Dominio del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true, // Si necesitas enviar cookies o encabezados como Authorization
}));
// Rutas de usuarios
app.use('/api/users', UserRoutes_1.default);
app.use('/api/orders', OrderRoutes_1.default);
app.use('/api/product', ProductRoutes_1.default);
app.use('/api-docs-inventory_manager', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
// Conectar la base de datos y arrancar el servidor
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, database_1.default)();
        app.listen(PORT, () => {
            console.log(`🌐 Server running on http://localhost:${PORT}`);
            console.log(`📻 Documentación disponible en http://localhost:${PORT}/api-docs-inventory_manager`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
});
startServer();
