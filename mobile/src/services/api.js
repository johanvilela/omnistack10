import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.1.21.168:3333',
});

export default api;