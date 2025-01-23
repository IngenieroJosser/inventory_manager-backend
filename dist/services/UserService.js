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
exports.deleteUser = exports.updateUser = exports.encryptPassword = exports.getUserByUsername = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// import jwt from 'jsonwebtoken';
dotenv_1.default.config();
// const SECRET_KEY = process.env.SECRET_KEY || 'clave_secreta_por_defecto';
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userData.password) {
        throw new Error('Password is required');
    }
    const hashedPassword = yield bcrypt_1.default.hash(userData.password, 10);
    const dataRegister = Object.assign(Object.assign({}, userData), { password: hashedPassword });
    const user = new User_1.default(dataRegister);
    return yield user.save();
});
exports.createUser = createUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.find().exec();
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.findById(id).exec();
});
exports.getUserById = getUserById;
const getUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.findOne({ username }).exec();
});
exports.getUserByUsername = getUserByUsername;
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    return yield bcrypt_1.default.hash(password, salt);
});
exports.encryptPassword = encryptPassword;
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    if (updateData.password) {
        updateData.password = yield (0, exports.encryptPassword)(updateData.password);
    }
    return yield User_1.default.findByIdAndUpdate(id, updateData, { new: true }).exec();
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.default.findByIdAndDelete(id).exec();
});
exports.deleteUser = deleteUser;
