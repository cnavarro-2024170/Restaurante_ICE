import { createReservationRecord, fetchReservation } from './reservation.service.js';

export const createReservationRecord = async (req, res) => {
    try {
        const menu = await createReservationRecord({
            reservationData: req.body,
            file: req.file
        });
        
        res.status(201).json({
            success: true,
            message: 'Reservacion Creada Exitosamente',
            data: menu
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al Crear la Reservacion',
            error: err.message
        });
    }
};

export const getReservations = async (req, res) => {
    try {
        const { page = 1, limit = 10, isActive = true } = req.query;
        
        const { menus, pagination } = await fetchReservation({ page, limit, isActive });

        res.status(200).json({
            success: true,
            message: 'Reservaciones Listadas Exitosamente',
            data: menus,
            pagination
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al Listar las Reservaciones Registradas',
            error: err.message
        });
    }
};