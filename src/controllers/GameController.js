import SockJSClient from '../libs/SockJsClient';
import config from '../config.json';

class GameController {
    constructor() {
        this.sockJSClient = new SockJSClient();
        this.dispatch = null;

        this.connect = this.connect.bind(this);
        this.recvStartGame = this.recvStartGame.bind(this);
    }

    connect(username, dispatch) {
        this.dispatch = dispatch;

        const subscribes = [
            {
                link: '/user/queue/startGame',
                handler: this.recvStartGame
            }
        ];
        this.sockJSClient.connect(config.socketServer, username, subscribes);
    }

    recvStartGame(invitation) {
        console.log(`Recv start game: ` , invitation);
    }

    invitePlayer(player) {
        const data = {
            toUser: player.username
        };
        this.sockJSClient.send(config.paths.invitePlayer, data);
    }
}

export default new GameController();