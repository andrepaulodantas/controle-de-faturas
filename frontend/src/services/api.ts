import axios from 'axios';

const API_URL = 'https://engdeveloper.com/api';

const api = axios.create({
  baseURL: `${API_URL}/invoices`,
});

export default api;
