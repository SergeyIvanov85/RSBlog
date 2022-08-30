import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3002/api',
    validateStatus: () => true,
})

instance.interceptors.request.use(config => {
    if(!config.headers) config.headers =  {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
})

export default instance
