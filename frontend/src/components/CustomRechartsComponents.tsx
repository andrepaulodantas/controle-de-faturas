import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Invoice } from '../types/invoice';

interface Props {
  invoices: Invoice[];
}

const CustomRechartsComponents: React.FC<Props> = ({ invoices }) => {
  const energyData = invoices.map(invoice => ({
    name: invoice.referenceMonth,
    'Consumo de Energia (kWh)': invoice.energyConsumption + invoice.sceeeConsumption,
    'Energia Compensada (kWh)': invoice.compensatedEnergy
  }));

  const costData = invoices.map(invoice => ({
    name: invoice.referenceMonth,
    'Custo Total (R$)': invoice.energyCost + invoice.sceeeCost + invoice.publicLightingContribution,
    'Custo Compensado (R$)': invoice.compensatedEnergy
  }));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <div style={{ flex: '1 1 48%', padding: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Consumo de Energia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Consumo de Energia (kWh)" stroke="#8884d8" />
            <Line type="monotone" dataKey="Energia Compensada (kWh)" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ flex: '1 1 48%', padding: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Custos de Energia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Custo Total (R$)" stroke="#8884d8" />
            <Line type="monotone" dataKey="Custo Compensado (R$)" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomRechartsComponents;
