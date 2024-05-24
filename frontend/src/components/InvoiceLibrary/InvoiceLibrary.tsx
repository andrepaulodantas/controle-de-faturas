// src/components/InvoiceLibrary/InvoiceLibrary.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Invoice } from '../../types/invoice';

const InvoiceLibrary: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [clientNumber, setClientNumber] = useState<string>('');

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get<Invoice[]>('/api/invoices');
        setInvoices(res.data);
        setFilteredInvoices(res.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clientNumber = e.target.value;
    setClientNumber(clientNumber);
    setFilteredInvoices(invoices.filter(invoice => invoice.clientNumber.includes(clientNumber)));
  };

  const handleDownload = (invoiceId: number) => {
    window.open(`/api/invoices/${invoiceId}/download`, '_blank');
  };

  return (
    <div>
      <h2>Invoice Library</h2>
      <label>
        Filter by Client Number:
        <input type="text" value={clientNumber} onChange={handleFilterChange} />
      </label>
      <ul>
        {filteredInvoices.map(invoice => (
          <li key={invoice.id}>
            {invoice.referenceMonth} - {invoice.clientNumber}
            <button onClick={() => handleDownload(invoice.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceLibrary;
