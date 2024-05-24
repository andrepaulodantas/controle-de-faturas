import axios from 'axios';

export const fetchInvoices = async (clientNumber: string) => {
  const response = await axios.get(`/api/invoices?clientNumber=${clientNumber}`);
  return response.data;
};

export const downloadInvoice = async (invoiceId: string) => {
  const response = await axios.get(`/api/invoices/${invoiceId}/download`, { responseType: 'blob' });
  return response.data;
};
