import { Router } from "express";
import { createTable, getTables, getTableById, updateTable, deleteTable, restoreDeletedTable } from "./table.controller.js";
import { validateCreateTable, validateUpdateTable, validateIdParam } from '../../middleware/table-validator.js';

const router = Router();

router.get('/', getTables);
router.get('/:id', validateIdParam, getTableById);

router.post(
    '/',
    validateCreateTable,
    createTable
);

router.put(
    '/:id',
    validateIdParam,
    validateUpdateTable,
    updateTable
);

router.delete('/:id', validateIdParam, deleteTable);

// Restaurar una mesa eliminada (undo soft-delete)
router.patch('/:id/restore', validateIdParam, restoreDeletedTable);

export default router;