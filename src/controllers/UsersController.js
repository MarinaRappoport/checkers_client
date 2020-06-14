import { requests } from '../libs/HttpClient';
import config from '../config.json';

class UsersController {
    async fetch_all_users() {
        const req = await requests.get(config.paths.allPlayers);
        return req.data;
    }
}

export default new UsersController();
