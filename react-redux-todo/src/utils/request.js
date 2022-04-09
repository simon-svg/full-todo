import axios from "axios";

const axiosAPI = axios.create({
    baseURL: 'http://fulltodo.loc/api/',
});


export default axiosAPI