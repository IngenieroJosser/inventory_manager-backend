import Order, { IOrder } from '../models/Order';

export const createOrder = async (orderData: Partial<IOrder>): Promise<IOrder> => {
    const order = new Order(orderData);
    return await order.save();
};

export const getOrders = async (): Promise<IOrder[]> => {
    return await Order.find().populate('productId').exec();
};

export const getOrderById = async (id: string): Promise<IOrder | null> => {
    return await Order.findById(id).populate('productId').exec();
};

export const updateOrder = async (id: string, updateData: Partial<IOrder>): Promise<IOrder | null> => {
    return await Order.findByIdAndUpdate(id, updateData, { new: true }).exec();
};

export const deleteOrder = async (id: string): Promise<IOrder | null> => {
    return await Order.findByIdAndDelete(id).exec();
};
