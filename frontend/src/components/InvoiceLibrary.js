import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledError = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  marginTop: theme.spacing(2),
}));

const InvoiceLibrary = () => {
  const [clientNumber, setClientNumber] = useState('');
  const [month, setMonth] = useState('');
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await axios.get(`/api/invoices/download`, {
        params: {
          clientNumber,
          month,
        },
        responseType: 'blob', // important for file download
      });

      // Create a link to download the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Invoice_${clientNumber}_${month}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      setError('Failed to download the invoice. Please try again.');
    }
  };

  return (
    <StyledContainer>
      <StyledTitle variant="h4">
        Biblioteca de Faturas
      </StyledTitle>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <Typography variant="h6">Nº DO CLIENTE</Typography>
        <TextField
          placeholder="Digite o número do cliente"
          variant="outlined"
          value={clientNumber}
          onChange={(e) => setClientNumber(e.target.value)}
          required
          fullWidth
        />
        <Typography variant="h6">Mês</Typography>
        <TextField
          placeholder="Escolha o mês"
          type="month"
          variant="outlined"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownload}
          fullWidth
        >
          Download Fatura
        </Button>
      </StyledForm>
      {error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
};

export default InvoiceLibrary;
