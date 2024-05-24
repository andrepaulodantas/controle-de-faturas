// backend/src/routes/routes.ts
import express from 'express';
import authRoutes from './authRoutes';
import invoiceRoutes from './invoiceRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/invoices', invoiceRoutes);

export default router;
