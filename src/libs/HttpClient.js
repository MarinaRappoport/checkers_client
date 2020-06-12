import axios from 'axios';
import config from '../config.json';

export const requests = axios.create({
    baseURL: config.server
});

export function setHeader(key, value) {
    requests.defaults.headers[key] = value;
}