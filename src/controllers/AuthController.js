import { requests } from '../libs/HttpClient';
import config from '../config.json';

class AuthController {
    constructor() {
        this.savePlayer = this.setCredentials.bind(this);
        this.login = this.login.bind(this);
        this.getCredentials = this.getCredentials.bind(this);
        this.setCredentials = this.setCredentials.bind(this);
    }

    async register({ username, password, name }) {
        const body = { username, password, name };
        const req = await requests.post(config.paths.register, body);

        return req.data;
    }

    async login({ username, password }) {
        const body = { username, password };
        const req = await requests.post(config.paths.login, body);

        this.setCredentials(username, password);

        return req.data;
    }

    isCredentialsSaved() {
        const { username, password } = this.getCredentials();
        const hasUsername = !!username;
        const hasPassword = !!password;
        return hasUsername && hasPassword;
    }

    getCredentials() {
        return {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
        };
    }
    
    setCredentials(username, password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }
}

export default new AuthController();