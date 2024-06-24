import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6675cee0a8d2b4d072f188d3.mockapi.io/ecommerce/'
})

export default api;