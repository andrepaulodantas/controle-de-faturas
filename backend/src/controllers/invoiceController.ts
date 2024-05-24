import { Request, Response } from 'express';
import Invoice from '../models/invoice';
import pdfParse from 'pdf-parse';
import fs from 'fs';
import path from 'path'; // Correctly import the path module
import { ExtractedData } from '../types/type';

export const createInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Error creating invoice', error });
  }
};

export const downloadInvoice = async (req: Request, res: Response) => {
  const { clientNumber, month } = req.query;

  if (!clientNumber || !month) {
    return res.status(400).send('Client number and month are required.');
  }

  const filePath = path.join(__dirname, '..', 'invoices', `${clientNumber}_${month}.pdf`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('Invoice not found.');
    }
    res.download(filePath, (err) => {
      if (err) {
        console.error('Error downloading the invoice:', err);
        res.status(500).send('Failed to download the invoice.');
      }
    });
  });
};

export const uploadPDF = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);

    const extractedData: ExtractedData = extractDataFromPDF(pdfData.text);

    const invoice = await Invoice.create({
      clientNumber: extractedData.clientNumber,
      referenceMonth: extractedData.referenceMonth,
      energyConsumption: extractedData.energyConsumption,
      energyCost: extractedData.energyCost,
      sceeeConsumption: extractedData.sceeeConsumption,
      sceeeCost: extractedData.sceeeCost,
      compensatedQuantity: extractedData.compensatedQuantity,
      compensatedEnergy: extractedData.compensatedEnergy,
      publicLightingContribution: extractedData.publicLightingContribution
    });

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading PDF', error });
  }
};

export const getInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.findAll();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invoices', error });
  }
};

export const getInvoiceById = async (req: Request, res: Response) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ message: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invoice', error });
  }
};

export const updateInvoice = async (req: Request, res: Response) => {
  try {
    const [updated] = await Invoice.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedInvoice = await Invoice.findByPk(req.params.id);
      res.status(200).json(updatedInvoice);
    } else {
      res.status(404).json({ message: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating invoice', error });
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const deleted = await Invoice.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting invoice', error });
  }
};

export const getInvoicesByClient = async (req: Request, res: Response) => {
  try {
    const { clientNumber } = req.params;
    const invoices = await Invoice.findAll({ where: { clientNumber } });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invoices', error });
  }
};

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await Invoice.findAll({
      attributes: ['clientNumber'],
      group: ['clientNumber']
    });
    const clientNumbers = clients.map(client => client.clientNumber);
    res.status(200).json(clientNumbers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clients', error });
  }
};

export const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.findAll({
      attributes: [
        'id',
        'clientNumber',
        'referenceMonth',
        'energyConsumption',
        'energyCost',
        'sceeeConsumption',
        'sceeeCost',
        'compensatedQuantity',
        'compensatedEnergy',
        'publicLightingContribution',
        'createdAt',
        'updatedAt'
      ]
    });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving invoices', error });
  }
};

function extractDataFromPDF(text: string): ExtractedData {
  const clientNumberMatch = text.match(/N[ºoO]\s*DA\s*INSTALAÇÃO\s+(\d+)/i);
  const referenceMonthMatch = text.match(/\b([A-Z]{3}\/\d{4})\b/i);

  const energyConsumptionMatch = text.match(/Energia\s*El[é|e]trica\s*kWh\s+(\d+)\s+[\d.,]+\s+([\d.,-]+)/i);
  const energyCostMatch = energyConsumptionMatch ? energyConsumptionMatch[2] : null;

  const sceeeConsumptionMatch = text.match(/Energia\s*SCEE\s*s\/\s*ICMS\s*kWh\s+([\d.,]+)\s+[\d.,]+\s+([\d.,-]+)/i);
  const sceeeQuantityMatch = sceeeConsumptionMatch ? sceeeConsumptionMatch[1] : null;
  const sceeeCostMatch = sceeeConsumptionMatch ? sceeeConsumptionMatch[2] : null;

  const compensatedEnergyMatch = text.match(/Energia\s*compensada\s*GD\s*I\s*kWh\s+([\d.,]+)\s+[\d.,]+\s+([\d.,-]+)/i);
  const compensatedQuantityMatch = compensatedEnergyMatch ? compensatedEnergyMatch[1] : null;
  const compensatedEnergyCostMatch = compensatedEnergyMatch ? compensatedEnergyMatch[2] : null;

  const publicLightingContributionMatch = text.match(/Contrib\s*Ilum\s*Publica\s*Municipal\s+([\d.,-]+)/i);

  const parseFloatWithCommas = (value: string) => parseFloat(value.replace(/\./g, '').replace(',', '.'));

  return {
    clientNumber: clientNumberMatch ? clientNumberMatch[1] : '',
    referenceMonth: referenceMonthMatch ? referenceMonthMatch[1] : '',
    energyConsumption: energyConsumptionMatch ? parseInt(energyConsumptionMatch[1]) : 0,
    energyCost: energyCostMatch ? parseFloatWithCommas(energyCostMatch) : 0,
    sceeeConsumption: sceeeQuantityMatch ? parseFloatWithCommas(sceeeQuantityMatch) : 0,
    sceeeCost: sceeeCostMatch ? parseFloatWithCommas(sceeeCostMatch) : 0,
    compensatedQuantity: compensatedQuantityMatch ? parseFloatWithCommas(compensatedQuantityMatch) : 0,
    compensatedEnergy: compensatedEnergyCostMatch ? parseFloatWithCommas(compensatedEnergyCostMatch) : 0,
    publicLightingContribution: publicLightingContributionMatch ? parseFloatWithCommas(publicLightingContributionMatch[1]) : 0
  };
}

