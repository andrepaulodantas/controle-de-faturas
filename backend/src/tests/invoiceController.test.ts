import request from 'supertest';
import app from '../app'; // Ensure this path is correct
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import pdfParse from 'pdf-parse';

// Generate a valid test PDF file using pdfkit
const generateTestPDF = () => {
  const doc = new PDFDocument({ compress: false });
  const tempFilePath = path.join(__dirname, 'test.pdf');
  const writeStream = fs.createWriteStream(tempFilePath);
  doc.pipe(writeStream);
  doc.fontSize(12);
  doc.text('Nº DA INSTALAÇÃO 123456');
  doc.text('Mês de referência MAR/2024');
  doc.text('Energia Elétrica Quantidade (kWh) 1000');
  doc.text('Energia Elétrica Valor (R$) 500,00');
  doc.text('Energia SCEE s/ICMS – Quantidade (kWh) 200');
  doc.text('Energia SCEE s/ICMS – Valor (R$) 100,00');
  doc.text('Energia Compensada GD I - Quantidade (kWh) 50');
  doc.text('Energia Compensada GD I - Valor (R$) 25,00');
  doc.text('Contrib Ilum Publica Municipal – Valor (R$) 10,00');
  doc.end();

  return new Promise<string>((resolve, reject) => {
    writeStream.on('finish', () => resolve(tempFilePath));
    writeStream.on('error', reject);
  });
};

describe('Invoice Controller', () => {
  describe('uploadPDF', () => {
    it('should extract data from PDF and create an invoice', async () => {
      const tempFilePath = await generateTestPDF(); // Generate the test PDF file

      // Verify that the PDF file was created and its content
      if (!fs.existsSync(tempFilePath)) {
        throw new Error('PDF file was not created.');
      }

      const dataBuffer = fs.readFileSync(tempFilePath);
      const parsedData = await pdfParse(dataBuffer);
      console.log('Parsed PDF Text:', parsedData.text);

      const response = await request(app)
        .post('/api/invoices/upload')
        .attach('file', tempFilePath);

      expect(response.status).toBe(201);
      expect(response.body.clientNumber).toBe('123456');

      fs.unlinkSync(tempFilePath); // Clean up mock file
    }, 10000); // Increase timeout to 10 seconds

    it('should return 400 if no file is uploaded', async () => {
      const response = await request(app).post('/api/invoices/upload');
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('No file uploaded');
    });
  });
});
