import Product, { IProduct } from '../models/Product';

export const getLowStockProducts = async (): Promise<IProduct[]> => {
    return Product.find({ 
        variants: { $elemMatch: { stock: { $lt: '$lowStockThreshold' } } }
    });
};

export const createProduct = async (productData: IProduct): Promise<IProduct> => {
    return Product.create(productData);
};
