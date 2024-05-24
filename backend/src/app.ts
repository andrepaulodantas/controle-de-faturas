import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import invoiceRoutes from './routes/invoiceRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api/invoices', invoiceRoutes);
app.use('/api/auth', authRoutes);

export default app;

