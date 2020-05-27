import { requests } from '../libs/HttpClient';

class UsersController {
    async fetch_all_users() {
        const req = await requests.get(`/players`);
        return req.data;
    }
}

export default new UsersController();
