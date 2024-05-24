import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

const API_URL = 'https://engdeveloper.com/api';

const UploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const token = localStorage.getItem('token');
      await axios.post(`${API_URL}/invoices/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Upload realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Upload de PDF
      </Typography>
      <TextField
        type="file"
        onChange={handleFileChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleUpload}
      >
        Fazer Upload
      </Button>
    </Container>
  );
};

export default UploadPage;
