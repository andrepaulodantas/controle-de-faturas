// backend/src/routes/invoiceRoutes.ts
import { Router } from 'express';
import { createInvoice, uploadPDF, getInvoices, getInvoiceById, updateInvoice, deleteInvoice, getClients, getInvoicesByClient, downloadInvoice, getAllInvoices } from '../controllers/invoiceController';
import { upload } from '../middlewares/uploadMiddleware';

const router = Router();

router.post('/', createInvoice);
router.post('/upload', upload.single('file'), uploadPDF);
router.get('/', getInvoices);
router.get('/:id', getInvoiceById);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);
router.get('/clients', getClients);
router.get('/client/:clientNumber', getInvoicesByClient);
router.get('/download', downloadInvoice); // Ensure this route is correctly defined
router.get('/all', getAllInvoices);

export default router;
