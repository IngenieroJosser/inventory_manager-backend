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

export const updateUser = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, updateData, { new: true }).exec();
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id).exec();
};

// export const registerUser = async (username: string, password: string, role: 'admin' | 'operator'): Promise<IUser> => {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword, role });
//     return await user.save();
// };
  
// export const authenticateUser = async (username: string, password: string): Promise<string> => {
//     const user = await User.findOne({ username });
//     if (!user) {
//         throw new Error('Usuario no encontrado');
//     }
  
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//         throw new Error('Credenciales incorrectas');
//     }
  
//     const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
//     return token;
// };
