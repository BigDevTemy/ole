import axios from 'axios';
const baseURL= 'https://www.oleapp.oceanlink.ng/';
// let headers = {};
// console.log('baseURL',baseURL)
// if(localStorage.token){
//     headers.Authorization = `Bearer ${localStorage.token}`
// }

const axiosInstance =  axios.create({
    baseURL:baseURL,
})

export default axiosInstance;
