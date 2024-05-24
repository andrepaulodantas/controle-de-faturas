import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

interface DashboardProps {
  energyData?: DataPoint[]; // Adicionando '?' para tornar energyData opcional
  costData?: DataPoint[]; // Adicionando '?' para tornar costData opcional
}

const Dashboard: React.FC<DashboardProps> = ({ energyData = [], costData = [] }) => { // Adicionando parâmetros padrão
  return (
    <div>
      <h2>Energy Consumption</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={energyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <h2>Cost Data</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={costData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
