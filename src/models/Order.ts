import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
    productId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    supplier: string; // Proveedor
    orderDate: Date;
    status: 'Pending' | 'Completed';
}

const OrderSchema = new Schema<IOrder>({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: false },
    quantity: { type: Number, required: true },
    supplier: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
});

export default mongoose.model<IOrder>('Pedido', OrderSchema);
