import { requests } from '../libs/HttpClient';
import config from '../config.json';

class AuthController {
    constructor() {
        this.savePlayer = this.setCredentials.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.getCredentials = this.getCredentials.bind(this);
        this.removeCredentials = this.removeCredentials.bind(this);
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

    async logout(userId) {
        const req = await requests.get(`${config.paths.logout}${''+userId}`);
        this.removeCredentials();

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

    removeCredentials() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
}

export default new AuthController();