import axios from "axios";

const getInitializedApi = (containType, responseType = 'json') => {
    let api = axios.create({
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
        },
    });
    return api;
};

export const get = (url, data) => {
    return getInitializedApi('application/json')
        .get(url, data)
        .catch(console.log("catch error"));
};

export const post = (url, data) => {
    return getInitializedApi('application/json').post(url, data).catch(console.log("Post error"))
}