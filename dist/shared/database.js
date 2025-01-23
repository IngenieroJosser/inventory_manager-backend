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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { host, db, user, pass, port } = config_1.default.mongodb;
        // Construir la URI de conexión
        const authPart = user && pass ? `${user}:${pass}@` : '';
        const uri = `mongodb://${authPart}${host}:${port}/${db}`;
        yield mongoose_1.default.connect(uri, {
            dbName: db, // Nombre explícito de la base de datos
        });
        console.log('🚀 Database connected successfully!');
        console.log(`🌐 MongoDB URI: ${uri}`);
    }
    catch (error) {
        console.error('❌ Error connecting to the database:', error);
        process.exit(1); // Salir del proceso si la conexión falla
    }
});
exports.default = connectDatabase;
