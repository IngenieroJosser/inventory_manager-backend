import { Request, Response } from 'express';
import { createProduct, getLowStockProducts } from '../services/ProductService';

export const getLowStock = async (_req: Request, res: Response): Promise<void> => {
    const products = await getLowStockProducts();
    res.status(200).json(products);
};

export const addProduct = async (req: Request, res: Response): Promise<void> => {
    const product = await createProduct(req.body);
    res.status(201).json(product);
};
