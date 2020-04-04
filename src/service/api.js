import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://economia.awesomeapi.com.br/all/USD-BRL'
})

export default api;