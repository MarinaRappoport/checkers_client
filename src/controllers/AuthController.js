import { requests } from '../libs/HttpClient';

class AuthController {
    async register({ username, password, name }) {
        const body = { username, password, name };
        const req = await requests.post(`/auth/register`, body);
        return req.data;
    }
}

export default new AuthController();