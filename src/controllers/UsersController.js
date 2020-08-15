import { requests } from '../libs/HttpClient';
import config from '../config.json';

class UsersController {
    async fetch_all_users() {
        const req = await requests.get(config.paths.allPlayers);
        return req.data;
    }

    async get_current_game(userName) {
        const req = await requests.get(config.paths.currentGame+userName);
        return req.data;
    }

    async get_history(userId) {
        const req = await requests.get(config.paths.getHistory+userId);
        return req.data;
    }
}

export default new UsersController();
