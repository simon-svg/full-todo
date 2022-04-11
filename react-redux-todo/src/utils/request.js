import axios from "axios";
import store from "store";

const axiosAPI = axios.create({
    baseURL: 'http://fulltodo.loc/api/',
    headers: {
        "Content-type": "application/json",
    }
});

axiosAPI.interceptors.request.use((req) => {
    if (store.get('access_token')) {
        req.headers.Authorization = `Beraer ${store.get('access_token')}`;
    }

    return req;
});

const request = (method, url, data = null) => {
    return axiosAPI.request({
        method,
        url,
        data,
    }).then((response) => {
        return response;
    }).catch((error) => {
        console.log(error);
        return error.response;
    });
};

export default request;