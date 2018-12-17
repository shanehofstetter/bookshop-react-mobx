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
    tryToUpdateAuthTokenFromHeaders(response.headers);
    return response;
}, (error) => {
    tryToUpdateAuthTokenFromHeaders(error.response.headers);
    return Promise.reject(error);
});

const tryToUpdateAuthTokenFromHeaders = (headers) => {
    if (headers && headers["access-token"]) {
        rootStoreInstance.authStore.updateAuthToken(headers["access-token"]);
    }
};

export default instance;