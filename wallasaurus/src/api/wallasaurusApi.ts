import axios, { AxiosHeaders } from 'axios';

const wallasaurusApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
});

wallasaurusApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if(token) {
        (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
    return config;
})


export default wallasaurusApi;