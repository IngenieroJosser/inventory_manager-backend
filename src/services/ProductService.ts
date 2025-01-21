import Product, { IProduct } from '../models/Product';

export const getLowStockProducts = async (): Promise<IProduct[]> => {
    return Product.find({ 
        variants: { $elemMatch: { stock: { $lt: '$lowStockThreshold' } } }
    });
};

export const createProduct = async (productData: IProduct): Promise<IProduct> => {
    return Product.create(productData);
};

export const updateProduct = async (productData: Partial<IProduct>, codeProduct: string): Promise<IProduct | null> => {
    const updatedProduct = await Product.findOneAndUpdate(
        { code: codeProduct }, // Filtro para encontrar el producto por su código
        productData, // Datos que se actualizarán
        { new: true } // Devuelve el documento actualizado
    );

    if (!updatedProduct) {
        throw new Error(`El producto con el código ${codeProduct} no se encontro`);
    }

    return updatedProduct;
};

export const deleteProduct = async (codeProduct: string): Promise<void> => {
    const deletedProduct = await Product.findOneAndDelete({ code: codeProduct });

    if (!deletedProduct) {
        throw new Error(`Product with code ${codeProduct} not found`);
    }
};

export const disableProduct = async (code: string): Promise<IProduct | null> => {
    const product = await Product.findOneAndUpdate(
        { code },
        { isActive: false },
        { new: true } // Retorna el prodcuto actualizado (para que se desactive)
    );
    return product;
}

export const enableProduct = async (code: string): Promise<IProduct | null> => {
    const product = await Product.findOneAndUpdate(
        { code },
        { isActive: true },
        { new: true } // Retorna el producto actualizado (para que se active)
    );
    return product
}
