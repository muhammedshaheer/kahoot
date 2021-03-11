export const BASE_URL = "http://localhost:8081/";

const API_ENDPOINTS = {
    googleLogin: "google/login",
};

const replaceParams = (url, params) => {
    const regex = /\{:[A-Za-z0-9-_]+\}/g;
    let index = 0;
    const path = url ? url.replace(regex, () => params[index++]) : "";
    return path;
};

const Endpoints = {

    getUrl: (key, params = []) => {
        const endpoint = API_ENDPOINTS[key];
        const path = replaceParams(endpoint, params);
        return path;
    },

    getFullUrl: (key, params = []) => {
        const path = Endpoints.getUrl(key, params);
        const url = BASE_URL + path;
        return url;
    },

};

export default Endpoints;