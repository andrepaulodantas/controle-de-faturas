import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from '../src/pages/AboutPage';
import ContactPage from '../src/pages/ContactPage';
import LoginPage from '../src/pages/LoginPage';
import UploadPage from '../src/pages/UploadPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import InvoiceLibrary from './components/InvoiceLibrary';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/invoice-library" element={<InvoiceLibrary />} />
      </Routes>
    </Router>
  );
};

export default App;
