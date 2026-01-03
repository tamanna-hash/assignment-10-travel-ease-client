import axios from 'axios';
import React from 'react';
const axiosInstance = axios.create({
    // baseURL:'https://travel-ease-server-nine.vercel.app/'
    baseURL:'http://localhost:3000/'
})
const useAxios = () => {
    return axiosInstance;
};

export default useAxios;