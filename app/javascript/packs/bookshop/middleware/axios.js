import axios from "axios";
import {rootStoreInstance} from "../stores/rootStore";

const instance = axios.create({});

instance.interceptors.request.use(function (config) {
    config.headers = {
        ...config.headers,
        'access-token': rootStoreInstance.authStore.user.accessToken,
        'client': rootStoreInstance.authStore.user.client,
        'uid': rootStoreInstance.authStore.user.uid
    };
    return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(function (response) {
    if (response.headers && response.headers["access-token"]) {
        rootStoreInstance.authStore.updateAuthToken(response.headers["access-token"]);
    }
    return response;
}, (error) => Promise.reject(error));

export default instance;