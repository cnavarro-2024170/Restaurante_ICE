import { Router } from "express";
import { createReservationRecord, getReservation } from "./reservation.controller.js";
import { validateCreateReservation } from '../../middleware/reservation-validator.js';

const router = Router();

router.get('/', getReservation);

router.post(
    '/',
    validateCreateReservation,
    createReservationRecord
);

export default router;