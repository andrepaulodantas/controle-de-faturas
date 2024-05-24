import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Container } from '@mui/material';
import CustomRechartsComponents from '../../components/CustomRechartsComponents';
import { Invoice } from '../../types/invoice';
import Footer from '../../pages/Footer';

const API_URL = 'https://engdeveloper.com/api';

const DashboardPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [clientNumbers, setClientNumbers] = useState<string[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(`${API_URL}/invoices`);
        if (Array.isArray(response.data)) {
          setInvoices(response.data);
          const uniqueClientNumbers = Array.from(new Set(response.data.map((invoice: Invoice) => invoice.clientNumber))) as string[];
          setClientNumbers(uniqueClientNumbers);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar faturas:', error);
      }
    };

    fetchInvoices();
  }, []);

  useEffect(() => {
    if (selectedClient) {
      setFilteredInvoices(invoices.filter(invoice => invoice.clientNumber === selectedClient));
    } else {
      setFilteredInvoices(invoices);
    }
  }, [selectedClient, invoices]);

  const handleClientChange = (event: SelectChangeEvent<string>) => {
    setSelectedClient(event.target.value as string);
  };

  return (
    <Container maxWidth="lg">
      <h1>Painel de Controle</h1>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="client-select-label">Selecionar Cliente</InputLabel>
        <Select
          labelId="client-select-label"
          id="client-select"
          value={selectedClient}
          onChange={handleClientChange}
          label="Selecionar Cliente"
        >
          {clientNumbers.map((clientNumber) => (
            <MenuItem key={clientNumber} value={clientNumber}>
              {clientNumber}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CustomRechartsComponents invoices={filteredInvoices} />
      <Footer />
    </Container>
  );
};

export default DashboardPage;
