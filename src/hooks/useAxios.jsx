import axios from 'axios';
import React from 'react';
const axiosInstance = axios.create({
    baseURL:'https://travel-ease-server-nine.vercel.app/'
})
const useAxios = () => {
    return axiosInstance;
};

export default useAxios;