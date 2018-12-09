import {rootStoreInstance} from "../stores/rootStore";

export const route = (path) => {
    if (path.indexOf('/') !== 0) {
        path = `/${path}`;
    }
    return `/${rootStoreInstance.configStore.language}${path}`;
};