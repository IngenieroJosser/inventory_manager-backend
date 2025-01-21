import mongoose, { Schema, Document } from 'mongoose';

export interface IVariant {
    size?: string;
    color?: string;
    stock: number;
}

export interface IProduct extends Document {
    code: string;
    name: string;
    category: string;
    price: number;
    variants: IVariant[];
    lowStockThreshold: number;
    image: Buffer;
    description: string;
}

const VariantSchema = new Schema<IVariant>({
    size: { type: String },
    color: { type: String },
    stock: { type: Number, required: true },
});

const ProductSchema = new Schema<IProduct>({
    code: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    variants: { type: [VariantSchema], required: true },
    lowStockThreshold: { type: Number, default: 10 },
    image: { type: Buffer },
    description: { type: String, required: true },
});

export default mongoose.model<IProduct>('Producto', ProductSchema);
