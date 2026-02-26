import { createProductRecord, fetchProducts } from './product.service.js';

export const createProductRecord = async (req, res) => {
    try {
        const product = await createProductRecord({
            restaurantData: req.body,
            file: req.file
        });
        
        res.status(201).json({
            success: true,
            message: 'Platillo Creado Exitosamente',
            data: menu
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al Crear el Platillo',
            error: err.message
        });
    }
};

export const getproducts = async (req, res) => {
    try {
        const { page = 1, limit = 10, isActive = true } = req.query;
        
        const { products, pagination } = await fetchProducts({ page, limit, isActive });

        res.status(200).json({
            success: true,
            message: 'Platillo Listados Exitosamente',
            data: products,
            pagination
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al Listar los Platillo Registrados',
            error: err.message
        });
    }
};