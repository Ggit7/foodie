import axios from 'axios'
import {baseURL} from '../Api/Endpoint/ApiEndpoints'


export const axiosInstance=axios.create({
    baseURL,
})
axiosInstance.interceptors.request.use(
    async function(config){
        const token=localStorage.getItem('token')||sessionStorage.getItem('token');
        if(token){
            config.headers['x-access-token']=token;
        }
        return config;
    },
    function(err){
        return Promise.reject(err);
    }
)