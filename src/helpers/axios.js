import axios from 'axios';

const baseURL= 'https://cd33-197-149-95-74.ngrok.io/ole_api';
// let headers = {};
// console.log('baseURL',baseURL)
// if(localStorage.token){
//     headers.Authorization = `Bearer ${localStorage.token}`
// }

const axiosInstance =  axios.create({
    baseURL:baseURL,
})

export default axiosInstance;
