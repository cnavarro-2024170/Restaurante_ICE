import Product from './product.model.js';

export const createProductRecord = async ({ productData, file}) => {
    const data = { ...productData };

    if (file) {
        const filename = file.filename;
        // Adaptamos el regex para la carpeta de restaurantes
        const match = filename.match(/Products\/.+$/);
        data.photo = match ? match[0] : filename;
    } else {
        // Imagen por defecto si no se sube ninguna
        data.photo = 'Products/default_';
    }

    const product = new Product(data);
    await product.save();
    return product;
};

export const fetchProducts = async ({
    page = 1,
    limit = 10,
    isActive = true,
}) => {
    const filter = { isActive };
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const products = await Product.find(filter)
        .limit(limitNumber * 1)
        .skip((pageNumber - 1) * limitNumber)
        .sort({ createdAt: -1 });

    const total = await Product.countDocuments(filter);

    return {
        products,
        pagination: {
            currentPage: pageNumber,
            totalPages: Math.ceil(total / limitNumber),
            totalRecords: total,
            limit: limitNumber,
        },
    };
};