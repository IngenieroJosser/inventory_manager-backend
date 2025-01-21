import { Request, Response } from 'express';
import { createProduct, getLowStockProducts, updateProduct, deleteProduct, disableProduct, enableProduct } from '../services/ProductService';

export const getLowStock = async (_req: Request, res: Response): Promise<void> => {
    const products = await getLowStockProducts();
    res.status(200).json(products);
};

export const addProduct = async (req: Request, res: Response): Promise<void> => {
    const product = await createProduct(req.body);
    res.status(201).json(product);
};

export const updateProduct_ = async (req: Request, res: Response): Promise<void> => {
    try {
        const codeProduct = req.params.code;
        const productData = req.body;
        const updatedProduct = await updateProduct(productData, codeProduct);

        res.status(200).json({
            message: 'Producto actualizado exitosamente',
            product: updatedProduct,
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        res.status(400).json({ error: errorMessage });
    }
};

export const deleteProduct_ = async (req: Request, res: Response): Promise<void> => {
    try {
        const codeProduct = req.params.code;

        await deleteProduct(codeProduct);

        res.status(200).json({
            message: 'Product deleted successfully',
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(400).json({ error: errorMessage });
    }
};

export const disableProduct_ = async (req: Request, res: Response): Promise<void> => {
    try {
        const { code } = req.params;
        const product = disableProduct(code);

        if (!product) {
            res.status(404).json({ error: `Producto con código ${code} no se encontro` });
            return;
        }

        res.status(200).json({ message: `El producto con el código ${code} ha sido deshabilitado exitosamente`, product });
    } catch (error) {
        res.status(500).json({ err: 'Error al deshabilitar el producto', error })
    }
};

export const enableProduct_ = async (req: Request, res: Response): Promise<void> => {
    try {
        const { code } = req.params;
        const product = await enableProduct(code);

        if (!product) {
            res.status(404).json({ error: `Producto con código ${code} no se encontro` });
            return;
        }

        res.status(200).json({ message: `El producto con el código ${code} ha sido habilitado exitosamente` });
    } catch (error) {
        res.status(500).json({ error: 'Error al reactivar el producto' });
    }
};