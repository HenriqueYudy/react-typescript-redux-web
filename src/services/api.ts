import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9090/v1/api',
});

export default api;