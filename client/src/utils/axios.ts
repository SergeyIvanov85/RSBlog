import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3002/api',
    validateStatus: () => true,
})

instance.interceptors.request.use(config => {
    const token = window.localStorage.getItem('token');
    if (config.headers !== undefined){
    config.headers.Authorization = token ? `Token ${token}` : '';
    }
    return config
})

export default instance
