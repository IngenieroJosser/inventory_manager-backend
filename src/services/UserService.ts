import dotenv from 'dotenv';
import User, { IUser } from '../models/User';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

dotenv.config();

// const SECRET_KEY = process.env.SECRET_KEY || 'clave_secreta_por_defecto';

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
    if (!userData.password) {
        throw new Error('Password is required');
    }
    
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const dataRegister = { ...userData, password: hashedPassword };
    const user = new User(dataRegister);
    return await user.save();
};

export const getUsers = async (): Promise<IUser[]> => {
    return await User.find().exec();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id).exec();
};

export const getUserByUsername = async (username: string): Promise<IUser | null> => {
    return await User.findOne({ username }).exec();
};

export const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const updateUser = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
    if (updateData.password) {
        updateData.password = await encryptPassword(updateData.password);
    }

    return await User.findByIdAndUpdate(id, updateData, { new: true }).exec();
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id).exec();
};
