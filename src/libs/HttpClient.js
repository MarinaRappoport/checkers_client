import axios from 'axios';
import config from '../config.json';

const requests = axios.create({
    baseURL: config.server
});

function setHeader(key, value) {
    requests.defaults.headers[key] = value;
}

export {
    requests,
    setHeader
};
