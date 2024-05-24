import React, { useState } from 'react';
import axios from 'axios';

const BibliotecaDeFaturas: React.FC = () => {
    const [clientId, setClientId] = useState('');
    const [month, setMonth] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleDownload = async () => {
        try {
            const response = await axios.get(`/api/invoices/download/${clientId}/${month}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `invoice_${clientId}_${month}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();

            setMessage('Fatura baixada com sucesso!');
            setError('');
        } catch (err) {
            setError('Erro ao baixar a fatura. Verifique o Nº DO CLIENTE e o mês.');
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Biblioteca de Faturas</h1>
            <div>
                <label>
                    Nº DO CLIENTE:
                    <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Mês:
                    <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="YYYY-MM" />
                </label>
            </div>
            <button onClick={handleDownload}>Baixar Fatura</button>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default BibliotecaDeFaturas;
