
import axios from 'axios'
import { PUBLIC_URL } from '../common'

const axiosClient = axios.create({
    baseURL : `${PUBLIC_URL}`,
    headers: {
        'Content-Type': 'application/json',

    }
})
axiosClient.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)
axiosClient.interceptors.response.use(
    response => response,
    error => {
        console.error('Network Error:', error.message); // Ghi log lỗi
        return Promise.reject(error);
    }
)

export default axiosClient;
