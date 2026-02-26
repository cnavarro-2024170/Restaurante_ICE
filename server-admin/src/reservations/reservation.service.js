import Reservation from './reservation.model.js';

export const createReservationRecord = async ({ reservationData}) => {
    const data = { ...reservationData };

    const reservation = new Reservation(data);
    await reservation.save();
    return reservation;
};

export const fetchReservation = async ({
    page = 1,
    limit = 10,
    isActive = true,
}) => {
    const filter = { isActive };
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const reservations = await Reservation.find(filter)
        .limit(limitNumber * 1)
        .skip((pageNumber - 1) * limitNumber)
        .sort({ createdAt: -1 });

    const total = await Reservation.countDocuments(filter);

    return {
        reservations,
        pagination: {
            currentPage: pageNumber,
            totalPages: Math.ceil(total / limitNumber),
            totalRecords: total,
            limit: limitNumber,
        },
    };
};