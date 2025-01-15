import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    role: 'admin' | 'operator';
}

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'operator'], required: true },
});

export default mongoose.model<IUser>('Usuario', UserSchema);
