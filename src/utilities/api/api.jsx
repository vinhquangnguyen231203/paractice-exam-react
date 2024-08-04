import axiosClient from "./axiosClient"

export const getProductApi = async() => {
    try{
        const res = await axiosClient({
            method: 'get',
            url: '/products'
        })
        return res.data
    }
    catch(error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
