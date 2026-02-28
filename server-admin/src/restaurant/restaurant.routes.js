import { Router } from "express";
import { createRestaurant, getRestaurants, updateRestaurant, deleteRestaurant } from "./restaurant.controller.js";
import { validateCreateRestaurant } from '../../middleware/restaurant-validator.js';
import { uploadRestaurantImage } from "../../middleware/file-uploader.js";
import { cleanupUploadedFileOnFinish } from '../../middleware/delete-file-on-error.js';

const router = Router();

router.get('/', getRestaurants);

router.post(
    '/',
    uploadRestaurantImage.single('image'),
    cleanupUploadedFileOnFinish,
    validateCreateRestaurant,
    createRestaurant
);

// NUEVO: Ruta para actualizar (también pasa por el middleware de imágenes por si subes otra foto)
router.put(
    '/:id',
    uploadRestaurantImage.single('image'),
    cleanupUploadedFileOnFinish,
    updateRestaurant
);

// NUEVO: Ruta para eliminar (Soft Delete)
router.delete('/:id', deleteRestaurant);

export default router;