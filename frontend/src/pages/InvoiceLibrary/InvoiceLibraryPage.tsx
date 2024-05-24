import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://engdeveloper.com/api';

const InvoiceLibraryPage: React.FC = () => {
  const [clientNumber, setClientNumber] = useState<string>('7202788969');
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(`${API_URL}/invoices/client/${clientNumber}`);
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, [clientNumber]);

  const downloadInvoice = async (clientNumber: string, referenceMonth: string) => {
    try {
      const response = await axios.get(`${API_URL}/invoices/download`, {
        params: { clientNumber, month: referenceMonth },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${clientNumber}_${referenceMonth}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the invoice:', error);
    }
  };

  return (
    <div>
      <h1>Biblioteca de Faturas</h1>
      <label>
        Nº DO CLIENTE:
        <input 
          type="text" 
          value={clientNumber}
          onChange={(e) => setClientNumber(e.target.value)}
        />
      </label>
      <ul>
        {invoices.map((invoice: any) => (
          <li key={invoice.id}>
            <span>{invoice.referenceMonth} - </span>
            <button onClick={() => downloadInvoice(invoice.clientNumber, invoice.referenceMonth)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceLibraryPage;
